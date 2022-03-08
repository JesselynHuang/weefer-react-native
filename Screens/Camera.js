import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

function Camera(props) {
  const [photo, setPhoto] = useState('');
  const camera = useRef();

  async function takePicture() {
    try {
      if (camera) {
        const options = {quality: 0.5, base64: true};
        const data = await camera.current.takePictureAsync(options);
        setPhoto(data.uri);
        console.log('data--->', data.uri);
      }
    } catch (error) {
      console.log('error ---> ', error);
    }
  }

  console.log('camera', camera);

  return (
    <View>
      <Text style={styles.camera}>Camera from React Native Camera</Text>
      <RNCamera
        ref={camera}
        style={styles.preview}
        type={RNCamera.Constants.Type.back}>
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableOpacity
            onPress={() => takePicture(camera)}
            style={styles.capture}>
            <Text style={{fontSize: 14, fontWeight: 'bold'}}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
      <View>
        <Text style={styles.prevTitle}> PREVIEW </Text>
        <Image style={styles.img} source={{uri: photo ? photo : null}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
    marginLeft: 10,
  },
  camera: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  preview: {
    marginLeft: 10,
    marginTop: 20,
    borderWidth: 1,
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  prevTitle: {
    marginLeft: 10,
    marginTop: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Camera;
