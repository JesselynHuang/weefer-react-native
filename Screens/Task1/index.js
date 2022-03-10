import React from 'react';
import {View, ScrollView} from 'react-native';
import Notification from './Notification';
import Map from './Map';
import Camera from './Camera';

export default function Task1(props) {
  return (
    <>
      <ScrollView>
        <Notification />
        <Map navigation={props.navigation} />
        <Camera />
      </ScrollView>
    </>
  );
}
