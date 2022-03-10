import React from 'react';
import StackNavigator from './router';
import codePush from 'react-native-code-push';

function App() {
  return <StackNavigator />;
}

export default codePush(App);
