import React, { useState } from 'react';
import {
  View,
  TextInput,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  PixelRatio,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Search  from '../assets/Home/search.svg';

const { width, height } = Dimensions.get('window');
const SearchScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleCategoryPress = (category) => {
    setActiveCategory(category === activeCategory ? null : category); // Зняття вибору, якщо натиснуто ту саму кнопку
    console.log(`Обрано категорію: ${category}`);
  };

  const categoriesData = ['Всі', 'Фентезі', 'Детектив','Роман','Псих']; // Додайте свої категорії

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Головний контейнер з можливістю прокрутки */}
      <ScrollView style={styles.container}>
        {/* Верхня панель */}
        <View style={styles.topBar}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => console.log('Пошук')}>
              <Search/>
            </TouchableOpacity>
            <TextInput
              style={styles.searchText}
              placeholder="Пошук"
              value={searchText}
              onChangeText={setSearchText}
              onSubmitEditing={() => navigation.navigate('SearchResults', { query: searchText })}
            />
          </View>
        </View>
        {/* Категорії */}
        <ScrollView horizontal style={[styles.categories, { marginBottom: 20 }]}>
          {categoriesData.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                activeCategory === category && styles.activeCategoryButton,
              ]}
              onPress={() => handleCategoryPress(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  activeCategory === category && styles.activeCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Історія пошуку */}<Text style={styles.historyTitle}>Історія пошуку</Text>
{Array.from({ length: 15 }).map((_, index) => (
        <View style={styles.historyContainer}>
          
          <View style={styles.searchItem}>
            <Image
              source={require('../assets/Home/book.png') }
              style={styles.bookCover}
            />
            <View style={styles.bookInfo}>
              <Text style={styles.bookTitle}>Хірург</Text>
              <Text style={styles.bookAuthor}>Тесс Геррітсен</Text>
              <View style={styles.ratingContainer}>
                <Feather name="star" size={16} color="#FFC107" />
                <Text style={styles.ratingText}>4.5</Text>
              </View>
              <Text style={styles.bookDescription}>
                Пенелопафі Бальфур, вона ж Маківка - не просто осиротіла донька багатіїв,
                наближених до королівської родини, а ще й Діва. Діву роками готують до...
              </Text>
            </View>
            <TouchableOpacity onPress={() => { /* Обробка додаткових дій */ }}>
              <Feather name="more-vertical" size={20} color="gray" />
            </TouchableOpacity>
          </View>
          {/* Додайте сюди інші елементи історії пошуку */}
        </View> ))}
      </ScrollView>
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
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#F1EFE4',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
  },
  searchIcon: {
    marginRight: width * 0.02,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: 'black',
    backgroundColor: '#E0DAC2',
    marginLeft: width * 0.03,
  },
  categories: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 10,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // Додано для центрування тексту
    backgroundColor: '#E0DAC2', // Початковий колір кнопки - білий
    borderRadius: width * 0.5,
    marginRight: width * 0.02,
    height: height * 0.05,

  },
  activeCategoryButton: {
    backgroundColor: '#000000', // Колір кнопки при натисканні - чорний
  },
  categoryText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.035),
    color: 'black', // Початковий колір тексту - чорний
    fontFamily: 'Bitter',
  },
  activeCategoryText: {
    color: '#FFFFFF', // Колір тексту при натисканні - білий
  },
  historyContainer: {
    paddingHorizontal: 16,
backgroundColor: '#F1EFE4',
  },
  historyTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
padding: 12,
  },
  searchItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1EFE4',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  bookCover: {
    width: 80,
    height: 120,
    borderRadius: 4,
    marginRight: 12,
  },
  bookInfo: {
    flex: 1,
  },
  bookTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bookAuthor: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  ratingText: {
    marginLeft: 4,
    color: 'black',
  },
  bookDescription: {
    fontSize: 12,
    color: 'gray',
    lineHeight: 10,
  },
});

export default SearchScreen;