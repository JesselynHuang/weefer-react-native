import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

export default function Menu({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Task1')}>
        <Text>Task 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Task2')}>
        <Text>Task 2</Text>
      </TouchableOpacity>
    </View>
  );
}
