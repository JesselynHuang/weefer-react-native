import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';
import NotificationService from '../../libs/NotificationService';
import messaging from '@react-native-firebase/messaging';

function Notification(props) {
  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      switch (type) {
        case EventType.DISMISSED:
          console.log('User Dismissed Notification', detail.notification);

          break;
        case EventType.PRESS:
          console.log('User Press Notification', detail.notification);

          break;

        default:
          break;
      }
    });
  });

  //notifeePermission
  useEffect(() => {
    requestUserPermission();
  });

  function _onShowNotification() {
    NotificationService.onDisplayNotification('Notif Title', 'Notif Des');
  }

  messaging().onMessage(async remoteMessage => {
    NotificationService.onDisplayNotification(
      remoteMessage.notification.title,
      remoteMessage.notification.body,
      remoteMessage.data,
    );
  });

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      console.log('Authorization Status : ', authStatus);
      getFcmToken();
    }
  }

  const getFcmToken = async () => {
    try {
      const fcmToken = await messaging().getToken();
      console.log('fcme token generated', fcmToken);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <View>
      <Text>This Is Notification Screen</Text>
      <TouchableOpacity onPress={() => _onShowNotification()}>
        <Text>{' Notif'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Notification;
