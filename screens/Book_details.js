import React from 'react';
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

const BookDetailsScreen = () => {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Верхня панель */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton}>
            <Feather name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <View style={styles.topBarIcons}>
            <TouchableOpacity style={styles.shareButton}>
              <Feather name="share" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.bookmarkButton}>
              <Feather name="bookmark" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Обкладинка книги */}
        <View style={styles.coverContainer}>
          <Image
            source={require('./assets/fourth_wing_cover.jpg')} // Замініть на шлях до вашої обкладинки
            style={styles.coverImage}
            resizeMode="contain"
          />
        </View>

        {/* Інформація про книгу */}
        <View style={styles.bookInfo}>
          <Text style={styles.bookTitle}>Четверте крило</Text>
          <Text style={styles.bookAuthor}>Ребекка Яррос</Text>
        </View>

        {/* Рейтинги та дії */}
        <View style={styles.actionsBar}>
          <View style={styles.rating}>
            <Feather name="star" size={20} color="#FFC107" />
            <Text style={styles.ratingText}>4.5</Text>
          </View>
          <View style={styles.likes}>
            <Feather name="thumbs-up" size={20} color="#666" />
            <Text style={styles.likesText}>34</Text>
          </View>
          <View style={styles.comments}>
            <Feather name="message-square" size={20} color="#666" />
            <Text style={styles.commentsText}>8</Text>
          </View>
        </View>

        {/* Додатковий контент (можна додати опис, кнопки тощо) */}
        {/* <View style={styles.additionalContent}>
          <Text>Тут може бути опис книги або інші елементи інтерфейсу.</Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#333', // Фон, схожий на зображення
  },
  container: {
    flex: 1,
    padding: 16,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topBarIcons: {
    flexDirection: 'row',
  },
  shareButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  bookmarkButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  coverContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 8,
  },
  bookInfo: {
    alignItems: 'center',
    marginBottom: 16,
  },
  bookTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Montserrat-Bold',
    textAlign: 'center',
  },
  bookAuthor: {
    fontSize: 18,
    color: 'white',
    fontFamily: 'Montserrat-Regular',
    textAlign: 'center',
  },
  actionsBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 24,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likesText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  comments: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentsText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
  },
  additionalContent: {
    // Стилі для додаткового контенту
  },
});

export default BookDetailsScreen;