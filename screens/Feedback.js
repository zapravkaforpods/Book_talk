import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import MyIcon from '../assets/Main/logo.svg';

import { useNavigation } from '@react-navigation/native';


const FeedbackScreen = () => {
  const [email, setEmail] = useState('john.doe@domain.com');
  const [message, setMessage] = useState('Додаток супер, але хотілося б темну тему! Плануєте додати?');
  const navigation = useNavigation();
  const handleSendFeedback = () => {
    // Тут можна додати логіку відправки відгуку
    console.log('Відгук надіслано:', { email, message });
  };
const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Кнопка "Назад" */}
         <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
			 <Text style={styles.title}>Звортній зв'язок</Text>
			 
      {/* Логотип */}
      <View style={styles.logoContainer}>
       <MyIcon width={100} height={100} />
      </View>

      {/* Заголовок */}
      <Text style={styles.title2}>Допоможіть нам стати кращими!</Text>

      {/* Опис */}
      <Text style={styles.description}>
        Ми цінуємо вашу думку. Залиште свій відгук, повідомте про проблему або запропонуйте
        ідею.
      </Text>

      {/* Email */}
      <Text style={styles.label}>Email</Text>
      <View style={styles.inputWithIcon}>
        <Feather name="mail" size={20} color="#777" style={styles.icon} />
         <TextInput
            style={styles.inputWithLeftIcon}
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#888272"
          />
      </View>

      {/* Повідомлення */}
    <Text style={styles.label} marginTop='15'>Повідомлення</Text>
      <View style={styles.inputWithIcon2}>
         <TextInput
            style={styles.inputWithLeftIcon} color='#191815' 
            value={message} 
            onChangeText={setMessage}
            placeholderTextColor="#888272"
          />
      </View>

      {/* Кнопка "Надіслати" */}
       <TouchableOpacity style={styles.primaryButton} >
		  <Text style={[styles.primaryButtonText, { fontFamily: 'Bitter-Bold' }]}>Надіслати</Text>
		</TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4', // Колір фону
    paddingHorizontal: 20,
    paddingTop: 50,
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
	top: -40,
    fontFamily: 'Bitter-Medium', 
  },
title2:{
	fontSize: 32,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Bitter-Bold', 
	paddingHorizontal: 90,
},
  description: {
    fontSize: 16,
    color: '#888272',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 22,
    fontFamily: 'Bitter-Medium', // Додано шрифт
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
    fontFamily: 'Bitter-Regular', // Додано шрифт
  },
   inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0DAC2',
    borderRadius: 555,
    paddingHorizontal: 15,
    backgroundColor: '#E0DAC2',
    height: 52,
  },
  inputWithIcon2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0DAC2',
    borderRadius: 32,
    paddingHorizontal: 15,
    backgroundColor: '#E0DAC2',
    height: 200,
  },
inputWithLeftIcon: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
    fontFamily: 'Bitter-Regular', // Додано шрифт
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0DAC2',
    borderRadius: 555,
    paddingHorizontal: 15,
    backgroundColor: '#E0DAC2',
    height: 52,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
    fontFamily: 'Bitter-Regular', // Додано шрифт (хоча TextInput має свій стиль)
  },
  multilineInput: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 30,
    fontSize: 16,
    color: '#333',
    borderWidth: 1,
    borderColor: '#ddd',
    textAlignVertical: 'top',
    height: 100,
    fontFamily: 'Bitter-Regular', // Додано шрифт (хоча TextInput має свій стиль)
  },
  sendButton: {
    backgroundColor: '#8B4513', // Колір кнопки "Надіслати"
    borderRadius: 8,
    paddingVertical: 15,
  },
  sendButtonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Bitter-Regular', // Додано шрифт
  },
primaryButton: {
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 35,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Bitter-Bold', 
  },
});

export default FeedbackScreen;