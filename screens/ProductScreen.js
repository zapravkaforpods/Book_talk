import React, { useState, useEffect } from 'react';
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
import Heart from '../assets/Home/heart.svg'; // Імпортуємо іконку серця

const { width, height } = Dimensions.get('window');
const ProductScreen = () => {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('discussions'); // Default category
    const [discussions, setDiscussions] = useState([]);

    useEffect(() => {
        // Define your data here, outside of the component function for better organization
        const initialDiscussions = [
            {
                id: '1',
                category: 'discussions',
                title: 'Доторк темряви: чи варта прочитання нова адаптація міфу про Гадеса і...',
                author: 'By Rebekah Barton',
                imageUrl: require('../assets/Home/book.png'),
                isAdult: true,
                hasSpoiler: true,
                isNew: true,
                timeAgo: '5 хв тому',
                likes: 34,
                comments: 10,
                reposts: 2,
            },
            {
                id: '2',
                category: 'discussions',
                title: 'Ще одна цікава дискусія про фентезійні світи',
                author: 'By John Doe',
                imageUrl: require('../assets/Home/book2.png'),
                isAdult: false,
                hasSpoiler: false,
                isNew: false,
                timeAgo: '1 годину тому',
                likes: 15,
                comments: 5,
                reposts: 1,
            },
            {
                id: '3',
                category: 'drafts',
                title: 'Моя чернетка про подорожі в часі',
                author: 'By Nata',
                imageUrl: require('../assets/Home/book2.png'),
                isAdult: false,
                hasSpoiler: false,
                isNew: false,
                timeAgo: '2 дні тому',
                likes: 5,
                comments: 0,
                reposts: 0,
            },
            {
                id: '4',
                category: 'liked',
                title: 'Стаття, яка мені сподобалася про кіберпанк',
                author: 'By Jane Smith',
                imageUrl: require('../assets/Home/book5.png'),
                isAdult: false,
                hasSpoiler: true,
                isNew: false,
                timeAgo: '1 тиждень тому',
                likes: 42,
                comments: 8,
                reposts: 3,
            },
            {
                id: '5',
                category: 'reposts',
                title: 'Репост цікавого обговорення про космос',
                author: 'By Someone Else',
                imageUrl: require('../assets/Home/book5.png'),
                isAdult: false,
                hasSpoiler: false,
                isNew: false,
                timeAgo: '3 дні тому',
                likes: 21,
                comments: 7,
                reposts: 4,
            },
        ];
        setDiscussions(initialDiscussions);
    }, []);


    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleSettingsPress = () => {
        navigation.navigate('Settings');
    };

    const handleCategoryPress = (category) => {
        setActiveCategory(category);
    };

    const getCategoryIcon = (category) => {
        switch (category) {
            case 'discussions':
                return <Property style={styles.categoryIcon} stroke={activeCategory === 'discussions' ? 'white' : 'black'} strokeWidth={0.5} />;
            case 'drafts':
                return <Correct style={styles.categoryIcon} stroke={activeCategory === 'drafts' ? 'white' : 'black'} strokeWidth={0.5} />;
            case 'liked':
                return <Like style={styles.categoryIcon} stroke={activeCategory === 'liked' ? 'white' : 'black'} strokeWidth={0.5} />;
            case 'reposts':
                return <Repost style={styles.categoryIcon} stroke={activeCategory === 'reposts' ? 'white' : 'black'} strokeWidth={1} />;
            default:
                return null;
        }
    };

    const filteredDiscussions = discussions.filter(item => item.category === activeCategory);

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                        <Feather name="arrow-left" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.headerTitle}>Мій профіль</Text>
                    <TouchableOpacity style={styles.backButton}>
                        <Masege style={styles.backButtonText} />
                    </TouchableOpacity>
                </View>

                {/* Profile Info */}
                <View style={styles.profileInfo}>
                    <Image source={require('../assets/Main/my photo.png')} style={styles.profileImage} />
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

                {/* Reading Now Section */}
                <View style={styles.readingNowSection}>
                    <Text style={styles.readingNowTitle}>Читаю зараз</Text>
                </View>

                {/* Categories */}
                <ScrollView horizontal style={styles.categories}>
                    <TouchableOpacity
                        style={[styles.categoryButton, activeCategory === 'discussions' && styles.activeCategoryButton]}
                        onPress={() => handleCategoryPress('discussions')}
                    >
                        {getCategoryIcon('discussions')}
                        <Text style={[styles.categoryText, activeCategory === 'discussions' && styles.activeCategoryText]}>Обговорення</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, activeCategory === 'drafts' && styles.activeCategoryButton]}
                        onPress={() => handleCategoryPress('drafts')}
                    >
                        {getCategoryIcon('drafts')}
                        <Text style={[styles.categoryText, activeCategory === 'drafts' && styles.activeCategoryText]}>Чернетки</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, activeCategory === 'liked' && styles.activeCategoryButton]}
                        onPress={() => handleCategoryPress('liked')}
                    >
                        {getCategoryIcon('liked')}
                        <Text style={[styles.categoryText, activeCategory === 'liked' && styles.activeCategoryText]}>Лайкнуті</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.categoryButton, activeCategory === 'reposts' && styles.activeCategoryButton]}
                        onPress={() => handleCategoryPress('reposts')}
                    >
                        {getCategoryIcon('reposts')}
                        <Text style={[styles.categoryText, activeCategory === 'reposts' && styles.activeCategoryText]}>Репости</Text>
                    </TouchableOpacity>
                </ScrollView>

                {/* Discussion Cards */}
                {filteredDiscussions.map((item) => (
                    <View key={item.id} style={styles.discussionCard}>
                        <TouchableOpacity style={styles.bookCoverButton} onPress={() => navigation.navigate('DiscussionDetails', { discussionId: item.id })}>
                            <Image source={item.imageUrl} style={styles.bookCover} />
                        </TouchableOpacity>
                        <View style={styles.discussionInfo}>
                            <Text style={styles.discussionTitle}>{item.title}</Text>
                            <Text style={styles.discussionAuthor}>{item.author}</Text>
                            <View style={styles.tagsRow}>
                                {item.isAdult && (
                                    <View>
                                        <Vplus />
                                    </View>
                                )}
                                {item.hasSpoiler && (
                                    <View style={styles.spoilerTag}>
                                        <Text style={styles.spoilerText0}>Спойлер</Text>
                                    </View>
                                )}
                            </View>

                            <View style={styles.statusAndTime}>
                                {item.isNew && (
                                    <View style={[styles.status, { backgroundColor: '#D4EDDA' }]}>
                                        <Text style={[styles.statusText, { color: '#155724' }]}>Нове</Text>
                                    </View>
                                )}
                                <View style={styles.timeContainer}>
                                    <Text style={styles.discussionTime}>{item.timeAgo}</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.likesContainer}>
                            <TouchableOpacity style={styles.optionsButton} onPress={() => console.log('Опції')}>
                                <Menu width={24} height={24} fill="black" />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={styles.likeButtonBottom} onPress={() => console.log('Лайкнути зверху')}>
                            <Heart style={styles.likesSvg} width={14} height={12} fill="#E04D53" />
                            <Text style={styles.likesCountBottom}>{item.likes}</Text>
                        </TouchableOpacity>
                    </View>
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
    // paddingHorizontal: 16,
  },
  discussionCard: {
    backgroundColor: '#F1EFE4',
    padding: width * 0.03,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  bookCoverButton: {
    // Додано щоб можна було натискати на обкладинку
  },
  bookCover: {
    width: 140,
    height: 140,
    borderRadius: 12,

  },
  discussionInfo: {
    flex: 1,
    marginLeft: 16,
  },
  discussionTitle: {
    fontSize: 14,
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Bitter-Bold',
  },
  discussionAuthor: {
    fontSize: 12,
    color: '#888272',
    marginBottom: height * 0.01,
    fontFamily: 'Bitter-Regular',
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
    marginLeft: 80,
  },
  spoilerText0: {
    color: '#191815',
    fontSize: 12,
    fontFamily: 'Albra-Medium',
  },
  statusAndTime: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    },
    status: {
      borderRadius: 555,
      paddingVertical: 3,
      paddingHorizontal: 6,
      alignSelf: 'flex-start',
      marginRight: 5,
      },
      statusText: {
      color: '#E04D53',
      fontSize: 12,
      fontFamily: 'Bitter-Bold',
      },
      timeContainer: {
      marginLeft: 280,
      },
      
  discussionTime: {
    fontSize: 12,
    color: '#888272',
    fontFamily: 'Bitter-Regular',
    marginLeft: 4,
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
    marginBottom: 10,
  },
  spoilerTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7CFD1',
    borderRadius: 50,
    paddingVertical: 2,
    paddingHorizontal: 4,
    left: 8,
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
  likeButtonBottom: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'black',
    borderRadius: 555,
    width:56,
    height: 24,
},
likesCountBottom: {
  position: 'absolute',
  color: 'white',
  fontSize: 12,
  marginLeft: 30,
  fontFamily: 'Bitter-Medium',
},
likesSvg: {
    position: 'absolute',
    color: 'white',
    fontSize: 14,
    marginLeft: 12,
    fontFamily: 'Bitter-Regular',
},
  });
  
  export default ProductScreen;