import * as React from 'react';
import {NavigationContainer, DrawerActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Icon from 'react-native-vector-icons/FontAwesome';
import {View, Alert, TouchableOpacity, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

//import api from './services/api';

import Login from './pages/Login';
import SignUpPersonal from './pages/SignUpPersonal';
import SignUpPlayer from './pages/SignUpPlayer';
import SignUpEmail from './pages/SignUpEmail';
import tabHome from './routes/tabHome';
import ChatScreen from './pages/ChatScreen';
import EditUser from './pages/EditUser';
import ListUsers from './pages/ListUsers';

import AuthContext from './contexto';

const AppStack = createStackNavigator();

const Routes = ({navigation}) => {
  const [isVinculated, setIsVinculated] = React.useState(true);

  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    },
  );

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (data) => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        const login = {
          user_email: data.username,
          user_password: data.password,
        };

        try {
          /*const response = await api.post('sessions', login);
          dispatch({type: 'SIGN_IN', token: response.data.token});
          await AsyncStorage.setItem('userToken', response.data.token);*/
          dispatch({type: 'SIGN_IN', token: '123'});
          await AsyncStorage.setItem('userToken', '123');
        } catch (error) {
          Alert.alert(
            'Falha no login',
            'Usuário não encontrado, tente novamente.',
          );
        }
      },
      signOut: async () => {
        dispatch({type: 'SIGN_OUT'});
        await AsyncStorage.removeItem('userToken');
      },
    }),
    [],
  );

  if (state.isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <AppStack.Navigator headerMode="none" options>
          {state.userToken != null ? (
            <></>
          ) : (
            <>
              <AppStack.Screen name="Login" component={Login} />
              <AppStack.Screen name="tabHome" component={tabHome} />
              <AppStack.Screen
                name="SignUpPersonal"
                component={SignUpPersonal}
              />
              <AppStack.Screen name="SignUpEmail" component={SignUpEmail} />
              <AppStack.Screen name="SignUpPlayer" component={SignUpPlayer} />

              <AppStack.Screen name="ListUsers" component={ListUsers} />

              <AppStack.Screen name="EditUser" component={EditUser} />

              <AppStack.Screen name="ChatScreen" component={ChatScreen} />
            </>
          )}
        </AppStack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Routes;
