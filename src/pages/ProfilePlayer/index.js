import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

import api from '../../services/api'

import LoaderView from '../../components/LoaderView'
import * as COLORS from '../../../assets/colorations'
import { eloImages } from '../../utils/getImages'

import { data } from './user'

const ProfilePlayer = ({ route }) => {
    const navigation = useNavigation();

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const { user_id } = route.params;

    useEffect(() => {
        async function loadStoragedData() {
            await api.get(`/user/${user_id}`)
                .then(async (res) => {
                    console.log('USERS BUSCADO->', res.data.user)
                    await setUser(res.data.user)
                    setLoading(false);
                }).catch((err) => {
                    console.log('ERR do backend ->', err);
                    setLoading(false);
                });
        }
        loadStoragedData();
    }, [])

    if (loading) {
        return <LoaderView />
    }

    return (
        <View style={styles.background}>

            <View style={styles.header}>
                <View style={styles.iconsContainer}>
                    <Icon
                        onPress={() => navigation.goBack()}
                        name="arrow-left"
                        color={COLORS.zcinzaClaro}
                        size={30}
                    />
                </View>
                <Image source={eloImages(`${user.elo}_${user.division}`)} style={styles.avatar} />
                <Text style={[styles.fontBig, { color: COLORS.Turquoise }]}>{user.nickname}</Text>
                <Text style={[styles.fontSmall, { color: COLORS.zcolorBase }]}>{`${user.name} ${user.last_name}`}</Text>
            </View>

            <View style={styles.line} />

            <View style={styles.containerBody} >
                <View style={styles.containerPlayerData}>
                    <Text style={styles.fontBig}>Elo</Text>
                    <Text style={styles.fontSmall}>{`${user.elo} ${user.division}`}</Text>
                </View>
                <View style={styles.containerPlayerData}>
                    <Text style={styles.fontBig}>Lanes</Text>
                    <View style={styles.containerLanes}>
                        {!!user.isTop && <Image source={require('../../../assets/images/lane/Top.png')} style={styles.lane} />}
                        {!!user.isJungle && <Image source={require('../../../assets/images/lane/Jungle.png')} style={styles.lane} />}
                        {!!user.isMid && <Image source={require('../../../assets/images/lane/Mid.png')} style={styles.lane} />}
                        {!!user.isAdc && <Image source={require('../../../assets/images/lane/Adc.png')} style={styles.lane} />}
                        {!!user.isSup && <Image source={require('../../../assets/images/lane/Suporte.png')} style={styles.lane} />}
                    </View>
                </View>
                <View style={styles.containerPlayerData}>
                    <Text style={styles.fontBig}>Champion Pool</Text>
                    <Text style={styles.fontSmall}>{user.champion_pool}</Text>
                </View>
                <View style={styles.containerPlayerData}>
                    <Text style={styles.fontBig}>Telefone</Text>
                    <Text style={styles.fontSmall}>{user.whatsapp}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProfilePlayer;

const styles = StyleSheet.create({
    fontSmall: {
        fontFamily: 'MavenPro-Bold',
        color: COLORS.White,
        fontSize: 15,
        textAlign: 'center'
    },

    fontMedium: {
        fontFamily: 'MavenPro-Bold',
        color: COLORS.Charcoal,
        fontSize: 20,
    },

    fontBig: {
        fontFamily: 'MavenPro-Bold',
        color: COLORS.JetBlack,
        fontSize: 30,
    },

    background: {
        backgroundColor: COLORS.zchumboEscuro,
        flex: 1,
    },

    iconsContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        width: '100%',
        paddingHorizontal: 10,
        paddingTop: 10,
    },

    header: {
        borderWidth: 0,
        borderColor: '#FFF',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    avatar: {
        height: 120,
        width: 120,
        marginBottom: 10,
    },

    line: {
        marginTop: 20,
        borderBottomColor: COLORS.Turquoise,
        borderBottomWidth: 1,
        elevation: 10
    },

    containerBody: {
        backgroundColor: COLORS.Charcoal,
        paddingHorizontal: 33,
        justifyContent: 'space-around',
        flex: 1
    },

    containerPlayerData: {
        marginBottom: 10,
        alignItems: 'center',
    },

    containerLanes: {
        marginTop: 10,
        flexDirection: 'row',
    },

    lane: {
        marginHorizontal: 5,
        width: 40,
        height: 40,
        tintColor: COLORS.White
    },
});
