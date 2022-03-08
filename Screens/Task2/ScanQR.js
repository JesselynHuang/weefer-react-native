import React from 'react';
import {View, Text, StyleSheet, Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function ScanQR(props) {
  const onSuccess = e => {
    Linking.openURL(e.data).catch(err =>
      console.error('An Error Occured', err),
    );
  };

  return (
    <View>
      <Text style={styles.txtTitle}>QR Code from React Native QR Scanner</Text>
      <QRCodeScanner
        reactivate={true}
        showMarker={true}
        onRead={onSuccess}
        cameraType={'back'}
        cameraStyle={styles.camera}
        topContent={
          <Text style={styles.centerText}>
            Go to{' '}
            <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
            your computer and scan the QR code.
          </Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  camera: {
    marginTop: 45,
    marginLeft: 10,
    width: 200,
    height: 200,
  },
  centerText: {
    marginLeft: 5,
  },
});

export default ScanQR;
