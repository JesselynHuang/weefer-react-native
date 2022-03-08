import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Task1 from './Screens/Task1';
import Task2 from './Screens/Task2';
const Drawer = createDrawerNavigator();
export default function Draw() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Task1" component={Task1} />
      <Drawer.Screen name="Task2" component={Task2} />
    </Drawer.Navigator>
  );
}
