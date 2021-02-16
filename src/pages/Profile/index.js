import React from 'react';
import {
  Text,
  Alert,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  Button
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import avatar from '../../../assets/images/draven.jpg';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';
const boxColor = '#3b3d3d';

const Profile = () => {
  const navigation = useNavigation();

  function goToEditProfile() {
    navigation.navigate('EditUser');
  }

  return (
    <View style={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('EditUser')} style={styles.iconEdit} onLongPress={() => navigation.navigate('EditUser')}>
        <Icon
          name="edit"
          color={colorBase}
          size={30}
        />
      </TouchableOpacity>

      <ScrollView>

        <View style={styles.header}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={[styles.fontBig, { color: colorBase }]}>dBlackOwl</Text>
          <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
        </View>

        <View style={styles.line} />

        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Elo</Text>
          <Text style={styles.fontSmall}>Platina III</Text>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Lanes</Text>
          <Text style={styles.fontSmall}>Jungle, Adc</Text>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Champion Pool</Text>
          <Text style={styles.fontSmall}>Draven, Rengar, Jhin</Text>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Telefone</Text>
          <Text style={styles.fontSmall}>(35)98464-0000</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: 'white',
    fontSize: 12,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 28,
  },

  background: {
    backgroundColor: colorInput,
    flexGrow: 1,
  },

  iconEdit: {
    position: 'absolute',
    right: 0,
    top: 0,
    padding: 15,
    backgroundColor: 'red',
  },

  header: {
    marginTop: 20,
    borderWidth: 0,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 120,
    width: 120,
    marginBottom: 10,
  },

  line: {
    marginVertical: 20,
    borderBottomColor: colorFont,
    borderBottomWidth: 1,
  },

  containerPlayerData: {
    marginBottom: 10,
    alignItems: 'center',
  },
});
