import React, {useState} from 'react';
import {
  ActivityIndicator,
  StatusBar,
  Dimensions,
  StyleSheet,
  View,
  Image,
  Text,
  Modal,
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
import {CheckBox, Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import avatar from '../../../assets/images/avatarWeFinder.png';
import background from '../../../assets/images/loginBackground.png';

import AuthContext from '../../contexto';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';

const Login = () => {
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

  const {signIn} = React.useContext(AuthContext);

  const navigation = useNavigation();

  function goToHome() {
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
              <Text style={styles.fonte}>
                JUNTE-SE A NÓS, E ENCONTRE SEU TIME HOJE MESMO!
              </Text>
            </View>

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
                    title="Prucuro Jogador"
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
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
                />
                <TextInput
                  onChangeText={(text) => setChampionPoll(text)}
                  style={styles.input}
                  placeholder="CHAMPION POOL"
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
                />
                <TextInput
                  onChangeText={(text) => setElo(text)}
                  style={styles.input}
                  placeholder="ELO"
                  placeholderTextColor={colorFont}
                  selectionColor={colorBase}
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
                    onPress={goToHome}
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

export default Login;

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
    color: '#adaeae',
    fontSize: 10,
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

  modalFont: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 13,
    color: '#adaeae',
  },

  openModal: {
    borderRadius: 2,
    height: 35,
    margin: 3,
    backgroundColor: colorBase,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeModal: {
    borderRadius: 2,
    height: 35,
    margin: 3,
    width: wp('40%'),
    backgroundColor: colorBase,
    alignItems: 'center',
    justifyContent: 'center',
  },

  openModalFont: {
    color: '#FFF',
    fontFamily: 'MavenPro-Bold',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalView: {
    backgroundColor: colorInput,
    borderRadius: 15,
    borderColor: colorFont,
    borderWidth: 1,
    padding: 35,
    width: wp('80%'),
    shadowColor: 'red',
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
