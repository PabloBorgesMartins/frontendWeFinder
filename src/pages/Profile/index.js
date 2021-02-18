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
import { color } from 'react-native-reanimated';

import * as COLORS from '../../../assets/colorations'
const colorInput = '#202223';

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

      <View style={styles.header}>
        <View style={styles.iconsContainer}>
          <IconMaterial
            name="logout"
            color={COLORS.Turquoise}
            size={30}
            onPress={() => handleSignOut()}
          />
          <Icon
            name="cog"
            color={COLORS.Turquoise}
            size={30}
            onPress={() => goToEditProfile()}
          />
        </View>
        <Image source={require('../../../assets/images/rank/Diamond_1.png')} style={styles.avatar} />
        <Text style={[styles.fontBig, { color: COLORS.Turquoise }]}>dBlackOwl</Text>
        <Text style={[styles.fontSmall, {color: COLORS.zcolorBase}]}>Pablo Borges Martins</Text>
      </View>

      <View style={styles.line} />

      <ScrollView style={styles.containerBody} >
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
    color: COLORS.White,
    fontSize: 15,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Charcoal,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.JetBlack,
    fontSize: 30,
  },

  background: {
    backgroundColor: COLORS.zchumboEscuro,
    flex: 1,
  },

  iconsContainer: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    width: '100%',
    paddingRight: 10,
    paddingTop: 10,
  },

  header: {
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
    marginTop: 20,
    borderBottomColor: COLORS.Turquoise,
    borderBottomWidth: 1,
    elevation: 10
  },

  containerBody: {
    backgroundColor: COLORS.Gray,
  },

  containerPlayerData: {
    marginBottom: 10,
    alignItems: 'center',
  },
});
