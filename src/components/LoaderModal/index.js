import React, {memo} from 'react';
import { ActivityIndicator, View, Modal, Platform, useColorScheme } from 'react-native'

import * as COLORS from '../../../assets/colorations'

import { useAuth } from '../../hooks/auth'

const platformIsAndroid = Platform.OS === 'android' ? true : false

const LoadingModal = () => {
    const { loading } = useAuth();
    return (
        <Modal
            animationType="fade"
            visible={loading}
            style={{ zIndex: 100}}
        >
            <View
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 100, backgroundColor: COLORS.zchumboClaro }}
            >
                {
                    platformIsAndroid ? (
                        <ActivityIndicator size={80} color={COLORS.zchumboEscuro} />
                    ) : <ActivityIndicator size="large" color={COLORS.zchumboEscuro} />
                }
            </View>
        </Modal>
    );
}

export default memo(LoadingModal);