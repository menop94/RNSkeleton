import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AuthState } from '../../context/createDataContext';
import Login from '../Authentication/Login';
import { Strings } from '../../constants/Strings';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

function AppNavigator({ user }: { user: AuthState }) {
  return (
    <Stack.Navigator>
      {user.token === null ? (
        <Stack.Screen name={Strings.LOGIN} component={Login} />
      ) : (
        <Stack.Screen name="Home" component={BottomTabNavigator} />
      )}
    </Stack.Navigator>
  );
}

export default AppNavigator;
