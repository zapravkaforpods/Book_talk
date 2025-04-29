import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import MyIcon from '../assets/Main/logo.svg';
import Onboarding from '../assets/Main/onboarding.svg';
const WelcomeScreen = () => {
  const navigation = useNavigation(); 

  const handleContinuePress = () => {
    navigation.navigate('Image');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <View style={styles.MyIconContainer}>
        <MyIcon width={160} height={160} />
      </View>
      <View style={styles.illustrationContainer}>
        <Onboarding width={390} height={256} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Обговорюйте улюблені книги з однодумцями!</Text>
        <Text style={styles.subtitle}>
          Приєднуйтесь до книжкових дискусій, знаходьте цікавих співрозмовників та діліться
          враженнями від прочитаного
        </Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleContinuePress}>
        <Text style={styles.buttonText}>Продовжити</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#F1EFE4', 
  },
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4', 
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 5,
    paddingVertical: 50,
  },
  MyIconContainer: {
    alignItems: 'center',
    marginBottom: 15,
  },
  
  illustrationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholderIllustration: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
  },
  illustration: {
    width: 413,
    height: 256,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Bitter-Bold',
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    fontFamily: 'Bitter',
    textAlign: 'center',
    color: '#666',
    lineHeight: 22,
  },
  button: {
    backgroundColor: '#191815',
    paddingVertical: 15,
    paddingHorizontal: 100,
    borderRadius: 30,
    marginBottom: 30,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Bitter-Bold',
  },
});

export default WelcomeScreen;