import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import api from '../services/api';


const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function loadStoragedData(){
            const [token, user] = await AsyncStorage.multiGet([
                '@WeFinder:token',
                '@WeFinder:user'
            ]);
            // console.log('USER -> ', JSON.parse(user[1]))
            if(token[1] && user[1]){
                setData({ token: token[1], user: JSON.parse(user[1])})
            }
            
            setLoading(false);
        }

        loadStoragedData();
    }, [])

  const signIn = useCallback(async ({ email, password }) => {
    setLoading(true);

    await api.post('/session', {
      email: email,
      password: password,
    }).then(async (res) => {
      const { token, user } = res.data;

      await AsyncStorage.multiSet([
        ['@WeFinder:token', token],
        ['@WeFinder:user', JSON.stringify(user)],
      ]);
      setData({ token, user });
      setLoading(false);
    }).catch((err) => {
      console.log('ERR do backend -> ', err);
      setLoading(false);
      Alert.alert(
        'Erro ao fazer Login!',
        'Cheque suas credenciais!',
      );
    });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
        '@WeFinder:token',
        '@WeFinder:user'
    ]);

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };