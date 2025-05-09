import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Modal,
  Animated,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AthleticIcon from '../images/icons/logoAtletica.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Sidebar = memo(
  ({visible, onClose}) => {
    const navigation = useNavigation();
    const [translateX] = useState(new Animated.Value(-300));

    useEffect(() => {
      if (visible) {
        Animated.timing(translateX, {
          toValue: 0,
          duration: 300,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(translateX, {
          toValue: -300,
          duration: 300,
          useNativeDriver: true,
        }).start();
      }
    }, [visible]);

    return (
      <Modal
        visible={visible}
        animationType="none"
        transparent={true}
        onRequestClose={onClose}>
        <TouchableOpacity style={styles.overlay} onPress={onClose}>
          <Animated.View
            style={[styles.sidebarContainer, {transform: [{translateX}]}]}>
            <View style={styles.header}>
              <Ionicons
                name="person-outline"
                size={30}
                color="#000000"
                style={styles.profileIcon}
              />
              <Text style={styles.title}>D.A FATEC JD</Text>
            </View>

            <View style={styles.menuItems}>
              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  onClose();
                  navigation.navigate('DA');
                }}>
                <Ionicons
                  name="alert-circle-outline"
                  size={40}
                  color="#000000"
                  style={styles.icon}
                />

                <Text style={styles.menuText}>Sobre o D.A</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.menuItem}
                onPress={() => {
                  onClose();
                  navigation.navigate('Athletic');
                }}>
                <Image source={AthleticIcon} style={styles.icon} />
                <Text style={styles.menuText}>Atlética JD</Text>
              </TouchableOpacity>
            </View>
          </Animated.View>
        </TouchableOpacity>
      </Modal>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.visible === nextProps.visible;
  },
);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
  },
  sidebarContainer: {
    width: '70%',
    height: '100%',
    backgroundColor: '#FFF',
    padding: 20,
    position: 'absolute',
    left: 0,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    marginRight: 10,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Bryndan Write_fix',
  },
  menuItems: {
    marginTop: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  icon: {
    marginRight: 10,
  },
  menuText: {
    fontSize: 16,
    color: '#5D17EB',
    fontFamily: 'Bryndan Write_fix',
  },
});

export default Sidebar;
