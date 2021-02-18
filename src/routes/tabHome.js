import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {StatusBar, View, Text, StyleSheet, Image} from 'react-native';

import avatar from '../../assets/images/avatarWeFinder.png';

import ChatList from '../pages/ChatList';
import Profile from '../pages/Profile';


import * as COLORS from '../../assets/colorations'

const Tab = createMaterialTopTabNavigator();

export default function tabHome() {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="transparent" hidden />
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <Text style={styles.headerText}>WeFinder</Text>
      </View>
      <Tab.Navigator
        initialRouteName="chatList"
        tabBarOptions={{
          showIcon: true,
          activeTintColor: COLORS.Turquoise,
          inactiveTintColor: COLORS.Pewter,
          indicatorStyle: {
            backgroundColor: COLORS.Turquoise,
          },
          tabStyle: {
            flexDirection: 'row',
          },
          labelStyle: {
            fontSize: 14,
            fontFamily: 'MavenPro-Regular',
          },
          style: {backgroundColor: COLORS.zchumboMedio},
        }}>
        <Tab.Screen
          name="Conversas"
          component={ChatList}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="comments" color={color} size={22} />
            ),
          }}
        />
        <Tab.Screen
          name="Perfil"
          component={Profile}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user" color={color} size={22} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
    backgroundColor: COLORS.zchumboEscuro,
  },

  headerText: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Pewter,
    fontSize: 22,
  },

  avatar: {
    height: 30,
    width: 30,
    marginRight: 10,
  },
});
