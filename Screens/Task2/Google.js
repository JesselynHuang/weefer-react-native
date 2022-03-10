import React, {useState, useEffect} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {
  GoogleSignin,
  statusCodes,
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

export default function Google() {
  const [loggedIn, setloggedIn] = useState(false);
  const [userInfo, setuserInfo] = useState([]);
  const [user, setUser] = useState();
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '785278866096-t6b0qbgcea3e69i86nan0cohrqbsoqg9.apps.googleusercontent.com',
    });
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  async function signOut() {
    try {
      await GoogleSignin.signOut();
      setuserInfo({
        userInfo: null,
      });
    } catch (error) {
      console.log('error', error);
    }
  }

  console.log('userinfo-------->', userInfo);
  async function signIn() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      setuserInfo(userInfo);

      const {accessToken, idToken} = await GoogleSignin.signIn();

      const credential = auth.GoogleAuthProvider.credential(
        idToken,
        accessToken,
      );
      let loginUser = await auth().signInWithCredential(credential);
      setloggedIn(true);
      console.log('loginUser', loginUser);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error1--->', error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error2--->', error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error3--->', error);
        // play services not available or outdated
      } else {
        console.log('error4--->', error);
        // some other error happened
      }
    }
  }

  return (
    <View>
      <Text>Google</Text>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
        // disabled={this.state.isSigninInProgress}
      />
      <TouchableOpacity onPress={signOut}>
        <Text style={styles.titleSignOut}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  titleSignOut: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
    marginLeft: 75,
  },
});
