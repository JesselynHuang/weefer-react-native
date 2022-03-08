import React from 'react';
import {SafeAreaView, StyleSheet, View, ScrollView} from 'react-native';
import Notification from './Screens/Notification';
import Map from './Screens/Map';
import Camera from './Screens/Camera';
import ScanQR from './Screens/ScanQR';
import SignIn from './Screens/SignIn';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Notification />
          <Map />
          <Camera />
          <ScanQR />
          <SignIn />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
