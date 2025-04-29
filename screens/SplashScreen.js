import React, { useEffect } from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import Logo from '../assets/Main/logo.svg';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation(); 

  useEffect(() => {
    // setTimeout(() => {
    //   navigation.navigate('Welcome'); 
    // }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
       <Logo width={200} height={200} />
      </View>
      <Text style={styles.appName}>Book Talk</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    backgroundColor: '#000',
    borderRadius: 75,
    width: 150,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoImage: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    fontFamily: 'Georgia',
    color: '#333',
    marginTop: 16,
  },
});

export default SplashScreen;