import React, { memo } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Notifications = memo(() => {
  const navigation = useNavigation();

  const notifications = [
    { id: 1, icon: 'alarm-outline', text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse está chegando.' },
    { id: 2, icon: 'close-circle-outline', text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse foi cancelado.' },
    { id: 3, icon: 'notifications-outline', text: 'Novo evento publicado na aba "EVENTOS".' },
    { id: 4, icon: 'alarm-outline', text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse está chegando.' },
    { id: 5, icon: 'close-circle-outline', text: 'O evento "Interfatec - jogo de futsal" que você declarou interesse foi cancelado.' },
    { id: 6, icon: 'notifications-outline', text: 'Novo evento publicado na aba "EVENTOS".' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back-outline" size={30} color="#5D17EB" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.notificationsList}>
        {notifications.map((notification) => (
          <View key={notification.id} style={styles.notificationItem}>
            <Ionicons name={notification.icon} size={30} color="#5D17EB" style={styles.notificationIcon} />
            <Text style={styles.notificationText}>{notification.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingTop: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 10,
  },
  notificationsList: {
    paddingHorizontal: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderWidth: 1,
    borderColor: '#5D17EB',
    borderRadius: 8,
    marginBottom: 10,
  },
  notificationIcon: {
    marginRight: 10,
  },
  notificationText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Bryndan Write_fix',
  },
});

export default Notifications;
