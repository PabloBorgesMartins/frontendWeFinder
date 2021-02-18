import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import Login from '../pages/Login';
import SignUpPersonal from '../pages/SignUpPersonal';
import SignUpPlayer from '../pages/SignUpPlayer';
import SignUpEmail from '../pages/SignUpEmail';


import * as COLORS from '../../assets/colorations'


const Auth = createStackNavigator();

const AuthRoutes = () => (
  <Auth.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: COLORS.zchumboClaro},
    }}
    initialRouteName="Login"
  >
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen
      name="SignUpPersonal"
      component={SignUpPersonal}
    />
    <Auth.Screen name="SignUpEmail" component={SignUpEmail} />
    <Auth.Screen name="SignUpPlayer" component={SignUpPlayer} />
  </Auth.Navigator>
);

export default AuthRoutes;