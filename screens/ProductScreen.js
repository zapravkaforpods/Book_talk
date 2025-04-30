import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, Dimensions, PixelRatio } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Masege from '../assets/Profile/masege.svg';
import Setting from '../assets/Profile/Settings.svg';
import Property from '../assets/Profile/property.svg';
import Correct from '../assets/Profile/correct.svg';
import Like from '../assets/Profile/like.svg';
import Repost from '../assets/Profile/repost.svg';
import Menu from '../assets/Profile/menu.svg';
import Vplus from '../assets/Profile/18+.svg';

const { width, height } = Dimensions.get('window');
const ProductScreen = () => {
  const navigation = useNavigation();
  const [activeCategory, setActiveCategory] = useState(null);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSettingsPress = () => {
    navigation.navigate('Settings');
  };

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
    // Тут можна додати логіку для відображення відповідного контенту
    console.log(`Обрано категорію: ${category}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.container}>
        {/* Верхня частина з кнопками навігації та заголовком */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Feather name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Мій профіль</Text>
          <TouchableOpacity style={styles.backButton}>
            <Masege style={styles.backButtonText} />
          </TouchableOpacity>
        </View>

        {/* Інформація профілю */}
        <View style={styles.profileInfo}>
          <Image source={require('../assets/Main/my photo.jpg')} style={styles.profileImage} />
          <Text style={styles.userName}>Nata</Text>
          <View style={styles.statsContainer}>
            <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('UserDiscussions')}>
              <Text style={styles.statNumber}>5</Text>
              <Text style={styles.statLabel}>Обговорення</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('FollowingList')}>
              <Text style={styles.statNumber}>13</Text>
              <Text style={styles.statLabel}>Відстежує</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.statItem} onPress={() => navigation.navigate('FollowersList')}>
              <Text style={styles.statNumber}>16</Text>
              <Text style={styles.statLabel}>Підписники</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.settingsButton} onPress={handleSettingsPress}>
            <Setting style={styles.settingsIcon} />
            <Text style={styles.settingsText}>Налаштування</Text>
          </TouchableOpacity>
        </View>

        {/* Читаю зараз */}
        <View style={styles.readingNowSection}>
          <Text style={styles.readingNowTitle}>Читаю зараз</Text>
        </View>

        <ScrollView horizontal style={styles.categories}>
          <TouchableOpacity
            style={[styles.categoryButton, activeCategory === 'discussions' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('discussions')}
          >
            <Property style={styles.categoryIcon}  stroke={activeCategory === 'discussions' ? 'white' : 'black'}  strokeWidth={0.5} />
            <Text style={[styles.categoryText, activeCategory === 'discussions' && styles.activeCategoryText]}>Обговорення</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, activeCategory === 'drafts' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('drafts')}
          >
            <Correct style={styles.categoryIcon}  stroke={activeCategory === 'drafts' ? 'white' : 'black'} strokeWidth={0.5} />
            <Text style={[styles.categoryText, activeCategory === 'drafts' && styles.activeCategoryText]}>Чернетки</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, activeCategory === 'liked' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('liked')}
          >
            <Like style={styles.categoryIcon}  stroke={activeCategory === 'liked' ? 'white' : 'black'}  strokeWidth={0.5} />
            <Text style={[styles.categoryText, activeCategory === 'liked' && styles.activeCategoryText]}>Лайкнуті</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.categoryButton, activeCategory === 'reposts' && styles.activeCategoryButton]}
            onPress={() => handleCategoryPress('reposts')}
          >
            <Repost style={styles.categoryIcon}  stroke={activeCategory === 'reposts' ? 'red' : 'black'}  strokeWidth={0.5} />
            <Text style={[styles.categoryText, activeCategory === 'reposts' && styles.activeCategoryText]}>Репости</Text>
          </TouchableOpacity>
        </ScrollView>

        {/* Картки обговорень */}
        {Array.from({ length: 15 }).map((_, index) => (
          <TouchableOpacity key={index} style={styles.discussionCard} onPress={() => navigation.navigate('DiscussionDetails', { discussionId: 123 })}>
            <Image source={require('../assets/Home/book.png')} style={styles.bookCover} />
            <View style={styles.discussionInfo}>
              <Text style={styles.discussionTitle}>Доторк темряви: чи варта прочитання нова адаптація міфу про Гадеса і...</Text>
              <Text style={styles.discussionAuthor}>By Rebekah Barton</Text>
              <View style={styles.tagsRow}>
                <View >
                  <Vplus />
                </View>
                <View style={styles.spoilerTag}>
                  <Text style={styles.spoilerText0}>Спойлер</Text>
                </View>
                
              </View><Text style={styles.newTextO}>Нове</Text>
            </View>
            <View style={styles.likesContainer}>
              <TouchableOpacity style={styles.likeButton} onPress={() => console.log('Лайкнути')}>
                <Menu width={24} height={24} fill="black" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 5,
    marginBottom: 16,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Bitter-Medium',
  },
  profileInfo: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 12,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
    fontFamily: 'Bitter-Medium',
  },
  statsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Bitter-Medium',
  },
  statLabel: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Bitter',
  },
  settingsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 6,
    height: 40,
  },
  settingsIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  settingsText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'Bitter',
  },
  readingNowSection: {
    paddingHorizontal: 16,
    marginBottom: 1,
    top: -10,
    flexDirection: 'colmun',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  readingNowTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    alignItems: 'center',
    fontFamily: 'Bitter-Medium',
  },
  categories: {
    marginBottom: height * 0.01,
    paddingHorizontal: 16,
    flexDirection: 'row', // Додано для правильного відображення іконок поруч з текстом
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginRight: width * 0.02,
  },
  activeCategoryButton: {
    backgroundColor: '#191815',
  },
  categoryIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
    marginRight: 8,
  },
  categoryText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.035),
    color: '#333',
    fontFamily: 'Bitter',
  },
  activeCategoryText: {
    color: '#fff',
  },
  contentSection: {
    paddingHorizontal: 16,
  },
  discussionCard: {
    backgroundColor: '#F1EFE4',
    padding: width * 0.03,
    marginBottom: height * 0.02,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bookCover: {
    width: width * 0.25,
    height: width * 0.2 * (16 / 9),
    borderRadius: width * 0.01,
    marginRight: width * 0.03,
  },
  discussionInfo: {
    flex: 1,
  },
  discussionTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: height * 0.005,
    fontFamily: 'Bitter',
  },
  discussionAuthor: {
    fontSize: width * 0.03,
    color: '#777',
    marginBottom: height * 0.01,
    fontFamily: 'Bitter',
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.01,
  },
  adultTag: {
    backgroundColor: '#FF4D4D',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.015,
    marginRight: width * 0.015,
  },
  adultText: {
    color: 'white',
    fontSize: width * 0.025,
    fontWeight: 'bold',
    fontFamily: 'Bitter',
  },
  spoilerTag: {
    backgroundColor: '#FF9800',
    borderRadius: width * 0.05,
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.015,
    marginRight: width * 0.015,
  },
  spoilerText0: {
    color: '#191815',
    fontSize: 12,
    fontFamily: 'Bitter-Medium',
  },
  newTextO: {
    paddingVertical: height * 0.005,
    paddingHorizontal: width * 0.015,
    fontSize: 12,
    color: '#E04D53',
    fontFamily: 'Bitter-Bold',
  },
  likesContainer: {
    marginLeft: width * 0.02,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  likeIcon: {
    width: width * 0.07,
    height: width * 0.07,
    resizeMode: 'contain',
    marginRight: width * 0.01,
  },
  likesCount: {
    fontSize: width * 0.035,
    color: '#333',
    fontFamily: 'Bitter',
  },
  tagsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  spoilerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7CFD1',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 4,
    marginRight: 8,
  },
  spoilerText: {
    color: '#191815',
    fontSize: 10,
    fontWeight: 'bold',
    fontFamily: 'Bitter-Medium',
  },
  newText: {
    backgroundColor: '#90EE90',
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 4,
    fontSize: 10,
    color: '#333',
    fontWeight: 'bold',
    fontFamily: 'Bitter',
  },
  optionsButton: {
    padding: 4,
  },
  optionsIcon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  likesCount: {
    fontSize: 12,
    color: '#777',
    fontFamily: 'Bitter',
  },
  timeAgo: {
    fontSize: 10,
    color: '#777',
    textAlign: 'right',
    fontFamily: 'Bitter',
  },
});

export default ProductScreen;