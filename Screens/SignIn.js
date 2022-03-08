import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function SignIn(props) {
  return (
    <View>
      <Text style={styles.txtTitle}>This Is Sign In Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txtTitle: {
    marginLeft: 10,
    marginTop: 50,
  },
});

export default SignIn;
