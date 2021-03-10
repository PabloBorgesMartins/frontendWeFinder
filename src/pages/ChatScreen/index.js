import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  FlatList,
  Alert
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
// import socketIOClient from "socket.io-client";
import io from "socket.io-client";

import LoaderView from '../../components/LoaderView'
import * as COLORS from '../../../assets/colorations'
import api from '../../services/api'
import { useAuth } from '../../hooks/auth'


const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

import { data } from './chat'


const ChatScreen = ({ route }) => {
  const navigation = useNavigation();

  const { user } = useAuth();

  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [friendID, setFriendID] = useState(null);

  const scrollElementRef = useRef(null);
  const inputRef = useRef(null)

  const { chat_id, friendName } = route.params;

  useEffect(() => {
    console.log("type of chat_id ->", typeof (chat_id))
    console.log("chat_id ->", chat_id)
    console.log("type of user.id ->", typeof (user.id))
    console.log("user.id ->", user.id)
    async function loadStoragedData() {
      await api.get(`/chat/messages/${chat_id}`)
        .then(async (res) => {
          // console.log('Mensagens BUSCADO->', res.data)
          setFriendID(res.data.friendID)
          const lista = res.data.messages.map((item) => {
            if (item.user_id === user.id) {
              return {
                ...item,
                isMy: true
              }
            } else {
              return {
                ...item,
                isMy: false
              }
            }
          })
          await setMessages(lista)
        }).catch((err) => {
          console.log('ERR do backend ->', err);
          setLoading(false);
        });
      setLoading(false);
    }
    loadStoragedData();
  }, [])




  /////////////////////FUNCIONALIDADES DO SOCKETIO///////////////////////////////////////

  // Join chatroom
  // NOME = ID do usuario Wefinder, SALA = ID do chat WeFinder
  const socket = io("http://192.168.100.2:3335");
  // const socket = io("http://192.168.100.2:3335", {
  //   secure: true,
  //   transports: ['websocket'],
  // });
  socket.emit("joinRoom", user.id, chat_id);

  // Message from server
  socket.on("message", (message) => {
    console.log(`mensagem enviada por usuario de id -> ${message.username}`);
    console.log(message);
    outputMessage(message);
  });

  // Message submit
  function handleSubmit() {
    // event.preventDefault();
    console.log("MENSAGEM DO APP WEFINDER ->", message)
    // Emit message to server
    socket.emit("chatMessage", message);

    // Clear input
    inputRef.current.clear();
  }

  // Output message to DOM
  function outputMessage(message) {
    // const newMessage = [{
    //   nickname: message.username == user.id ? user.nickname : friendName,
    //   message: message.text,
    //   created_at: message.time,
    //   isMy: message.username == user.id ? true : false
    // }]
    const newMessage = {
      nickname: message.username == user.id ? user.nickname : friendName,
      message: message.text,
      created_at: message.time,
      isMy: message.username == user.id ? true : false
    }
    const teste = messages.concat(newMessage)
    console.log("passou aqui")
    setMessages(teste);
  }

  function goBack() {
    socket.close();
    navigation.goBack();
  }
  /////////////////////////////////////////////////////////////////////////////////////

  // useEffect(() => {
  //   const teste = async () => {
  //     const socket = await io("http://192.168.100.2:3335", {
  //       secure: true,
  //       transports: ['websocket'],
  //     });
  //     socket.emit("joinRoom", user.id, chat_id );
  //   }
  //   teste();
  // }, [])

  function goToProfile() {
    navigation.navigate('ProfilePlayer', { user_id: friendID });
  }


  if (loading) {
    return <LoaderView />
  }

  return (
    <View style={styles.background} >
      <TouchableOpacity
        style={styles.header}
        onPress={() => goToProfile()}
      >
        <Icon
          onPress={() => goBack()}
          name="arrow-left"
          color={COLORS.zcinzaClaro}
          size={25}
        />

        <Text style={[styles.fontMedium, { marginLeft: 20 }]}>{friendName}</Text>
      </TouchableOpacity>
      <FlatList
        ref={scrollElementRef}
        initialNumToRender={messages.length}
        onContentSizeChange={() => scrollElementRef.current.scrollToEnd({ animated: true })}
        data={messages}
        style={{ flex: 1 }}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={true}
        renderItem={({ item }) => {
          return (
            <View key={item.created_at} style={item.isMy ? styles.textBoxMy : styles.textBox}>
              <View style={item.isMy ? styles.triangleRight : styles.triangleLeft} />
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>{item.created_at.split(" ")[1]}</Text>
              </View>
              <Text style={item.isMy ? styles.fontBigMy : styles.fontBig}>{item.nickname}</Text>
              <Text style={styles.fontSmall}>{item.message}</Text>
            </View>
          )
        }}
      />
      {/* <ScrollView
        removeClippedSubviews={true}
        style={{ flex: 1 }}
        ref={scrollElementRef}
        onContentSizeChange={() => {
          scrollElementRef.current.scrollToEnd({ animated: true, duration: 500 });
        }}
      >
       

        {
          messages.map((item) => {
            if (item) {
              return (
                <View key={item.message_id} style={item.isMy ? styles.textBoxMy : styles.textBox}>
                  <View style={item.isMy ? styles.triangleRight : styles.triangleLeft} />
                  <View style={styles.timeContainer}>
                    <Text style={styles.fontSmall}>{item.created_at.split(" ")[1]}</Text>
                  </View>
                  <Text style={item.isMy ? styles.fontBigMy : styles.fontBig}>{item.nickname}</Text>
                  <Text style={styles.fontSmall}>{item.message}</Text>
                </View>
              )
            }
          })
        }

      </ScrollView> */}

      <View style={styles.footer}>
        <TextInput
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
          placeholder="Escreva uma mensagem"
          placeholderTextColor={COLORS.zcinzaClaro}
          selectionColor={COLORS.Turquoise}
          ref={inputRef}
          returnKeyType="send"
          onSubmitEditing={() => {

            handleSubmit();
          }}
        />
        <Icon
          onPress={() => handleSubmit()}
          name="chevron-circle-right"
          color={COLORS.zcinzaClaro}
          size={35}
        />
      </View>



    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.White,
    fontSize: 15,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Turquoise,
    fontSize: 25,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Turquoise,
    fontSize: 30,
    marginBottom: 15
  },

  fontBigMy: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zchumboEscuro,
    fontSize: 30,
    marginBottom: 15
  },

  background: {
    flex: 1,
    backgroundColor: COLORS.Charcoal,
  },

  header: {
    backgroundColor: COLORS.zchumboEscuro,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0,
    borderColor: COLORS.White,
  },

  body: {
    paddingHorizontal: 0,
    paddingVertical: 5,
  },

  footer: {
    backgroundColor: COLORS.zchumboEscuro,
    flexDirection: 'row',
    borderTopWidth: 0,
    borderColor: '#FFF',
    paddingHorizontal: 15,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  timeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  textBox: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    marginRight: 40,
    marginLeft: 15,
    borderColor: COLORS.Turquoise,
    backgroundColor: COLORS.zchumboMedio,
  },

  textBoxMy: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 5,
    marginLeft: 40,
    marginRight: 15,
    borderColor: COLORS.Turquoise,
    backgroundColor: COLORS.zcolorBase,
  },

  input: {
    height: 35,
    backgroundColor: COLORS.zchumboEscuro,
    color: COLORS.zcinzaClaro,
    paddingHorizontal: 10,
    fontFamily: 'MavenPro-Bold',
    borderRadius: 5,
    marginVertical: 3,
    width: '80%'
  },

  buttonSearch: {
    height: 35,
    marginLeft: 10,
    backgroundColor: COLORS.zchumboEscuro,
    maxWidth: wp('10%'),
    borderRadius: 60,
    borderColor: COLORS.zcinzaClaro,
    borderWidth: 1,
  },

  triangleRight: {
    position: 'absolute',
    top: 20,
    right: -15,
    backgroundColor: 'transparent',
    borderTopWidth: 10,
    borderRightWidth: 0,
    borderBottomWidth: 10,
    borderLeftWidth: 15,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: COLORS.zcolorBase,
  },
  triangleLeft: {
    position: 'absolute',
    top: 20,
    left: -15,
    backgroundColor: 'transparent',
    borderTopWidth: 10,
    borderRightWidth: 15,
    borderBottomWidth: 10,
    borderLeftWidth: 0,
    borderTopColor: 'transparent',
    borderRightColor: COLORS.zchumboMedio,
    borderBottomColor: 'transparent',
    borderLeftColor: "transparent",
  }
});
