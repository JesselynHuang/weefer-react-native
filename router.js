import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Menu from './Screens/Menu';
import Task1 from './Screens/Task1';
import Task2 from './Screens/Task2';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function MyStack() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Menu" component={Menu} />
      <Drawer.Screen name="Task1" component={Task1} />
      <Drawer.Screen name="Task2" component={Task2} />
    </Drawer.Navigator>
  );
}

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MyStack"
          component={MyStack}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Task1"
          component={Task1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Task2"
          component={Task2}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
