import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Google from './Google';
import Facebook from './Facebook';
import ScanQR from './ScanQR';

const Tab = createBottomTabNavigator();

export default function Task2(props) {
  return (
    <>
      <Tab.Navigator>
        <Tab.Screen
          name="Google"
          component={Google}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Facebook"
          component={Facebook}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="ScanQR"
          component={ScanQR}
          options={{headerShown: false}}
        />
      </Tab.Navigator>
    </>
  );
}
