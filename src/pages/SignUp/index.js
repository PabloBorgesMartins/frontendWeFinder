import React, { useState } from 'react';
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
  Modal,
  TouchableHighlight,
  Alert,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Input, Button, CheckBox } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErrors'

import avatar from '../../../assets/images/avatarWeFinder.png';
import api from '../../services/api'
import * as COLORS from '../../../assets/colorations'

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [nick, setNick] = useState('');
  const [championPoll, setChampionPoll] = useState('');
  const [elo, setElo] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [typePlayer, setTypePlayer] = useState(true);
  const [top, setTop] = useState(true);
  const [jungle, setJungle] = useState(true);
  const [mid, setMid] = useState(true);
  const [adc, setAdc] = useState(true);
  const [sup, setSup] = useState(true);



  const [nivel, setNivel] = useState(0);


  const navigation = useNavigation();

  function goToSignUp() {
    navigation.navigate('SignUpPersonal');
  }

  function goToHome() {
    navigation.navigate('tabHome');
  }

  function handleNivelMinus() {
    if (nivel > 0) {
      setNivel(nivel - 1);
    } else {
      navigation.goBack();
    }
  }

  function handleNivel() {
    switch (nivel) {
      case 0:
        validateRegistrationData()
        break;

      case 1:
        Alert.alert("UH UH papai xego 222")
        setNivel(nivel + 1)
        break;

      default:
        break;
    }
  }

  async function validateRegistrationData() {
    let data = {
      email,
      password,
      passwordConfirmation
    }

    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório!').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres!'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Senha e confirmação de senha devem ser iguais!')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/checkemail', {
        email
      }).then(async (res) => {
        console.log('Message checkEmail->', res.data)
        setNivel(nivel + 1)
      }).catch((err) => {
        console.log('ERR checkemail ->', err);
        Alert.alert("Atenção!", "O email ja está cadastrado na plataforma!")
      });
    } catch (error) {
      const errors = getValidationErrors(error);
      Alert.alert('Atencão!', errors[0])
    }
  }

  async function validateUserData() {
    let data = {
      email,
      password,
      passwordConfirmation
    }

    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('Email obrigatório!').email('Digite um email válido'),
        password: Yup.string().required('Senha obrigatória').min(6, 'A senha deve ter no mínimo 6 caracteres!'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Senha e confirmação de senha devem ser iguais!')
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      await api.post('/checkemail', {
        email
      }).then(async (res) => {
        console.log('Message checkEmail->', res.data)
        setNivel(nivel + 1)
      }).catch((err) => {
        console.log('ERR checkemail ->', err);
        Alert.alert("Atenção!", "O email ja está cadastrado na plataforma!")
      });

      
    } catch (error) {
      const errors = getValidationErrors(error);
      Alert.alert('Atencão!', errors[0])
    }
  }

  return (
    <>
      <View style={styles.background}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
          <View style={styles.section}>
            <View style={styles.containerHeader}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.fonte}>
                JUNTE-SE A NÓS, E ENCONTRE SEU TIME HOJE MESMO!
              </Text>
            </View>


            {
              nivel == 0 ? (
                <>
                  <View style={styles.sectionName}>
                    <Text style={styles.fontName}>DADOS CADASTRAIS</Text>
                  </View>
                  <View style={styles.body}>
                    <View style={styles.bodyInputs}>
                      <TextInput
                        onChangeText={(text) => setEmail(text)}
                        style={styles.input}
                        placeholder="EMAIL"
                        value={email}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setPassword(text)}
                        style={styles.input}
                        placeholder="SENHA"
                        value={password}
                        secureTextEntry={true}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setPasswordConfirmation(text)}
                        style={styles.input}
                        placeholder="CONFIRMAR SENHA"
                        value={passwordConfirmation}
                        secureTextEntry={true}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                    </View>
                  </View>
                </>
              ) : nivel == 1 ? (
                <>
                  <View style={styles.sectionName}>
                    <Text style={styles.fontName}>DADOS PESSOAIS</Text>
                  </View>
                  <View style={styles.body}>
                    <View style={styles.bodyInputs}>
                      <TextInput
                        onChangeText={(text) => setName(text)}
                        style={styles.input}
                        placeholder="NOME"
                        value={name}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setLastName(text)}
                        style={styles.input}
                        placeholder="SOBRENOME"
                        value={lastName}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setBirth(text)}
                        style={styles.input}
                        placeholder="DATA DE NASCIMENTO"
                        value={birth}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                        keyboardType="numeric"
                      />
                      <TextInput
                        onChangeText={(text) => setPhoneNumber(text)}
                        style={styles.input}
                        placeholder="TELEFONE"
                        value={phoneNumber}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                        keyboardType="numeric"
                      />
                    </View>
                  </View>
                </>
              ) : (
                <>
                  <View style={styles.sectionName}>
                    <Text style={styles.fontName}>DADOS DO PLAYER</Text>
                  </View>

                  <View style={styles.body}>
                    <View style={styles.bodyInputs}>
                      <View style={styles.rowCheck}>
                        <CheckBox
                          title="Procuro time"
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          onPress={() => setTypePlayer(!typePlayer)}
                          checked={typePlayer}
                          textStyle={styles.checkFont}
                          containerStyle={styles.checkContainer}
                        />
                        <CheckBox
                          title="Prucuro Jogadores"
                          checkedIcon="dot-circle-o"
                          uncheckedIcon="circle-o"
                          onPress={() => setTypePlayer(!typePlayer)}
                          checked={!typePlayer}
                          textStyle={styles.checkFont}
                          containerStyle={styles.checkContainer}
                        />
                      </View>
                      <TextInput
                        onChangeText={(text) => setNick(text)}
                        style={styles.input}
                        placeholder="NICK"
                        value={nick}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setChampionPoll(text)}
                        style={styles.input}
                        placeholder="CHAMPION POOL"
                        value={championPoll}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />
                      <TextInput
                        onChangeText={(text) => setElo(text)}
                        style={styles.input}
                        placeholder="ELO"
                        value={elo}
                        placeholderTextColor={COLORS.zcinzaClaro}
                        selectionColor={COLORS.Turquoise}
                      />

                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                          setModalVisible(!modalVisible);
                        }}>
                        <View style={styles.centeredView}>
                          <View style={styles.modalView}>
                            <Text style={styles.modalFont}>
                              SELECIONE AS LANES DESEJADAS
                                </Text>
                            <View style={styles.lanesContainer}>
                              <CheckBox
                                title="TOP"
                                onPress={() => setTop(!top)}
                                checked={top}
                                textStyle={styles.checkFont}
                                containerStyle={styles.checkContainer}
                              />
                              <CheckBox
                                title="JUNGLE"
                                onPress={() => setJungle(!jungle)}
                                checked={jungle}
                                textStyle={styles.checkFont}
                                containerStyle={styles.checkContainer}
                              />
                              <CheckBox
                                title="MID"
                                onPress={() => setMid(!mid)}
                                checked={mid}
                                textStyle={styles.checkFont}
                                containerStyle={styles.checkContainer}
                              />
                              <CheckBox
                                title="ADC"
                                onPress={() => setAdc(!adc)}
                                checked={adc}
                                textStyle={styles.checkFont}
                                containerStyle={styles.checkContainer}
                              />
                              <CheckBox
                                title="SUPORTE"
                                onPress={() => setSup(!sup)}
                                checked={sup}
                                textStyle={styles.checkFont}
                                containerStyle={styles.checkContainer}
                              />
                            </View>
                            <View style={styles.centralize}>
                              <TouchableHighlight
                                style={styles.closeModal}
                                onPress={() => {
                                  setModalVisible(!modalVisible);
                                }}>
                                <Text style={styles.openModalFont}>CONFIRMAR</Text>
                              </TouchableHighlight>
                            </View>
                          </View>
                        </View>
                      </Modal>

                      <TouchableHighlight
                        style={styles.openModal}
                        onPress={() => {
                          setModalVisible(true);
                        }}>
                        <Text style={styles.openModalFont}>SELECIONAR LANES</Text>
                      </TouchableHighlight>
                    </View>
                  </View>
                </>
              )
            }



            <View style={styles.footer}>
              <View style={styles.containerTerm}>
                <Text style={styles.fontTerm}>
                  FIQUE TRANQUILO, SEUS DADOS ESTÃO SEGUROS CONOSCO AO SE
                    CADASTRAR VOCÊ CONCORDA COM NOSSOS{' '}
                  {
                    <Text
                      onPress={() => { }}
                      style={[styles.fontTerm, { color: COLORS.Turquoise }]}>
                      TERMOS
                      </Text>
                  }
                </Text>
              </View>
              <View style={styles.line} />
              <View style={styles.containerHeader}>
                <Button
                  onPress={() => handleNivelMinus()}
                  buttonStyle={styles.buttonPrevious}
                  title={'VOLTAR'}
                />
                <Button
                  onPress={() => handleNivel()}
                  buttonStyle={styles.buttonNext}
                  title={'AVANÇAR'}
                />
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  fonte: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 16,
    flex: 1,
    flexWrap: 'wrap',
  },

  fonteBody: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 20,
  },

  background: {
    backgroundColor: COLORS.zchumboClaro,
    position: 'absolute',
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

  centralize: {
    alignItems: 'center',
    justifyContent: 'center',
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
    backgroundColor: COLORS.zcinzaClaro,
    marginHorizontal: wp('15%'),
    maxWidth: wp('60%'),
  },

  fontName: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.JetBlack,
    fontSize: 16,
    textAlign: 'center',
  },

  body: {
    marginTop: 10,
    marginBottom: 0,
    justifyContent: 'space-between',
    flexGrow: 1,
  },

  checkContainer: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    justifyContent: 'center',
    margin: 0,
    left: -15,
  },

  rowCheck: {
    flexDirection: 'row',
  },

  checkFont: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 10,
  },

  input: {
    height: 35,
    backgroundColor: COLORS.zchumboEscuro,
    color: COLORS.zcinzaClaro,
    paddingLeft: 10,
    fontFamily: 'MavenPro-Bold',
    borderRadius: 5,
    marginVertical: 3,
  },

  bodyInputs: {
    marginVertical: 5,
  },

  footer: {
    marginVertical: 5,
  },

  modalFont: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 13,
    color: COLORS.zcinzaClaro,
  },

  openModal: {
    borderRadius: 2,
    height: 35,
    margin: 3,
    backgroundColor: COLORS.Turquoise,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeModal: {
    borderRadius: 2,
    height: 35,
    margin: 3,
    width: wp('40%'),
    backgroundColor: COLORS.Turquoise,
    alignItems: 'center',
    justifyContent: 'center',
  },

  openModalFont: {
    color: COLORS.White,
    fontFamily: 'MavenPro-Bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: COLORS.zchumboEscuro,
    borderRadius: 15,
    borderColor: COLORS.zcinzaClaro,
    borderWidth: 1,
    padding: 35,
    width: wp('80%'),
    shadowColor: COLORS.Pink,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 20,
  },

  lanesContainer: {
    marginVertical: 10,
  },

  containerTerm: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  fontTerm: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 9,
    flex: 1,
    flexWrap: 'wrap',
  },

  line: {
    borderBottomColor: COLORS.zcinzaClaro,
    borderBottomWidth: 1,
    marginVertical: 10,
  },

  buttonNext: {
    borderRadius: 2,
    height: 40,
    backgroundColor: COLORS.Turquoise,
    width: wp('35%'),
  },

  buttonPrevious: {
    borderRadius: 2,
    height: 40,
    backgroundColor: COLORS.zchumboEscuro,
    width: wp('35%'),
  },
});
