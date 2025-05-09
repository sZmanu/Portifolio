import React, { memo } from 'react';
import { View, Text, ScrollView, TextInput, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ChatModal = memo(function ChatModal({ visible, onClose }) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.chatOverlay} onPress={onClose} activeOpacity={1}>
        <TouchableOpacity style={styles.chatContainer} activeOpacity={1}>
          <TouchableOpacity style={styles.chatBar} onPress={onClose} activeOpacity={0.7} />
          <ScrollView style={styles.chatMessages}>
            {[...Array(5)].map((_, i) => (
              <View key={i} style={styles.chatMessage}>
                <Ionicons name="person-outline" size={14} color="#000000" style={styles.chatUserIcon} />
                <Text style={styles.chatMessageText}>
                  Username <Text style={{ fontWeight: '400' }}>Comentário exemplo para testes e visualização.</Text>
                </Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.chatInputContainer}>
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={25}
              color="#5D17EB"
            />
            <TextInput placeholder="Adicione um comentário..." style={styles.chatInput} />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
});

const styles = StyleSheet.create({
  chatOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  chatContainer: { 
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    maxHeight: '80%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  chatBar: {
    width: 50, 
    height: 5,  
    backgroundColor: '#5D17EB', 
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, 
  },
  chatMessages: {
    marginBottom: 15,
  },
  chatMessage: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: '#F9F9F9',
  },
  chatUserIcon: {
    backgroundColor: '#D9D9D9', 
    borderRadius: 20,
    padding: 5,
    marginRight: 10,
  },
  chatMessageText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Bryndan Write_fix',
  },
  chatInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
    padding: 10,
    width: '100%',
    marginLeft: 0,
    marginRight: 0,
    borderTopWidth: 1,
    borderColor: '#E0E0E0',
  },
  chatInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Bryndan Write_fix',
    backgroundColor: '#F0F0F0',
    borderRadius: 0,
    paddingVertical: 5,
    paddingHorizontal: 0,
    marginStart: 8,
  },
});

export default ChatModal;
