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
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import avatar from '../../../assets/images/rank/Diamond_1.png';

import { useAuth } from '../../hooks/auth'

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';
const boxColor = '#3b3d3d';

const Profile = () => {
  const navigation = useNavigation();
  const { signOut } = useAuth();

  function goToEditProfile() {
    navigation.navigate('EditUser');
  }

  async function handleSignOut() {
    await signOut();
  }

  return (
    <View style={styles.background}>
      <View style={styles.iconsContainer}>
        <IconMaterial
          name="logout"
          color={colorBase}
          size={30}
          onPress={() => handleSignOut()}
        />
        <Icon
          name="cog"
          color={colorBase}
          size={30}
          onPress={() => goToEditProfile()}
        />
      </View>


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

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    paddingRight: 10,
    paddingTop: 10
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
