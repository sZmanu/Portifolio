import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import ChatModal from '../views/ChatModal';
import Sidebar from '../views/Sidebar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Ionicons name="person-outline" size={30} color="#000000" />
          </View>
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons name="notifications" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => setSidebarVisible(true)}>
          <Ionicons name="menu-outline" size={30} />
        </TouchableOpacity>
      </View>

      {/* Post */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Ionicons name="person-outline" size={18} color="#000000" />
          </View>
          <Text style={styles.username}>User1246658</Text>
        </View>
        <Image
        source={require('../images/feed1.png')}
          style={styles.postImage}
        />
        <Text style={styles.postText}>Evento da InterFatecs 2024...</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => setChatVisible(true)}>
            <Ionicons name="chatbubble-ellipses-outline" size={25} />
          </TouchableOpacity>
        </View>
      </View>

      <ChatModal visible={chatVisible} onClose={() => setChatVisible(false)} />
      <Sidebar
        visible={sidebarVisible}
        onClose={() => setSidebarVisible(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#5D17EB',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIconContainer: {
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 8,
    fontFamily: 'Bryndan Write_fix',
  },
  menuContainer: {
    padding: 10,
    alignItems: 'flex-start',
  },
  menuButton: {
    alignItems: 'center',
    justifyContent: 'center',
    tintColor: '#5D17EB',
  },
  postContainer: {
    backgroundColor: '#FFFFFF',
    marginVertical: 8,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E5E5E5',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-between',
  },
  postProfileIconContainer: {
    backgroundColor: '#E5E5E5',
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  username: {
    fontSize: 14,
    color: '#262626',
    fontFamily: 'Bryndan Write_fix',
  },
  postImage: {
    width: '100%',
    height: 300,
    backgroundColor: '#F0F0F0',
  },
  postText: {
    padding: 10,
    fontSize: 14,
    color: '#262626',
    fontFamily: 'Bryndan Write_fix',
  },
  actionsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderColor: '#E5E5E5',
  },
});

export default Home;
