import * as React from 'react';
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

import avatar from '../../../assets/images/avatarWeFinder.png';
import background from '../../../assets/images/loginBackground.png';

import AuthContext from '../../contexto';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';

const Login = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const navigation = useNavigation();

  const {signIn} = React.useContext(AuthContext);

  function goToSignUp() {
    navigation.navigate('SignUpEmail');
  }

  function handleSignIn() {
    navigation.navigate('tabHome');
  }

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
                  selectionColor={colorBase}
                />
                <Text style={styles.fonteBody}>SENHA</Text>
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  secureTextEntry={true}
                  style={styles.input}
                  selectionColor={colorBase}
                />
                <TouchableHighlight
                  style={styles.touch}
                  onPress={() => {}}
                  underlayColor={colorSection}
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
                underlayColor={colorSection}
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
    backgroundColor: '#3b3d3d',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  section: {
    backgroundColor: colorSection,
    position: 'absolute',
    borderRadius: 15,
    marginHorizontal: wp('5%'),
    width: wp('90%'),
    marginVertical: hp('10%'),
    height: hp('80%'),
    padding: 25,
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
    backgroundColor: colorBase,
  },
});
