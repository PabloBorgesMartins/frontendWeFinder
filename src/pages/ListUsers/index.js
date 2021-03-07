import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { CheckBox, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from '@react-native-community/picker';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import * as COLORS from '../../../assets/colorations'
import { eloImages } from '../../utils/getImages'
import { data } from './users'

const TopPhoto = require('../../../assets/images/lane/Top.png')
const JunglePhoto = require('../../../assets/images/lane/Jungle.png')
const MidPhoto = require('../../../assets/images/lane/Mid.png')
const AdcPhoto = require('../../../assets/images/lane/Adc.png')
const SupPhoto = require('../../../assets/images/lane/Suporte.png')


const ListUsers = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [top, setTop] = useState(true);
  const [jungle, setJungle] = useState(true);
  const [mid, setMid] = useState(true);
  const [adc, setAdc] = useState(true);
  const [sup, setSup] = useState(true);
  const [filterElo, setFilterElo] = useState('ouro');
  const [users, setUsers] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    async function loadStoragedData() {
      await api.get('/users')
        .then(async (res) => {
          // console.log('USERS[0]->', res.data[0])
          setUsers(res.data)
        }).catch((err) => {
          console.log('ERR do backend ->', err);
        });
    }
    loadStoragedData();
  }, [])

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
          <Text style={[styles.fontMedium, { marginHorizontal: 15 }]}>
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
                  selectedValue={filterElo}
                  mode="dropdown"
                  style={{ height: 50, width: 200 }}
                  onValueChange={(itemValue, itemIndex) =>
                    setFilterElo(itemValue)
                  }>
                  <Picker.Item label="Ferro" value="ferro" />
                  <Picker.Item label="Bronze" value="bronze" />
                  <Picker.Item label="Prata" value="prata" />
                  <Picker.Item label="Ouro" value="ouro" />
                  <Picker.Item label="Platina" value="platina" />
                  <Picker.Item label="Diamante" value="diamante" />
                </Picker>

                <Text style={styles.modalFont}>
                  SELECIONE AS LANES DESEJADAS
                </Text>

                <View style={styles.modalLanesContainer}>
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

        <ScrollView style={styles.body}>
          {
            users.map((item) => {
              if (item) {
                return (
                  <View key={item.id} style={styles.playerBox}>
                    <TouchableOpacity style={styles.header} onPress={() => navigation.navigate('ProfilePlayer', { user_id: item.id })}>
                      <Image source={eloImages(`${item.elo}_${item.division}`)} style={styles.avatar} />
                      <Text style={styles.fontBig}>{item.nickname}</Text>
                      <Text style={[styles.fontSmall, { color: COLORS.zcolorBase }]}>{item.name}</Text>
                      <Text style={styles.fontUserElo}>{`${item.elo} ${item.division}`}</Text>
                    </TouchableOpacity>

                    <View style={styles.line} />

                    {/* <Text style={styles.fontUserQualitys}>Pool: {item.champion_pool}</Text> */}

                    <View style={styles.containerLanes}>
                      {!!item.isTop && <Image source={TopPhoto} style={styles.lane} />}
                      {!!item.isJungle && <Image source={JunglePhoto} style={styles.lane} />}
                      {!!item.isMid && <Image source={MidPhoto} style={styles.lane} />}
                      {!!item.isAdc && <Image source={AdcPhoto} style={styles.lane} />}
                      {!!item.isSup && <Image source={SupPhoto} style={styles.lane} />}
                    </View>

                    <View style={{ alignItems: 'center' }}>
                      <Button
                        onPress={() => navigation.navigate('ProfilePlayer', { user_id: item.id })}
                        buttonStyle={styles.buttonSelect}
                        titleStyle={styles.buttonFont}
                        title={'RECRUTAR'}
                      />
                    </View>
                  </View>
                )
              }
            })
          }
        </ScrollView>
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
    color: COLORS.White,
    fontSize: 20,
  },

  fontBig: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.Turquoise,
    fontSize: 25,
  },

  fontUserQualitys: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.White,
    fontSize: 20,
    marginVertical: 2,
  },

  fontUserElo: {
    fontFamily: 'MavenPro-Bold',
    color: COLORS.White,
    fontSize: 20,
    marginTop: 20,
    marginLeft: 5,
    alignSelf: 'flex-start'
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
    backgroundColor: COLORS.zchumboEscuro,
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


  line: {
    borderBottomColor: COLORS.zcinzaClaro,
    borderBottomWidth: 1,
    marginBottom: 15,
  },

  playerBox: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 15,
    backgroundColor: COLORS.zchumboEscuro,
    elevation: 8
  },

  header: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: 120,
    paddingRight: 10,
  },

  avatar: {
    top: 0,
    left: 5,
    position: 'absolute',
    height: 80,
    width: 80,
    marginBottom: 10,
  },

  containerLanes: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'transparent',
  },

  lane: {
    marginHorizontal: 5,
    width: 40,
    height: 40,
    tintColor: COLORS.White
  },

  buttonSelect: {
    marginTop: 10,
    backgroundColor: COLORS.Turquoise,
    borderRadius: 5,
    paddingHorizontal: 30,
    borderColor: COLORS.zcinzaClaro,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },

  buttonFont: {
    color: COLORS.White,
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

  checkFont: {
    fontFamily: 'MavenPro-Bold',
    color: '#adaeae',
    fontSize: 10,
  },

  modalLanesContainer: {
    marginVertical: 10,
  },
});
