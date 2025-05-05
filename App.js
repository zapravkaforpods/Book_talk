import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native'; // Додано Platform
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import ImageScreen from './screens/Home_in';
import ProductScreen from './screens/ProductScreen';
import Search from './screens/search.js';
import NotificationScreen from './screens/NoficationItem.js';
import FeedbackScreen from './screens/Feedback.js';
import Book_details from './screens/Book_details.js';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          'Bitter-Regular': require('./assets/Font/static/Bitter-Regular.ttf'),
          'Bitter-Bold': require('./assets/Font/static/Bitter-Bold.ttf'), 
          'Bitter-Light': require('./assets/Font/static/Bitter-Light.ttf'),
          'Bitter-Medium': require('./assets/Font/static/Bitter-Medium.ttf'),
          'Albra-Medium ': require('./assets/Font/Albra Grotesk Font Family/Albra-Trial-Grotesk-Medium.otf'),
          'Albra-Regular': require('./assets/Font/Albra Grotesk Font Family/Albra-Trial-Grotesk-Regular.otf'),
        });
      } catch (error) {
        console.error('Помилка завантаження шрифтів', error);
      }
    }

    loadFonts();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Додаємо StatusBar */}
      <StatusBar 
  translucent={true}
  backgroundColor="rgba(158, 23, 23, 0.2)"
  barStyle="light-content"
/>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isLoading ? <Stack.Screen name="Splash" component={SplashScreen} /> : null}
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Image" component={ImageScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name='Notification' component={NotificationScreen} />
          <Stack.Screen name='Feedback' component={FeedbackScreen} />
          <Stack.Screen name='Book_details' component={Book_details} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EFE4',
    // Забираємо paddingTop, оскільки StatusBar тепер займає верхню частину
  },
});

export default App;