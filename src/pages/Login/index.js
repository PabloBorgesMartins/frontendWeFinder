import React, {useState, useCallback} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors';


import avatar from '../../../assets/images/avatarWeFinder.png';


import { useAuth } from '../../hooks/auth'



import * as COLORS from '../../../assets/colorations'
const colorSection = '#2c2e2e';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function goToSignUp() {
    navigation.navigate('SignUpEmail');
  }

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async () => {

      const data = {
        email: "jose@a.com",
        password: "jds891jd919d1"
      }

      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });

        Alert.alert(
          'Chegou no final!'
        );
      } catch (err) {
        if (err instanceof Yup.ValidationError) {

          return;
        }

        Alert.alert(
          'Erro na autenticação',
          'Ocorreu um erro ao fazer login, cheque suas credenciais'
        );
      }
    }, [signIn]);

  return (
    <>
      <View style={styles.background}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.section}>
            <View style={styles.containerHeader}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.fonte}>ENTRAR NO WEFINDER</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.bodyInputs}>
                <Text style={styles.fonteBody}>USUÁRIO</Text>
                <TextInput
                  onChangeText={(text) => setUsername(text)}
                  style={styles.input}
                  selectionColor={COLORS.Turquoise}
                />
                <Text style={styles.fonteBody}>SENHA</Text>
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  style={styles.input}
                  selectionColor={COLORS.Turquoise}
                />
                <TouchableHighlight
                  style={styles.touch}
                  onPress={() => {}}
                  underlayColor={COLORS.zchumboMedio}
                  activeOpacity={0.3}>
                  <Text style={styles.fonteCadaster}>Esqueci minha senha</Text>
                </TouchableHighlight>
              </View>

              <Button
                onPress={handleSignIn}
                buttonStyle={styles.buttonLogin}
                title={'E N T R A R'}
              />
              <TouchableOpacity
                style={styles.touch}
                onPress={goToSignUp}
                underlayColor={COLORS.zchumboMedio}
                activeOpacity={0.3}>
                <Text style={styles.fonteCadaster}>CADASTRE-SE</Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  fonte: {
    fontFamily: 'MavenPro-Bold',
    color: '#adaeae',
    fontSize: 24,
    flex: 1,
    flexWrap: 'wrap',
  },

  fonteBody: {
    fontFamily: 'MavenPro-Bold',
    color: '#adaeae',
    fontSize: 20,
  },

  background: {
    // backgroundColor: '#3b3d3d',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  section: {
    backgroundColor: COLORS.zchumboMedio,
    position: 'absolute',
    borderRadius: 15,
    marginHorizontal: wp('5%'),
    width: wp('90%'),
    marginVertical: hp('10%'),
    height: hp('80%'),
    padding: 25,
    elevation: 8
  },

  containerHeader: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    height: 50,
    width: 50,
    marginRight: 20,
  },

  body: {
    marginTop: 30,
    marginBottom: 0,
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  bodyInputs: {
    marginVertical: 5,
  },

  input: {
    height: 35,
    marginVertical: 10,
    backgroundColor: '#202223',
    color: '#fff',
    fontFamily: 'MavenPro-Regular',
    borderRadius: 5,
  },

  fonteCadaster: {
    textAlign: 'right',
    fontSize: 13,
    color: '#adaeae',
  },

  touch: {
    backgroundColor: 'transparent',
  },

  buttonLogin: {
    borderRadius: 2,
    height: 47,
    backgroundColor: COLORS.Turquoise,
  },
});
