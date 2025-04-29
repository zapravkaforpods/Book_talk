import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MyIcon from '../assets/Main/logo_image.svg';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  const handleRegisterPress = () => {
    navigation.navigate('Register');
  };
  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View style={styles.topSection}>
       <View style={styles.illustrationContainer}>
        <MyIcon width={400} height={400} />
      </View>
      </View>
      <View style={styles.middleSection}>
        <Text style={[styles.title, { fontFamily: 'Bitter-Bold' }]}>Читай більше, хвилюйся менше</Text>
        <Text style={[styles.subtitle, { fontFamily: 'Bitter-Regular' }]}>
          Приєднуйся до <Text style={[styles.boldText, { fontFamily: 'Bitter-Bold' }]}>Book Talk</Text> - додатку для обговорення книг та останніх новин.
          Ділися враженнями, знаходь однодумців і створюй власну книжкову спільноту!
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.primaryButton} onPress={handleLoginPress}>
          <Text style={[styles.primaryButtonText, { fontFamily: 'Bitter-Bold' }]}>Розпочати</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={handleRegisterPress}>
          <Text style={[styles.secondaryButtonText, { fontFamily: 'Bitter-Bold' }]}>Зареєструватися</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, 
    backgroundColor: '#F1EFE4', 
  },
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    justifyContent: 'flex-start',
    backgroundColor: '#F1EFE4',
  },
  topSection: {
    alignItems: 'center',
    marginBottom: -20,
  },
  illustrationContainer: {
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  illustration: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  middleSection: {
    alignItems: 'center',
    marginBottom: 23,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 32,
    fontWeight: 'Bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'black',
    fontFamily: 'Bitter-Bold', 
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
    lineHeight: 24,
    fontFamily: 'Bitter-Regular', 
  },
  bottomSection: {
    width: '100%',
  },
  primaryButton: {
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 15,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Bitter-Bold', 
  },
  secondaryButton: {
    backgroundColor: '#E0DAC2',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
  },
  secondaryButtonText: {
    color: '#2E3B4E',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Bitter-Bold',
  },
  boldText: {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Bitter-Bold', 
  },
});

export default HomeScreen;