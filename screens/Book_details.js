<<<<<<< HEAD
import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
    Dimensions,
    TextInput,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const BookDetailsScreen = () => {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('Опис');
    const [commentsData, setCommentsData] = useState([
        {
            id: '1',
            author: 'Jane Cooper',
            time: '14хв тому',
            text: 'Чудовий пост! Дякую.',
            likes: 23,
            avatar: require('../assets/Main/my photo.jpg'),
            replies: [],
        },
        {
            id: '2',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/my photo.jpg'),
            replies: [],
        },
        {
            id: '3',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/my photo.jpg'),
            replies: [],
        },
        {
            id: '4',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/my photo.jpg'),
            replies: [],
        },
        {
            id: '5',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/my photo.jpg'),
            replies: [],
        },
    ]);
    const [replyingToCommentId, setReplyingToCommentId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [discussionData, setDiscussionData] = useState([
        {
            id: 'd1',
            author: 'Jane Smith',
            time: '5хв тому',
            text: 'Завершення першої частини циклу: мої теорії щодо наступної<3',
            likes: 34,
            image: require('../assets/Home/spell.png'), // Додано зображення
            isSpoiler: true,
            genre: 'Роман',
            status: 'Нове',
        },
        {
            id: 'd2',
            author: 'By Nata',
            time: '5хв тому',
            text: 'Парфумер. Як я бачу головного героя: його висока ідея',
            likes: 34,
            image: require('../assets/Home/spell.png'), // Додано зображення
            isSpoiler: false,
            genre: 'Роман',
			status: 'На паузі',
        },
    ]);

    const handleBackPress = () => {
        navigation.goBack();
    };

    const handleReplyPress = (commentId) => {
        setReplyingToCommentId(commentId === replyingToCommentId ? null : commentId);
        setReplyText('');
    };

    const handleSendReply = (commentId) => {
        if (replyText.trim()) {
            const updatedComments = commentsData.map(comment => {
                if (comment.id === commentId) {
                    return {
                        ...comment,
                        replies: [
                            ...comment.replies,
                            {
                                id: Date.now().toString(),
                                author: 'Ви',
                                time: 'щойно',
                                text: replyText.trim(),
                                avatar: require('../assets/Main/my photo.jpg'),
                            },
                        ],
                    };
                }
                return comment;
            });
            setCommentsData(updatedComments);
            setReplyingToCommentId(null);
            setReplyText('');
        }
    };

    const bookDescription = `Дракон без свого вершника — це трагедія.
Вершник без свого дракона — це смерть.

Пориньте в жорстокий світ військового
коледжу для вершників драконів! Тут
народжується еліта! Або помирає…

Двадцятирічна Вайолет планувала
провести життя серед книжок. Однак наказ
матері, уславленої захисниці королівства,
змінює все. Дівчина змушена приєднатися
до сотень кандидатів, які прагнуть стати
гордістю Наварри — вершниками на
драконах.`;

    const renderCategoryContent = () => {
        if (activeCategory === 'Опис') {
            return (
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionTitle}>Опис</Text>
                    <Text style={styles.descriptionText}>{bookDescription}</Text>
                </View>
            );
        } else if (activeCategory === 'Коментарі') {
            return (
                <View style={styles.commentsContainer}>
                    <Text style={styles.commentsTitle}>Коментарі</Text>
                    {commentsData.map((comment) => (
                        <View key={comment.id} style={styles.commentItem}>
                            <Image source={comment.avatar} style={styles.avatar} />
                            <View style={styles.commentTextContainer}>
                                <Text style={styles.commentAuthor}>{comment.author} <Text style={styles.commentTime}>{comment.time}</Text></Text>
                                <Text style={styles.comment}>{comment.text}</Text>
                                <View style={styles.commentActions}>
                                    <TouchableOpacity style={styles.replyButton} onPress={() => handleReplyPress(comment.id)}>
                                        <Text style={styles.replyText}>Відповісти</Text>
                                    </TouchableOpacity>
                                    <View style={styles.likesContainer}>
                                        <TouchableOpacity style={styles.likeButton}>
                                            <Feather name="heart" size={16} color="black" />
                                        </TouchableOpacity>
                                        <Text style={styles.likesCount}>{comment.likes}</Text>
                                    </View>
                                </View>
                                {replyingToCommentId === comment.id && (
                                    <View style={styles.replyInputContainer}>
                                        <TextInput
                                            style={styles.replyInput}
                                            placeholder="Ваша відповідь..."
                                            value={replyText}
                                            onChangeText={setReplyText}
                                        />
                                        <TouchableOpacity style={styles.sendButton} onPress={() => handleSendReply(comment.id)}>
                                            <Feather name="send" size={20} color="#007AFF" />
                                        </TouchableOpacity>
                                    </View>
                                )}
                                {comment.replies.map((reply) => (
                                    <View key={reply.id} style={styles.replyItem}>
                                        <Image source={reply.avatar} style={styles.replyAvatar} />
                                        <View style={styles.replyTextContainer}>
                                            <Text style={styles.replyAuthor}>{reply.author} <Text style={styles.replyTime}>{reply.time}</Text></Text>
                                            <Text style={styles.replyTextContent}>{reply.text}</Text>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    ))}
                </View>
            );
        } else if (activeCategory === 'Обговорення') {
            return (
                <View style={styles.discussionListContainer}>
                    <Text style={styles.discussionTitle}>Обговорення</Text>
                    {discussionData.map((item) => (
                        <View key={item.id} style={styles.discussionItem}>
                            {item.image && (
                                <View style={styles.imageContainer}>
                                    <Image source={item.image} style={styles.discussionImage} />
                                    <TouchableOpacity style={styles.likeButtonOnImage}>
                                        <Feather name="heart" size={20} color="white" />
                                        <Text style={styles.likesCountOnImage}>{item.likes}</Text>
                                    </TouchableOpacity>
                                </View>
                            )}
                            <View style={styles.discussionInfo}>
                                <Text style={styles.discussionAuthor}>{item.author}</Text>
                                <Text style={styles.discussionText}>{item.text}</Text>
                                <View style={styles.discussionMeta}>
                                    {item.isSpoiler && (
                                        <View style={styles.spoilerBadge}>
                                            <Text style={styles.spoilerText}>Спойлер</Text>
                                        </View>
                                    )}
                                    {item.genre && (
                                        <View style={styles.genreBadge}>
                                            <Text style={styles.genreText}>{item.genre}</Text>
                                        </View>
                                    )}
                                    {item.status && (
                                        <Text style={styles.statusText}>{item.status}</Text>
                                    )}
                                    <View style={styles.discussionActions}>
                                        {item.time && <Text style={styles.discussionTime}>{item.time}</Text>}
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}
                </View>
            );
        }
        return null;
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.fixedTopSection}>
                <ImageBackground
                    source={require('../assets/Home/book_s.png')}
                    style={styles.backgroundImage}
                >
                    <View style={styles.overlay} />
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.topBarIcons}>
                            <TouchableOpacity style={styles.shareButton}>
                                <Feather name="share" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bookmarkButton}>
                                <Feather name="bookmark" size={24} color="black" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.coverContainer}>
                        <View style={styles.shadow}>
                            <Image
                                source={require('../assets/Home/book_s.png')}
                                style={styles.coverImage}
                                resizeMode="cover"
                            />
                        </View>
                    </View>
                    <View style={styles.bookInfo}>
                        <Text style={styles.bookTitle}>Четверте крило</Text>
                        <Text style={styles.bookAuthor}>Ребекка Яррос</Text>
                    </View>
                    <View style={styles.actionsBar}>
                        <View style={styles.ratingContainer}>
                            <View style={styles.rating}>
                                <Feather name="star" size={20} color="#FFC107" />
                                <Text style={styles.ratingText}>4.5</Text>
                            </View>
                            <View style={styles.likes}>
                                <Feather name="thumbs-up" size={20} color="white" />
                                <Text style={styles.likesText}>34</Text>
                            </View>
                            <View style={styles.dislikes}>
                                <Feather name="thumbs-down" size={20} color="white" />
                                <Text style={styles.dislikesText}>8</Text>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>

            <ScrollView style={styles.scrollableContent}>
                <View style={styles.categoriesContainer}>
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            activeCategory === 'Опис' && styles.activeCategoryButton,
                        ]}
                        onPress={() => setActiveCategory('Опис')}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                activeCategory === 'Опис' && styles.activeCategoryText,
                            ]}
                        >
                            <Feather name="align-left" size={16} style={{ marginRight: 5 }} /> Опис
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            activeCategory === 'Коментарі' && styles.activeCategoryButton,
                        ]}
                        onPress={() => setActiveCategory('Коментарі')}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                activeCategory === 'Коментарі' && styles.activeCategoryText,
                            ]}
                        >
                            <Feather name="message-square" size={16} style={{ marginRight: 5 }} /> Коментарі
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            activeCategory === 'Обговорення' && styles.activeCategoryButton,
                        ]}
                        onPress={() => setActiveCategory('Обговорення')}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                activeCategory === 'Обговорення' && styles.activeCategoryText,
                            ]}
                        >
                            <Feather name="message-circle" size={16} style={{ marginRight: 5 }} /> Обговорення
                        </Text>
                    </TouchableOpacity>
                </View>

                {renderCategoryContent()}
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F1EFE4',
    },
    fixedTopSection: {
        overflow: 'hidden',
        borderRadius: 20,
        marginBottom: 10,
        height: 500,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(25, 24, 21, 0.5)',
    },
    topBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingTop: 10,
        marginBottom: 20,
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
    topBarIcons: {
        flexDirection: 'row',
    },
    shareButton: {
        marginLeft: 10,
        width: 48,
        height: 48,
        backgroundColor: '#E0DAC2',
        borderRadius: 555,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookmarkButton: {
        marginLeft: 10,
        width: 48,
        height: 48,
        backgroundColor: '#E0DAC2',
        borderRadius: 555,
        justifyContent: 'center',
        alignItems: 'center',
    },
    coverContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 8,
    },
    coverImage: {
        width: 180,
        height: 270,
        borderRadius: 8,
    },
    bookInfo: {
        alignItems: 'center',
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
        fontFamily: 'Montserrat-Bold',
        textAlign: 'center',
        marginBottom: 5,
    },
    bookAuthor: {
        fontSize: 16,
        color: '#ccc',
        fontFamily: 'Albra-Regular',
        textAlign: 'center',
    },
    actionsBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 24,
    },
    ratingContainer: {
        flexDirection: 'row',
        backgroundColor: 'rgba(247, 245, 238, 0.3)',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    ratingText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Albra-Regular',
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    likesText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Albra-Regular',
    },
    dislikes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dislikesText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 16,
        fontFamily: 'Albra-Regular',
    },
    scrollableContent: {
        flex: 1,
        paddingHorizontal: 16,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        marginBottom: 10,
    },
    categoryButton: {
        backgroundColor: '#E0DAC2',
        borderRadius: width * 0.05,
        paddingVertical: height * 0.01,
        paddingHorizontal: width * 0.03,
        marginRight: width * 0.02,
    },
    activeCategoryButton: {
        backgroundColor: '#191815',
    },
    categoryText: {
        color: 'black',
        fontSize: 16,
        fontFamily: 'Albra-Medium',
    },
    activeCategoryText: {
        color: 'white',
        fontFamily: 'Albra-Bold',
    },
    descriptionContainer: {
        marginTop: 10,
    },
    descriptionTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Bitter-Medium',
        marginBottom: 10,
        textAlign: 'start',
    },
    descriptionText: {
        textAlign: 'start',
        color: 'black',
        fontSize: 16,
        fontFamily: 'Albra-Regular',
        lineHeight: 24,
        marginBottom: 8,
    },
    commentsContainer: {
        marginTop: 10,
        margin: 10,
    },
    commentsTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Bitter-Medium',
        marginBottom: 10,
        textAlign: 'start',
    },
    commentItem: {
        flexDirection: 'row',
        paddingVertical: 8,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 500,
        marginRight: 20,
    },
    commentTextContainer: {
        flex: 1,
    },
    commentAuthor: {
        fontSize: 14,
        fontFamily: 'Bitter-Medium',
        color: 'black',
    },
    commentTime: {
        fontSize: 12,
        color: '#888272',
        fontFamily: 'Bitter-Medium',
    },
    comment: {
        fontSize: 14,
        color: 'black',
        marginTop: 5,
        fontFamily: 'Albra-Medium',
    },
    commentActions: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 8,
    },
    replyButton: {
        paddingVertical: 5,
        paddingHorizontal: 8,
    },
    replyText: {
        color: '#888272',
        fontSize: 12,
        fontFamily: 'Bitter-Medium',
    },
    likesContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeButton: {
        marginRight: 5,
    },
    likesCount: {
        fontSize: 14,
        color: 'black',
    },
    discussionListContainer: {
        marginTop: 10,
        paddingHorizontal: 16,
    },
    discussionTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Bitter-Medium',
        marginBottom: 15,
        textAlign: 'start',
    },
    discussionItem: {
        backgroundColor: '#F7F5EE',
        flexDirection:'row',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
    },
    discussionImage: {
        width: 100,
        height: 140,
        borderRadius: 8,
        marginRight: 15,
    },
    discussionInfo: {
        flex: 1,
    },
    discussionAuthor: {
        fontSize: 16,
        fontFamily: 'Bitter-Medium',
        color: 'black',
        marginBottom: 5,
    },
    discussionText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Albra-Regular',
        lineHeight: 20,
        marginBottom: 8,
    },
    discussionMeta: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spoilerBadge: {
        backgroundColor: '#DC3545',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        marginRight: 5,
    },
    spoilerText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Albra-Medium',
    },
    genreBadge: {
        backgroundColor: '#6C757D',
        borderRadius: 5,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        marginRight: 5,
    },
    genreText: {
        color: 'white',
        fontSize: 12,
        fontFamily: 'Albra-Medium',
    },
    statusText: {
        color: '#E04D53',
        fontSize: 12,
        fontFamily: 'Bitter-Bold',
        marginRight: 10,
    },
    discussionActions: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
        justifyContent: 'space-between',
    },
    likesContainerSmall: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likeButtonSmall: {
        marginRight: 3,
    },
    likesCountSmall: {
        fontSize: 12,
        color: 'black',
    },
    discussionTime: {
        fontSize: 12,
        color: '#888272',
        fontFamily: 'Bitter-Regular',
    },
    replyInputContainer: {
        flexDirection: 'row',
        marginTop: 10,
        alignItems: 'center',
    },
    replyInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 8,
        marginRight: 8,
        fontSize: 14,
        color: 'black',
        fontFamily: 'Albra-Regular',
    },
    sendButton: {
        padding: 8,
    },
    replyItem: {
        flexDirection: 'row',
        paddingVertical: 8,
        marginLeft: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    replyAvatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    replyTextContainer: {
        flex: 1,
    },
    replyAuthor: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
    replyTime: {
        fontSize: 10,
        color: 'gray',
        marginLeft: 5,
    },
    replyTextContent: {
        fontSize: 12,
        color: 'black',
        marginTop: 3,
    },
    imageContainer: {
        position: 'relative',
        marginRight: 15,
    },
    likeButtonOnImage: {
        position: 'absolute',
        bottom: 10,
        right: 50,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: 15,
        paddingVertical: 5,
        paddingHorizontal: 8,
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCountOnImage: {
        color: 'white',
        fontSize: 12,
        marginLeft: 5,
    },
=======
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
>>>>>>> 607eaccec204071919d997840cf1329735c4c7fb
});

export default BookDetailsScreen;