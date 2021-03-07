import React, { memo } from 'react';
import { ActivityIndicator, View, Platform} from 'react-native'

import * as COLORS from '../../../assets/colorations'

const platformIsAndroid = Platform.OS === 'android' ? true : false

const LoadingModal = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', zIndex: 100, backgroundColor: COLORS.zchumboClaro }}
        >
            {
                platformIsAndroid ? (
                    <ActivityIndicator size={80} color={COLORS.zchumboEscuro} />
                ) : <ActivityIndicator size="large" color={COLORS.zchumboEscuro} />
            }
        </View>
    );
}

export default memo(LoadingModal);