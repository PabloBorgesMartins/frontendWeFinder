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


const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';

const SignUpEmail = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');


  const navigation = useNavigation();

  function goToSignUp() {
    navigation.navigate('SignUpPersonal');
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
              <Text style={styles.fonte}>
                JUNTE-SE A NÓS, E ENCONTRE SEU TIME HOJE MESMO!
              </Text>
            </View>
            <View style={styles.sectionName}>
              <Text style={styles.fontName}>DADOS CADASTRAIS</Text>
            </View>
            <View style={styles.body}>
              <View style={styles.bodyInputs}>
                <TextInput
                  onChangeText={(text) => setEmail(text)}
                  style={styles.input}
                  placeholder="EMAIL"
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
                />
                <TextInput
                  onChangeText={(text) => setPassword(text)}
                  style={styles.input}
                  placeholder="SENHA"
                  secureTextEntry={true}
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
                />
                <TextInput
                  onChangeText={(text) => setPasswordConfirmation(text)}
                  style={styles.input}
                  placeholder="CONFIRMAR SENHA"
                  secureTextEntry={true}
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
                />
              </View>

              <View style={styles.bodyFooter}>
                <View style={styles.containerTerm}>
                  <Text style={styles.fontTerm}>
                    FIQUE TRANQUILO, SEUS DADOS ESTÃO SEGUROS CONOSCO AO SE
                    CADASTRAR VOCÊ CONCORDA COM NOSSOS{' '}
                    {
                      <Text
                        onPress={() => {}}
                        style={[styles.fontTerm, {color: '#45D0C1'}]}>
                        TERMOS
                      </Text>
                    }
                  </Text>
                </View>
                <View style={styles.line} />
                <View style={styles.containerHeader}>
                  <Button
                    onPress={() => navigation.goBack()}
                    buttonStyle={styles.buttonPrevious}
                    title={'VOLTAR'}
                  />
                  <Button
                    onPress={goToSignUp}
                    buttonStyle={styles.buttonNext}
                    title={'AVANÇAR'}
                  />
                </View>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignUpEmail;

const styles = StyleSheet.create({
  fonte: {
    fontFamily: 'MavenPro-Bold',
    color: '#adaeae',
    fontSize: 16,
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

  sectionName: {
    marginTop: 20,
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#adaeae',
    marginHorizontal: wp('15%'),
    maxWidth: wp('60%'),
  },

  fontName: {
    fontFamily: 'MavenPro-Bold',
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },

  body: {
    marginTop: 10,
    marginBottom: 0,
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  input: {
    height: 35,
    backgroundColor: colorInput,
    color: colorFont,
    paddingLeft: 10,
    fontFamily: 'MavenPro-Bold',
    borderRadius: 5,
    marginVertical: 3,
  },

  bodyInputs: {
    marginVertical: 5,
  },

  bodyFooter: {
    marginVertical: 5,
  },

  fonteCadaster: {
    textAlign: 'right',
    fontSize: 13,
    color: '#adaeae',
  },

  containerTerm: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  fontTerm: {
    fontFamily: 'MavenPro-Bold',
    color: '#adaeae',
    fontSize: 9,
    flex: 1,
    flexWrap: 'wrap',
  },

  line: {
    borderBottomColor: colorFont,
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  buttonNext: {
    borderRadius: 2,
    height: 40,
    backgroundColor: colorBase,
    width: wp('35%'),
  },

  buttonPrevious: {
    borderRadius: 2,
    height: 40,
    backgroundColor: colorInput,
    width: wp('35%'),
  },
});
