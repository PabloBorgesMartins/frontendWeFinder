import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  TextInput,
  Alert
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';


import * as COLORS from '../../../assets/colorations'


import { data } from './chat'


const ChatScreen = () => {
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  function goToProfile() {
    navigation.navigate('Profile');
  }


  return (
    <View style={styles.background}>
      <View style={styles.header}>
        <Icon
          onPress={() => navigation.goBack()}
          name="arrow-left"
          color={COLORS.zcinzaClaro}
          size={25}
        />

        <Text style={[styles.fontMedium, { marginLeft: 20 }]}>Pinga</Text>
      </View>

      <ScrollView style={{ flex:1 }}>
        {
          data.map((item) => {
            if (item) {
              return (
                <View key={item.id} style={item.isMy ? styles.textBoxMy : styles.textBox}>
                  <View style={item.isMy ? styles.triangleRight : styles.triangleLeft} />
                  <View style={styles.timeContainer}>
                    <Text style={styles.fontSmall}>{item.time}</Text>
                  </View>
                  <Text style={item.isMy ? styles.fontBigMy : styles.fontBig}>{item.user}</Text>
                  <Text style={styles.fontSmall}>{item.message}</Text>
                </View>
              )
            }
          })
        }
      </ScrollView>
      <View style={styles.footer}>
        <TextInput
          onChangeText={(text) => setMessage(text)}
          style={styles.input}
          placeholder="Escreva uma mensagem"
          placeholderTextColor={COLORS.zcinzaClaro}
          selectionColor={COLORS.Turquoise}
        />
        <Icon
          onPress={() => { }}
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
