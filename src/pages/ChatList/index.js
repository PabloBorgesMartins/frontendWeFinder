import React from 'react';
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
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';
const boxColor = '#3b3d3d';

const isLeader = true;

const ChatList = () => {
  const navigation = useNavigation();

  function goToChat() {
    navigation.navigate('ChatScreen');
  }

  function goToPlayerList() {
    navigation.navigate('ListUsers');
  }

  return (
    <>
      {isLeader ? (
        <View style={styles.viewButton}>
          <Button
            onPress={goToPlayerList}
            buttonStyle={styles.buttonSearch}
            titleStyle={styles.buttonText}
            title={'PROCURAR PLAYERS'}
          />
        </View>
      ) : null}

      <View style={styles.background}>
        <ScrollView>
          <TouchableOpacity onPress={goToChat} style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>15:38</Text>
            </View>
            <Text style={styles.fontBig}>dBlackOwl</Text>
            <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>12:52</Text>
            </View>
            <Text style={styles.fontBig}>D U E U</Text>
            <Text style={styles.fontSmall}>Eduardo Vieira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>06:48</Text>
            </View>
            <Text style={styles.fontBig}>MnR NightPhantom</Text>
            <Text style={styles.fontSmall}>Vinicius Carneiro da Silva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>15:38</Text>
            </View>
            <Text style={styles.fontBig}>dBlackOwl</Text>
            <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>12:52</Text>
            </View>
            <Text style={styles.fontBig}>D U E U</Text>
            <Text style={styles.fontSmall}>Eduardo Vieira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>06:48</Text>
            </View>
            <Text style={styles.fontBig}>MnR NightPhantom</Text>
            <Text style={styles.fontSmall}>Vinicius Carneiro da Silva</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>15:38</Text>
            </View>
            <Text style={styles.fontBig}>dBlackOwl</Text>
            <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>12:52</Text>
            </View>
            <Text style={styles.fontBig}>D U E U</Text>
            <Text style={styles.fontSmall}>Eduardo Vieira</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatBox}>
            <View style={styles.timeContainer}>
              <Text style={styles.fontSmall}>06:48</Text>
            </View>
            <Text style={styles.fontBig}>MnR NightPhantom</Text>
            <Text style={styles.fontSmall}>Vinicius Carneiro da Silva</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default ChatList;

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
    color: 'white',
    fontSize: 28,
  },

  background: {
    backgroundColor: colorInput,
    flexGrow: 1,
    zIndex: 1,
  },

  timeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  chatBox: {
    borderTopWidth: 1,
    padding: 10,
    borderBottomWidth: 1,
    height: 88,
    borderColor: colorBase,
    backgroundColor: boxColor,
  },

  buttonSearch: {
    padding: 10,
    backgroundColor: colorBase,
    maxWidth: wp('40%'),
    borderRadius: 60,
    borderColor: colorFont,
    borderWidth: 1,
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
