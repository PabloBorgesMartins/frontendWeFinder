import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';
const boxColor = '#3b3d3d';

const isLeader = true;

const ChatScreen = () => {
  const [message, setMessage] = useState('');

  const navigation = useNavigation();

  function goToProfile() {
    navigation.navigate('Profile');
  }

  return (
    <>
      <View style={styles.background}>
        <View style={styles.header}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-left"
            color={colorFont}
            size={25}
          />

          <Text style={[styles.fontBig, {marginLeft: 20}]}>dBlackOwl</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:38</Text>
              </View>
              <Text style={styles.fontBig}>dBlackOwl</Text>
              <Text style={styles.fontSmall}>Bora marcar treino</Text>
            </View>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:40</Text>
              </View>
              <Text style={styles.fontBig2}>Pinga</Text>
              <Text style={styles.fontSmall}>Bora man!</Text>
            </View>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:40</Text>
              </View>
              <Text style={styles.fontBig2}>Pinga</Text>
              <Text style={styles.fontSmall}>
                Adiciona minha conta la: Siga o Singed
              </Text>
            </View>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:42</Text>
              </View>
              <Text style={styles.fontBig}>dBlackOwl</Text>
              <Text style={styles.fontSmall}>Dmr, vou chamar</Text>
            </View>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:42</Text>
              </View>
              <Text style={styles.fontBig}>dBlackOwl</Text>
              <Text style={styles.fontSmall}>O time ta completo?</Text>
            </View>
            <View style={styles.textBox}>
              <View style={styles.timeContainer}>
                <Text style={styles.fontSmall}>15:44</Text>
              </View>
              <Text style={styles.fontBig2}>Pinga</Text>
              <Text style={styles.fontSmall}>Ta sim man</Text>
            </View>
          </ScrollView>
        </View>
        <View style={styles.footer}>
          <TextInput
            onChangeText={(text) => setMessage(text)}
            style={styles.input}
            placeholder="Escreva uma mensagem"
            placeholderTextColor={colorFont}
            selectionColor={colorBase}
          />
          <Icon
            onPress={() => {}}
            name="chevron-circle-right"
            color={colorFont}
            size={35}
          />
        </View>
      </View>
    </>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 12,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: colorBase,
    fontSize: 28,
  },

  fontBig2: {
    fontFamily: 'MavenPro-Bold',
    color: 'white',
    fontSize: 28,
  },

  background: {
    backgroundColor: colorSection,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 1,
  },

  header: {
    height: 50,
    backgroundColor: 'black',
    width: wp('100%'),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },

  body: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    maxHeight: Dimensions.get('window').height - 100,
  },

  footer: {
    height: 50,
    backgroundColor: 'black',
    width: wp('100%'),
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: 15,
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
    marginBottom: 8,
    height: 88,
    borderColor: colorBase,
    backgroundColor: boxColor,
  },

  input: {
    height: 35,
    backgroundColor: colorInput,
    color: colorFont,
    paddingHorizontal: 10,
    fontFamily: 'MavenPro-Bold',
    borderRadius: 5,
    marginVertical: 3,
    width: wp('80%'),
  },

  buttonSearch: {
    height: 35,
    marginLeft: 10,
    backgroundColor: colorInput,
    maxWidth: wp('10%'),
    borderRadius: 60,
    borderColor: colorFont,
    borderWidth: 1,
  },

  buttonText: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 15,
    color: colorBase,
    flexWrap: 'wrap',
  },

  viewButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    zIndex: 100,
  },
});
