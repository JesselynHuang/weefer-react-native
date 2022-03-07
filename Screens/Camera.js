import React, {useState} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

function Camera(props) {
  const [photo, setPhoto] = useState('');
  const [camera, setCamera] = useState('');
  function _openCamera() {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setCamera(image.path);
    });
  }

  console.log('photo', photo);
  function _choosePhoto() {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
      setPhoto(image.path);
    });
  }

  return (
    <View>
      <TouchableOpacity onPress={_openCamera}>
        <Text>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={_choosePhoto}>
        <Text>Choose A Photo</Text>
      </TouchableOpacity>
      <Text>This is Photo From Library</Text>
      <Image
        style={styles.img}
        source={{
          uri: photo ? photo : null,
        }}
      />
      <Text>This is Camera taken photo</Text>
      <Image
        style={styles.img}
        source={{
          uri: camera ? camera : null,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 100,
  },
});

export default Camera;
