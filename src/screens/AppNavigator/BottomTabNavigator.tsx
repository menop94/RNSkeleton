import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';

import { Screens } from '../../constants/Screens';
import Home from '../Home';

const Tab = createBottomTabNavigator();

const Screen2 = () => <View />;
const Screen3 = () => <View />;

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name={Screens.HOME} component={Home} />
      <Tab.Screen name="Tab2" component={Screen2} />
      <Tab.Screen name="Tab3" component={Screen3} />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
