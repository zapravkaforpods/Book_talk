import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Creatcolection = () => {
  const navigation = useNavigation();
  const [isModalVisible, setModalVisible] = useState(false);
  const [collectionTitle, setCollectionTitle] = useState('');

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleCheckPress = () => {
    // При натисканні на галочку показуємо модальне вікно
    setModalVisible(true);
  };

  const handleContinuePress = () => {
    // Тут може бути логіка для продовження
    setModalVisible(false);
    navigation.navigate('CollectionMain', { newCollectionTitle: collectionTitle });
  };

  return (
    <View style={styles.container}>
      {/* Верхня панель навігації */}
      <View style={styles.topBar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleGoBack}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkButton} onPress={handleCheckPress}>
          <Feather name="check" size={24} color="#E04D53" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Заголовок</Text>
      {/* Область введення тексту */}
      <TextInput
        style={styles.input}
        placeholder="Введіть назву колекції..."
        placeholderTextColor="#b0b0b0"
        multiline={true}
        textAlignVertical="top"
        value={collectionTitle}
        onChangeText={setCollectionTitle}
      />

      {/* Модальне вікно */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => {
          setModalVisible(!isModalVisible);
        }}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIcon}>
              <View style={styles.checkCircle}>
                <Feather name="check" size={36} color="#2E7D32" />
              </View>
            </View>
            <Text style={styles.modalTitle}>Колекцію створено</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleContinuePress}
            >
              <Text style={styles.modalButtonText}>Продовжити</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: '#F5F5DC',
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: "#E0DAC2",
    borderRadius: 555,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Bitter-SemiBold',
    margin: 10,
  },
  checkButton: {
    width: 48,
    height: 48,
    backgroundColor: "#E0DAC2",
    borderRadius: 555,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    margin: 16,
    padding: 10,
    backgroundColor: '#F1EFE4',
    borderRadius: 8,
    fontSize: 32,
    textAlignVertical: 'top',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Напівпрозорий фон
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: '#F1EFE4', // Колір фону модального вікна
    borderRadius: 20,
    padding: 20,
    width: 300,
    height:250,
    alignItems: 'center',
    elevation: 5, // Тінь для Android
    shadowColor: '#000', // Тінь для iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  modalIcon: {
    backgroundColor: '#F0FFF0', // Світлий фон для іконки
    borderRadius: 50,
    padding: 16,
    marginBottom: 16,
  },
  checkCircle: {
    borderWidth: 2,
    borderColor: '#2E7D32',
    borderRadius: 50,
    padding: 8,
  },
  modalTitle: {
    fontSize: 20,
    fontFamily: 'Bitter-Bold',
    marginBottom: 16,
    color: '#333',
  },
  modalButton: {
    backgroundColor: '#333', // Темний колір кнопки
    borderRadius: 555,
    width: 268,
    height: 51, justifyContent: 'center',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Bitter-Bold',

  },
});

export default Creatcolection;