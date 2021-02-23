import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import Icon from 'react-native-vector-icons/FontAwesome';



import tabHome from '../routes/tabHome';
import ChatScreen from '../pages/ChatScreen';
import EditUser from '../pages/EditUser';
import ListUsers from '../pages/ListUsers';
import ProfilePlayer from  '../pages/ProfilePlayer'


const AppStack = createStackNavigator();

const Routes = () => {
    return (
        <AppStack.Navigator headerMode="none" options>
            <AppStack.Screen name="tabHome" component={tabHome} />


            <AppStack.Screen name="ListUsers" component={ListUsers} />

            <AppStack.Screen name="EditUser" component={EditUser} />

            <AppStack.Screen name="ChatScreen" component={ChatScreen} />
            <AppStack.Screen name="ProfilePlayer" component={ProfilePlayer} />
        </AppStack.Navigator>
    );
};

export default Routes;