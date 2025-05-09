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
import { Overlay } from '@rneui/themed';
import { Button } from "@rneui/themed";

export const MenuPost = ({ closeMenu, setDeleteModalVisible }: { closeMenu: () => void; setDeleteModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 174,
        height: 130,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          navigation.navigate('EditarEvento');
        }}
        style={{
          width: '100%',
          alignItems: 'center',
          borderBottomColor: 'white',
          borderBottomWidth: 2,
          height: 54,
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Editar
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          setDeleteModalVisible(true); // Abre o modal de exclusão
        }}
        style={{ width: '100%', alignItems: 'center', height: 54, justifyContent: 'center' }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Excluir
        </Text>
      </TouchableOpacity>

    </View>  
  );
};

export const MenuExit = ({ closeMenu, setExitModalVisible }: { closeMenu: () => void; setExitModalVisible: React.Dispatch<React.SetStateAction<boolean>> }) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#5D17EB',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: 174,
        height: 130,
      }}
    >
      <TouchableOpacity
        onPress={() => {
          closeMenu();
          setExitModalVisible(true); // Abre o modal de sair da conta
        }}
        style={{ width: '100%', alignItems: 'center', height: 54, justifyContent: 'center' }}
      >
        <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            color: 'white',
            fontFamily: 'Bryndan Write_fix',
          }}
        >
          Sair da conta
        </Text>
      </TouchableOpacity>

    </View>  
  );
};

const Profile = () => {
  const navigation = useNavigation();
  const [chatVisible, setChatVisible] = useState(false);
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState(false);
  const [isExitModalVisible, setExitModalVisible] = useState(false);

  const toggleChatModal = () => {
    setMenuVisible(false);
    setChatVisible(!chatVisible);
  };

  const toggleSidebar = () => {
    setMenuVisible(false); 
    setSidebarVisible(!sidebarVisible);
  };

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('EditPerfilALuno')} style={styles.profileContainer}>
          <View style={styles.profileIconContainer}>
            <Ionicons name="person-outline" size={30} color="#000000" />
          </View>
          <Text style={styles.profileText}>D.A FATEC JD</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setExitModalVisible(true)}>
          <Ionicons name="log-out-outline" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Menu */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <Text style={styles.postText}>Texto de descrição do perfil</Text>
          <TouchableOpacity onPress={() => navigation.navigate('EditPerfilALuno')}>
            <Ionicons name="pencil-outline" size={18} color="#000000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Pré posts */}
      <Text style={{marginLeft:10, fontFamily: 'Bryndan Write_fix'}}>Minhas publicações:</Text>

      {/* Post */}
      <View style={styles.postContainer}>
        <View style={styles.postHeader}>
          <View style={styles.postProfileIconContainer}>
            <Ionicons name="person-outline" size={18} color="#000000" />
          </View>
          <Text style={styles.username}>User1246658</Text>
          <TouchableOpacity style={styles.menuContainer} onPress={toggleMenu}>
          <Ionicons name="ellipsis-horizontal" size={18} color="#000000" />
          </TouchableOpacity>

                    {menuVisible && (
            <View style={styles.menuDropdown}>
              <MenuPost
                closeMenu={toggleMenu}
                setDeleteModalVisible={setDeleteModalVisible}
              />
            </View>
          )}

        </View>
        <Image source={require('../images/feed1.png')} style={styles.postImage} />
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

{/* Modal de Sair da conta */}
<Overlay
  isVisible={isExitModalVisible}
  onBackdropPress={() => setExitModalVisible(false)}
  overlayStyle={{
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: '40%',
  }}
>
  <View
    style={{
      width: '100%',
      height: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15,
      rowGap: 30,
      top: 10,
    }}
  >
    {/* Aqui você pode adicionar o card de detalhes da publicação, se necessário */}
    <Text
      style={{
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Bryndan Write_fix',
      }}
    >
      Deseja sair da conta?
    </Text>
    <View style={{ flexDirection: 'row', columnGap: 35 }}>
      <Button
        title={'Cancelar'}
        onPress={() => setExitModalVisible(false)}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: 'white',
          borderColor: '#5D17EB',
          borderWidth: 1,
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
          color: '#5D17EB',
        }}
      />
      <Button
        title={'Sair'}
        onPress={() => navigation.navigate('Login')}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: '#5D17EB',
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
        }}
      />
    </View>
  </View>
</Overlay>

      {/* Modal de Exclusão */}
<Overlay
  isVisible={isDeleteModalVisible}
  onBackdropPress={() => setDeleteModalVisible(false)}
  overlayStyle={{
    width: '100%',
    height: '25%',
    justifyContent: 'flex-start',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    top: '40%',
  }}
>
  <View
    style={{
      width: '100%',
      height: '90%',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 15,
      rowGap: 30,
      top: 10,
    }}
  >
    {/* Aqui você pode adicionar o card de detalhes da publicação, se necessário */}
    <Text
      style={{
        color: 'black',
        textAlign: 'center',
        fontSize: 24,
        fontFamily: 'Bryndan Write_fix',
      }}
    >
      Excluir publicação?
    </Text>
    <View style={{ flexDirection: 'row', columnGap: 35 }}>
      <Button
        title={'Cancelar'}
        onPress={() => setDeleteModalVisible(false)}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: 'white',
          borderColor: '#5D17EB',
          borderWidth: 1,
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
          color: '#5D17EB',
        }}
      />
      <Button
        title={'Excluir'}
        onPress={() => setDeleteModalVisible(false)}
        buttonStyle={{
          height: 48,
          borderRadius: 30,
          width: 140,
          backgroundColor: '#5D17EB',
        }}
        titleStyle={{
          fontSize: 20,
          height: 30,
        }}
      />
    </View>
  </View>
</Overlay>
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
    marginRight: 180,
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
    menuDropdown: {
    marginTop: 10,
    zIndex: 10,
    position: 'absolute',
    right: 5,
    top: 15,
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});

export default Profile;
