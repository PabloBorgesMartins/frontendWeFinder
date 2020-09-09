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
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import {CheckBox, Input, Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import avatar from '../../../assets/images/draven.jpg';

const colorBase = '#5abdb8';
const colorSection = '#2c2e2e';
const colorFont = '#adaeae';
const colorInput = '#202223';
const boxColor = '#3b3d3d';

const isLeader = true;

const EditUser = () => {
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
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [birth, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordConfirmation, setPasswordConfirmation] = React.useState('');

  const navigation = useNavigation();

  function saveData() {
    navigation.navigate('tabHome');
  }

  return (
    <>
      <View style={styles.background}>
        <View style={styles.topBar}>
          <Icon
            onPress={saveData}
            name="arrow-left"
            color={colorFont}
            size={20}
          />
          <Text style={[styles.fontBig, {marginLeft: 20}]}>Editar Usuário</Text>
        </View>
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.header}>
              <Image source={avatar} style={styles.avatar} />
              <Text style={styles.fontBig}>dBlackOwl</Text>
              <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.section}>
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
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.section}>
              <View style={styles.sectionName}>
                <Text style={styles.fontName}>DADOS PESSOAIS</Text>
              </View>
              <View style={styles.body}>
                <View style={styles.bodyInputs}>
                  <TextInput
                    onChangeText={(text) => setName(text)}
                    style={styles.input}
                    placeholder="NOME"
                    placeholderTextColor={colorFont}
                    selectionColor={colorBase}
                  />
                  <TextInput
                    onChangeText={(text) => setLastName(text)}
                    style={styles.input}
                    placeholder="SOBRENOME"
                    placeholderTextColor={colorFont}
                    selectionColor={colorBase}
                  />
                  <TextInput
                    onChangeText={(text) => setBirth(text)}
                    style={styles.input}
                    placeholder="DATA DE NASCIMENTO"
                    placeholderTextColor={colorFont}
                    selectionColor={colorBase}
                    keyboardType="numeric"
                  />
                  <TextInput
                    onChangeText={(text) => setPhoneNumber(text)}
                    style={styles.input}
                    placeholder="TELEFONE"
                    placeholderTextColor={colorFont}
                    selectionColor={colorBase}
                    keyboardType="numeric"
                  />
                </View>
              </View>
            </View>

            <View style={styles.line} />

            <View style={styles.section}>
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
              </View>
            </View>

            <View style={styles.line} />

            <View style={{alignItems: 'center'}}>
              <Button
                onPress={saveData}
                buttonStyle={styles.buttonSave}
                title={'S A L V A R'}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default EditUser;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 12,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: colorFont,
    fontSize: 28,
  },

  background: {
    backgroundColor: colorSection,
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    zIndex: 1,
  },

  topBar: {
    height: 50,
    backgroundColor: 'black',
    width: wp('100%'),
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#FFF',
  },

  header: {
    marginVertical: 20,
    borderWidth: 0,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',
  },

  avatar: {
    height: 120,
    width: 120,
    marginBottom: 10,
  },

  line: {
    borderBottomColor: colorFont,
    borderBottomWidth: 1,
    marginVertical: 20,
  },

  body: {
    flexGrow: 1,
    paddingHorizontal: 15,
    paddingVertical: 5,
    maxHeight: Dimensions.get('window').height - 50,
  },

  footer: {
    height: 50,
    backgroundColor: 'black',
    width: wp('100%'),
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#FFF',
    paddingHorizontal: 15,
    alignItems: 'center',
  },

  timeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },

  textBox: {
    borderRadius: 15,
    padding: 10,
    marginBottom: 8,
    height: 88,
    borderColor: colorBase,
    backgroundColor: boxColor,
  },

  buttonSearch: {
    height: 35,
    marginLeft: 10,
    backgroundColor: colorInput,
    maxWidth: wp('10%'),
    borderRadius: 60,
    borderColor: colorFont,
    borderWidth: 1,
  },

  buttonText: {
    fontFamily: 'MavenPro-Bold',
    fontSize: 15,
    color: colorBase,
    flexWrap: 'wrap',
  },

  sectionName: {
    marginTop: 20,
    marginBottom: 15,
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

  buttonSave: {
    borderRadius: 2,
    height: 40,
    backgroundColor: colorBase,
    width: wp('60%'),
    marginBottom: 20,
  },
});
