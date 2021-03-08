import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import * as COLORS from '../../../assets/colorations'
import api from '../../services/api'
import LoaderView from '../../components/LoaderView'

const isLeader = true;

import { data } from './chat'

const ChatList = () => {
  const navigation = useNavigation();

  const [chatList, setChatList] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      await api.get('/chat')
        .then(async (res) => {
          setChatList(res.data)
          setLoading(false);
        }).catch((err) => {
          console.log('ERR do backend ->', err);
          setLoading(false);
        });
    }
    loadStoragedData();
  }, [])

  function goToChat(id, name) {
    navigation.navigate('ChatScreen', {
      chat_id: id,
      friendName: name
    });
  }

  function goToPlayerList() {
    navigation.navigate('ListUsers');
  }

  if (loading) {
    return <LoaderView />
  }

  return (
    <>
      {isLeader ? (
        <View style={styles.viewButton}>
          <Button
            onPress={goToPlayerList}
            buttonStyle={styles.buttonSearch}
            titleStyle={styles.buttonText}
            title={'PROCURAR JOGADORES'}
          />
        </View>
      ) : null}

      <View style={styles.background}>
        {/* <ScrollView>
          {
            data.map((item) => {
              if (item) {
                return (
                  <TouchableOpacity key={item.id} onPress={goToChat} style={styles.chatBox}>
                    <View style={styles.timeContainer}>
                      <Text style={styles.fontSmall}>{item.time}</Text>
                    </View>
                    <Text style={styles.fontBig}>{item.user}</Text>
                    <Text style={styles.fontSmall}>{item.name}</Text>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <Text style={styles.fontBig}>Você Não possui conversas</Text>
                )
              }
            })
          }
        </ScrollView> */}
        <ScrollView>
          {
            chatList.map((item) => {
              if (item) {
                return (
                  <TouchableOpacity
                    key={item.chat_id}
                    onPress={() => goToChat(item.chat_id, item.nickname, item.userPrimary, item.userSecondary)}
                    style={styles.chatBox}
                  >
                    <View style={styles.timeContainer}>
                      <Text style={styles.fontSmall}>11:00</Text>
                    </View>
                    <Text style={styles.fontBig}>{item.nickname}</Text>
                    <Text style={styles.fontSmall}>{item.name}</Text>
                  </TouchableOpacity>
                )
              } else {
                return (
                  <Text style={styles.fontBig}>Você Não possui conversas</Text>
                )
              }
            })
          }
        </ScrollView>
      </View>
    </>
  );
};

export default ChatList;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 14,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: 'white',
    fontSize: 25,
    marginBottom: 5
  },

  background: {
    backgroundColor: COLORS.zchumboEscuro,
    flexGrow: 1,
    zIndex: 1,
  },

  timeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  chatBox: {
    borderTopWidth: 0,
    padding: 15,
    borderBottomWidth: 2,
    borderColor: COLORS.Turquoise,
    backgroundColor: COLORS.zchumboClaro,
  },

  buttonSearch: {
    padding: 10,
    backgroundColor: COLORS.JetBlack,
    maxWidth: wp('40%'),
    borderRadius: 60,
    borderColor: COLORS.zcinzaClaro,
    borderWidth: 1,
    elevation: 10
  },

  buttonText: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 15,
    color: 'white',
    flexWrap: 'wrap',
  },

  viewButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 100,
  },
});
