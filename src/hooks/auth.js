import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
// import api from '../services/api';



const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function loadStoragedData(){
            const [token, user] = await AsyncStorage.multiGet([
                '@Ativamente:token',
                '@Ativamente:user'
            ]);

            if(token[1] && user[1]){
                setData({ token: token[1], user: JSON.parse(user[1])})
            }
            
            setLoading(false);
        }

        loadStoragedData();
    }, [])

  const signIn = useCallback(async ({ email, password }) => {
    // const response = await api.post('sessions', {
    //   email,
    //   password,
    // });

    // const { token, user } = response.data;

    let token = "JOSEJSOEJOSJOE"
    let user = {
        name: "Pablo",
        lane: "Jungle",
        pool: "Draven",
        representative: true
    }

    await AsyncStorage.multiSet([
        ['@Ativamente:token', token],
        ['@Ativamente:user', JSON.stringify(user)]
    ])

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove([
        '@Ativamente:token',
        '@Ativamente:user'
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