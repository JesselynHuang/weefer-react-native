import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import notifee, {EventType} from '@notifee/react-native';
import NotificationService from '../libs/NotificationService';

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
    requestPermission();
  });

  //   function _onShowNotification() {
  //     NotificationService.onDisplayNotification('Notif Title', 'Notif Des');
  //   }

  //   messaging().onMessage(async remoteMessage => {
  //     NotificationService.onDisplayNotification(
  //       remoteMessage.notification.title,
  //       remoteMessage.notification.body,
  //       remoteMessage.data,
  //     );
  //   });

  const requestPermission = async () => {
    const authService = await messaging().requestPermission();
  };

  return (
    <View>
      <Text>This Is Notification Screen</Text>
      <TouchableOpacity

      //onPress={() => _onShowNotification()}
      >
        <Text>{' Notif'}</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Notification;
