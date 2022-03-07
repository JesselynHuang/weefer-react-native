import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

function Map(props) {
  const [targetLatitude, setTargetLatitude] = useState(37.78825);
  const [targetLongitude, setTargetLongitude] = useState(-122.4324);

  function onRegionChange(value) {
    setTargetLatitude(value.latitude);
    setTargetLongitude(value.longitude);
  }
  return (
    <View style={styles.container}>
      <Text>This Is Map Screen</Text>
      <MapView
        style={styles.wrapMap}
        provider={PROVIDER_GOOGLE}
        zoomEnabled={false}
        onRegionChangeComplete={onRegionChange}
        initialRegion={{
          latitude: targetLatitude,
          longitude: targetLongitude,
          latitudeDelta: 0.002,
          longitudeDelta: 0.002,
        }}
      />
      <Image
        style={styles.iconMarker}
        source={require('../Assets/Images/map_marker-24.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: 300,
    justifyContent: 'center',
  },
  wrapMap: {
    flex: 1,
  },
  iconMarker: {
    width: 24,
    height: 24,
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
});

export default Map;
