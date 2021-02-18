import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  TextInput,
  Image,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {CheckBox, Input, Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Picker} from '@react-native-community/picker';
import {useNavigation} from '@react-navigation/native';

import avatar from '../../../assets/images/draven.jpg';

import * as COLORS from '../../../assets/colorations'
const colorInput = '#3b3d3d';

const ListUsers = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [top, setTop] = useState(true);
  const [jungle, setJungle] = useState(true);
  const [mid, setMid] = useState(true);
  const [adc, setAdc] = useState(true);
  const [sup, setSup] = useState(true);
  const [language, setLanguage] = useState('java');

  const navigation = useNavigation();

  return (
    <>
      <View style={styles.background}>
        <View style={styles.topBar}>
          <Icon
            onPress={() => navigation.goBack()}
            name="arrow-left"
            color={COLORS.zcinzaClaro}
            size={20}
          />
          <Text style={[styles.fontMedium, {marginHorizontal: 15}]}>
            Procurar Jogadores
          </Text>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalFont}>SELECIONE O ELO MÍNIMO</Text>

                <Picker
                  selectedValue={language}
                  mode="dropdown"
                  style={{height: 50, width: 200}}
                  onValueChange={(itemValue, itemIndex) =>
                    setLanguage(itemValue)
                  }>
                  <Picker.Item label="Ouro" value="ouro" />
                  <Picker.Item label="Platina" value="platina" />
                  <Picker.Item label="Diamante" value="diamante" />
                </Picker>

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
            style={styles.viewIconFilter}
            onPress={() => {
              setModalVisible(true);
            }}>
            <Icon name="filter" color={'white'} size={20} />
          </TouchableHighlight>
        </View>

        <View style={styles.body}>
          <ScrollView>
            <View style={styles.playerBox}>
              <View style={styles.header}>
                <Image source={require('../../../assets/images/rank/Diamond_1.png')} style={styles.avatar} />
                <Text style={styles.fontBig}>dBlackOwl</Text>
                <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
              </View>

              <View style={styles.line} />

              <Text style={styles.fontMedium}>Elo: Platina III</Text>
              <Text style={styles.fontMedium}>Lanes: Jungle, Adc</Text>
              <Text style={styles.fontMedium}>Pool: Draven, Rengar, Jhin</Text>

              <View style={{alignItems: 'center'}}>
                <Button
                  onPress={() => {}}
                  buttonStyle={styles.buttonSelect}
                  titleStyle={styles.buttonFont}
                  title={'RECRUTAR'}
                />
              </View>
            </View>

            <View style={styles.playerBox}>
              <View style={styles.header}>
                <Image source={require('../../../assets/images/rank/Diamond_1.png')} style={styles.avatar} />
                <Text style={styles.fontBig}>dBlackOwl</Text>
                <Text style={styles.fontSmall}>Pablo Borges Martins</Text>
              </View>

              <View style={styles.line} />

              <Text style={styles.fontMedium}>Elo: Platina III</Text>
              <Text style={styles.fontMedium}>Lanes: Jungle, Adc</Text>
              <Text style={styles.fontMedium}>Pool: Draven, Rengar, Jhin</Text>

              <View style={{alignItems: 'center'}}>
                <Button
                  onPress={() => {}}
                  buttonStyle={styles.buttonSelect}
                  titleStyle={styles.buttonFont}
                  title={'RECRUTAR'}
                />
              </View>
            </View>

            <View style={styles.playerBox}>
              <View style={styles.header}>
                <Image source={require('../../../assets/images/rank/Platinum_1.png')} style={styles.avatar} />
                <Text style={styles.fontBig}>MnR LightPhantom</Text>
                <Text style={styles.fontSmall}>Vinicius Carneiro da Silva</Text>
              </View>

              <View style={styles.line} />

              <Text style={styles.fontMedium}>Elo: Platina III</Text>
              <Text style={styles.fontMedium}>Lanes: Jungle, Adc</Text>
              <Text style={styles.fontMedium}>Pool: Draven, Rengar, Jhin</Text>

              <View style={{alignItems: 'center'}}>
                <Button
                  onPress={() => {}}
                  buttonStyle={styles.buttonSelect}
                  titleStyle={styles.buttonFont}
                  title={'RECRUTAR'}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    </>
  );
};

export default ListUsers;

const styles = StyleSheet.create({
  fontSmall: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 15,
  },

  fontMedium: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.zcinzaClaro,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Turquoise,
    fontSize: 25,
  },

  background: {
    backgroundColor: COLORS.Charcoal,
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
    borderBottomWidth: 0,
    borderColor: '#FFF',
  },

  viewIconFilter: {
    position: 'absolute',
    right: 5,
    backgroundColor: COLORS.Turquoise,
    borderRadius: 2,
    borderColor: COLORS.zcinzaClaro,
    borderWidth: 1,
    padding: 8,
  },

  body: {
    flex: 1,
    paddingHorizontal: 15,
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

  line: {
    borderBottomColor: COLORS.zcinzaClaro,
    borderBottomWidth: 1,
    marginVertical: 5,
  },

  playerBox: {
    borderRadius: 15,
    padding: 10,
    marginVertical: 10,
    borderColor: COLORS.Turquoise,
    backgroundColor: COLORS.zchumboEscuro,
  },

  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 100,
    paddingRight: 10
  },

  avatar: {
    top: 0,
    left: 0,
    position: 'absolute',
    height: 80,
    width: 80,
    marginBottom: 10,
  },

  input: {
    height: 35,
    backgroundColor: COLORS.zchumboClaro,
    color: COLORS.zcinzaClaro,
    paddingLeft: 10,
    fontFamily: 'MavenPro-Bold',
    borderRadius: 5,
    marginVertical: 3,
  },

  buttonSelect: {
    marginTop: 10,
    backgroundColor: COLORS.zcinzaClaro,
    borderRadius: 4,
    paddingHorizontal: 30,
    borderColor: COLORS.zcinzaClaro,
    borderWidth: 1,
  },

  buttonFont: {
    color: 'black',
    fontFamily: 'MavenPro-Bold',
    fontSize: 20,
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
    backgroundColor: COLORS.Turquoise,
    alignItems: 'center',
    justifyContent: 'center',
  },

  closeModal: {
    borderRadius: 2,
    height: 35,
    margin: 3,
    backgroundColor: COLORS.Turquoise,
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
    backgroundColor: COLORS.zchumboMedio,
    borderRadius: 15,
    borderColor: COLORS.zcinzaClaro,
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

  lanesContainer: {
    marginVertical: 10,
  },
});
