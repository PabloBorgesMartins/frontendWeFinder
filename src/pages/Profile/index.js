import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

import { useAuth } from '../../hooks/auth'

import * as COLORS from '../../../assets/colorations'
import { eloImages } from '../../utils/getImages'

import { data } from './user'

const Profile = () => {
  const navigation = useNavigation();
  const { signOut, user } = useAuth();

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
          <Icon
            name="cog"
            color={COLORS.Turquoise}
            size={30}
            onPress={() => goToEditProfile()}
          />
          <IconMaterial
            name="logout"
            color={COLORS.Turquoise}
            size={30}
            onPress={() => handleSignOut()}
          />
        </View>
        <Image source={eloImages(`${user.elo}_${user.division}`)} style={styles.avatar} />
        <Text style={[styles.fontBig, { color: COLORS.Turquoise }]}>{user.name}</Text>
        <Text style={[styles.fontSmall, { color: COLORS.zcolorBase }]}>{user.last_name}</Text>
      </View>

      <View style={styles.line} />

      <View style={styles.containerBody} >
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Elo</Text>
          <Text style={styles.fontSmall}>{`${user.elo} ${user.division}`}</Text>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Lanes</Text>
          <View style={styles.containerLanes}>
            {!!user.isTop && <Image source={require('../../../assets/images/lane/Top.png')} style={styles.lane} />}
            {!!user.isJungle && <Image source={require('../../../assets/images/lane/Jungle.png')} style={styles.lane} />}
            {!!user.isMid && <Image source={require('../../../assets/images/lane/Mid.png')} style={styles.lane} />}
            {!!user.isAdc && <Image source={require('../../../assets/images/lane/Adc.png')} style={styles.lane} />}
            {!!user.isSup && <Image source={require('../../../assets/images/lane/Suporte.png')} style={styles.lane} />}
          </View>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Champion Pool</Text>
          <Text style={styles.fontSmall}>{user.champion_pool}</Text>
        </View>
        <View style={styles.containerPlayerData}>
          <Text style={styles.fontBig}>Telefone</Text>
          <Text style={styles.fontSmall}>{user.whatsapp}</Text>
        </View>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.White,
    fontSize: 15,
    textAlign: 'center'
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
    justifyContent: "space-between",
    width: '100%',
    paddingHorizontal: 10,
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
    backgroundColor: COLORS.Charcoal,
    paddingHorizontal: 33,
    flex: 1,
    justifyContent: 'space-around'
  },

  containerPlayerData: {
    marginBottom: 10,
    alignItems: 'center',
  },

  containerLanes: {
    marginTop: 10,
    flexDirection: 'row',
  },

  lane: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
    tintColor: COLORS.White
  },
});
