import React, { useState, useEffect, useRef, useCallback } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, TextInput, Dimensions, PixelRatio, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Home from '../assets/Panel/Home.svg';
import List from '../assets/Panel/list.svg';
import Plus from '../assets/Panel/plus.svg';
import Save from '../assets/Panel/save.svg';
import Profile from '../assets/Panel/profile.svg';
import Search from '../assets/Home/search.svg';

const { width, height } = Dimensions.get('window');

// Функція для розрахунку ширини індикатора
const calculateIndicatorWidth = (tabCount, containerWidth, iconWidth) => {
  const availableSpace = containerWidth - (tabCount * iconWidth);
  return iconWidth; // Індикатор має бути ширини іконки
};

const BooksScreen = () => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [activeTab, setActiveTab] = useState('Discover'); // Початкова активна вкладка
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const tabCount = 5; // Загальна кількість вкладок
  const iconWidth = width * 0.06; // Ширина іконки

  const viewRef = useRef();

  useEffect(() => {
    // Розрахунок ширини індикатора при завантаженні та зміні розмірів
    const containerWidth = width * 0.9; // Ширина контейнера навігації
    setIndicatorWidth(calculateIndicatorWidth(tabCount, containerWidth, iconWidth));
    updateIndicatorPosition(activeTab);
  }, [tabCount, width, activeTab]);

  const updateIndicatorPosition = useCallback((tab) => {
    let newPosition = 0;
    switch (tab) {
      case 'Home':
        newPosition = 0;
        break;
      case 'List':
        newPosition = width * 0.18; // Adjust as necessary
        break;
      case 'Plus':
        newPosition = width * 0.36;
        break;
      case 'Save':
        newPosition = width * 0.54;
        break;
      case 'Profile':
        newPosition = width * 0.72;
        break;
      default:
        newPosition = 0;
    }
    setIndicatorPosition(newPosition);
  }, [width]);

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    updateIndicatorPosition(tabName);
    switch (tabName) {
      case 'Home':
        navigation.navigate('Image');
        break;
      case 'List':
        navigation.navigate('Create');
        break;
      case 'Plus':
        navigation.navigate('Create');
        break;
      case 'Save':
        navigation.navigate('Notifications');
        break;
      case 'Profile':
        navigation.navigate('Product');
        break;
    }
  };

  const bookData = [
    { id: 1, title: 'Розпали Мене', author: 'Тагере Мафі', cover: require('../assets/Home/book.png') },
    { id: 2, title: 'Привиди Венеції', author: 'КДА', cover: require('../assets/Home/book2.png') },
    { id: 3, title: 'Золото Темряви', author: 'Скарлетт Сент-Клер', cover: require('../assets/Home/book.png') },
    { id: 4, title: 'Відблиск', author: 'В.Е. Шваб', cover: require('../assets/Home/book2.png') },
    { id: 5, title: 'Рівні Вага', author: 'Винниченко', cover: require('../assets/Home/book.png') },
    { id: 6, title: 'Четверте крило', author: 'Ребекка Яррос', cover: require('../assets/Home/book2.png') },
    { id: 7, title: 'Місячне сяйво', author: 'Невідомий Автор', cover: require('../assets/Home/book.png') },
      { id: 8, title: 'Хірург', author: 'Геррітсен', cover: require('../assets/Home/book2.png') },
  ];

  const collections = [
    { id: 1, title: 'Колекція 1', books: [bookData[0], bookData[1]] },
    { id: 2, title: 'Колекція 2', books: [bookData[2], bookData[3]] },
    { id: 3, title: 'Колекція 3', books: [bookData[4], bookData[5]] },
    { id: 4, title: 'Колекція 4', books: [bookData[6], bookData[7]] },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* Заголовок "Книги" та кнопка "+" */}
          <View style={styles.header}>
            <Text style={styles.title}>Книги</Text>
            <TouchableOpacity style={styles.plusButton} onPress={() => navigation.navigate('Create')}>
              <Plus style={styles.plusIcon} />
            </TouchableOpacity>
          </View>

          {/* Поле пошуку */}
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => console.log('Пошук')}>
              <Search />
            </TouchableOpacity>
            <TextInput
              style={styles.searchText}
              placeholder="Пошук"
              value={searchText}
              onPress={() => navigation.navigate('Search')}
              onChangeText={setSearchText}
              onSubmitEditing={() => navigation.navigate('SearchResults', { query: searchText })} // Перехід після натискання Enter
            />
          </View>

          {/* Зображення книг (макет) */}
          <View style={styles.booksContainer}>
            {collections.map((collection) => (
              <View key={collection.id} style={styles.collectionContainer}>
                <Text style={styles.collectionTitle}>{collection.title}</Text>
                <View style={styles.bookRow}>
                  {collection.books.map((book) => (
                    <View key={book.id} style={styles.book}>
                      <Image source={book.cover} style={styles.bookCover} />
                      <Text style={styles.bookTitle}>{book.title}</Text>
                      <Text style={styles.bookAuthor}>{book.author}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>

        {/* Кастомна навігація */}
        <View style={styles.navigationBar}>
          <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Image'); setActiveTab('Home'); }}>
            <Home style={styles.navIcon} />
            {activeTab === 'Home' && <View style={[styles.activenavIcon,]} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('BooksScreen'); setActiveTab('Discover'); }}>
            <List style={styles.navIcon} />
            {activeTab === 'Discover' && <View style={[styles.activenavIcon,]} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Create'); setActiveTab('Create'); }}>
            <Plus style={styles.navIcon} />
            {activeTab === 'Create' && <View style={[styles.activenavIcon,]} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Notifications'); setActiveTab('Notifications'); }}>
            <Save style={styles.navIcon} />
            {activeTab === 'Notifications' && <View style={[styles.activenavIcon,]} />}
          </TouchableOpacity>
          <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Product'); setActiveTab('Profile'); }}>
            <Profile style={styles.navIcon} />
            {activeTab === 'Profile' && <View style={[styles.activenavIcon,]} />}
          </TouchableOpacity>
        </View>
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
  },
  content: {
    flex: 1,
    padding: width * 0.03,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.04,
    marginTop: height * 0.01,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#191815',
    fontFamily: 'Bitter-Bold',
  },
  plusButton: {
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.06,
    padding: width * 0.02,
  },
  plusIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
    marginBottom: height * 0.03,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: 'black',
    backgroundColor: '#E0DAC2',
    marginLeft: width * 0.02,
    fontFamily: 'Bitter',
  },
  booksContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start', // Вирівнюємо колекції по лівому краю
    paddingHorizontal: width * 0.02,
  },
  collectionContainer: {
    width: '100%',
    marginBottom: height * 0.03, // Збільшено відступ між колекціями
  },
  collectionTitle: {
    fontSize: 18,
    color: '#191815',
    fontFamily: 'Bitter-Medium',
    marginBottom: height * 0.01,
    paddingLeft: width * 0.02,
  },
  bookRow: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Розміщуємо книги по краях
    width: '100%',
  },
  book: {
    alignItems: 'center',
    width: '48%', // Приблизно половина ширини для двох стовпців
    marginBottom: height * 0.02, // Відступ між книгами в колекції
  },
  bookCover: {
    width: '100%',
    height: height * 0.25,
    borderRadius: width * 0.025,
    marginBottom: height * 0.01,
  },
  bookTitle: {
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
    fontFamily: 'Bitter-Bold',
    marginTop: height * 0.005,
  },
  bookAuthor: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    fontFamily: 'Bitter-Regular',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#000',
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: width * 0.1,
    position: 'absolute',
    bottom: height * 0.02,
    left: width * 0.05,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.1,
    height: width * 0.1,
  },
  navIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: 'contain',
  },
  activenavIcon: {
    position: 'absolute',
    bottom: -15,
    borderRadius: 50,
    height: 5,
    width: 43,
    backgroundColor: '#E04D53',
  },
});

export default BooksScreen;