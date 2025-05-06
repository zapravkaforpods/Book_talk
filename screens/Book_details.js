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
    Modal, // Додайте імпорт Modal
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Heart from '../assets/Home/heart.svg';
import Menu from '../assets/Profile/menu.svg';
import Zirka from '../assets/Home/zirka.svg';
import Like from '../assets/Home/like.svg';
import Dislike from '../assets/Home/dislike.svg';
import Share from '../assets/Home/Share.svg';
import Saved from '../assets/Home/saved.svg';
import Saved2 from '../assets/Home/saved2.svg';


const { width, height } = Dimensions.get('window');

const BookDetailsScreen = () => {
    const navigation = useNavigation();
    const [activeCategory, setActiveCategory] = useState('Опис');
    const [isThreeDotsMenuVisible, setIsThreeDotsMenuVisible] = useState(false);
    const [selectedDiscussionItemId, setSelectedDiscussionItemId] = useState(null);
    const [isSaveToCollectionVisible, setIsSaveToCollectionVisible] = useState(false); // Новий стан
    const [saveToCollectionTitle, setSaveToCollectionTitle] = useState("Зберегти до колекції");
    const [savedCollectionId, setSavedCollectionId] = useState(null);


    const [commentsData, setCommentsData] = useState([
        {
            id: '1',
            author: 'Jane Cooper',
            time: '14хв тому',
            text: 'Чудовий пост! Дякую.',
            likes: 23,
            avatar: require('../assets/Main/people/avatar.png'),
            replies: [],
        },
        {
            id: '2',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/people/avatar-1.png'),
            replies: [],
        },
        {
            id: '3',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/people/avatar-2.png'),
            replies: [],
        },
        {
            id: '4',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/people/avatar-3.png'),
            replies: [],
        },
        {
            id: '5',
            author: 'Leslie Alexander',
            time: '20хв тому',
            text: 'Декілька раз натрапляла на авторку в Instagram, після вашого відгуку точно куплю книгу!',
            likes: 45,
            avatar: require('../assets/Main/people/avatar-4.png'),
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
            time: '1 годину тому',
            text: 'Обговорення нової детективної історії. Хто головний підозрюваний?',
            likes: 15,
            image: require('../assets/Home/spell2.png'), // Додано зображення
            isSpoiler: false,
            genre: 'Детектив',
            status: 'Нове',
        },
        {
            id: 'd3',
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
            id: 'd4',
            author: 'By Nata',
            time: '1 годину тому',
            text: 'Обговорення нової детективної історії. Хто головний підозрюваний?',
            likes: 15,
            image: require('../assets/Home/spell2.png'), // Додано зображення
            isSpoiler: false,
            genre: 'Детектив',
            status: 'Нове',
        },
    ]);

    // Припустимо, у вас є масив об'єктів колекцій
    const [collections, setCollections] = useState([
        { id: 'c1', name: 'Прочитане', coverImage: require('../assets/Home/book5.png') },
        { id: 'c2', name: 'У планах', coverImage: require('../assets/Home/book5.png') },
        { id: 'c3', name: 'Улюблене', coverImage: require('../assets/Home/book5.png') },
        { id: 'c4', name: 'Нові', coverImage: require('../assets/Home/book5.png') },
    ]);

    const handleBackPress = () => {
        navigation.goBack();
    };
    const openThreeDotsMenu = (itemId) => {
        setSelectedDiscussionItemId(itemId);
        setIsThreeDotsMenuVisible(true);
    };
    const closeThreeDotsMenu = () => {
        setIsThreeDotsMenuVisible(false);
        setSelectedDiscussionItemId(null);
    };
    const openSaveToCollection = () => {
        setIsThreeDotsMenuVisible(false); // Закриваємо меню з трьома крапками
        setIsSaveToCollectionVisible(true); // Відкриваємо вікно збереження до колекції
        setSaveToCollectionTitle("Зберегти до колекції");
        setSavedCollectionId(null);
    };
    const closeSaveToCollection = () => {
        setIsSaveToCollectionVisible(false);
        setSelectedDiscussionItemId(null);
    };
    const handleSaveToCollection = (collectionId) => {
        // Тут додайте логіку для фактичного збереження обговорення
        // до колекції з ідентифікатором collectionId
        if (selectedDiscussionItemId) {
            console.log(`Збережено обговорення з ID ${selectedDiscussionItemId} до колекції з ID ${collectionId}`);
            // closeSaveToCollection();
            setSaveToCollectionTitle("Успішно збережено");
            setSavedCollectionId(collectionId);
            // Можна також показати користувачеві повідомлення про успішне збереження
        }
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
                                avatar: require('../assets/Main/people/avatar.png'),
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
                                <Image source={item.image} style={styles.discussionImage} />
                            )}
                            <View style={styles.discussionMain}>
                                <View style={styles.discussionHeader}>
                                    <Text style={styles.discussionText}>{item.text}</Text>
                                    <TouchableOpacity
                                        style={styles.threeDotsButton}
                                        onPress={() => openThreeDotsMenu(item.id)}
                                    >
                                        <Menu width={24} height={24} fill="black" />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.discussionAuthor}>{item.author}</Text>
                                <View style={styles.metaContainer}>
                                    <View style={styles.metaLeft}>
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
                                    </View>
                                    <View style={styles.statusAndTime}>
                                        {item.status && (
                                            <View style={styles.status}>
                                                <Text style={styles.statusText}>{item.status}</Text>
                                            </View>
                                        )}
                                        {item.time && (
                                            <View style={styles.timeContainer}>
                                                <Text style={styles.discussionTime}>{item.time}</Text>
                                            </View>
                                        )}
                                    </View>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.likeButtonBottom}>
                                <Heart style={styles.likesSvg} width={14} height={12} fill="white" />
                                <Text style={styles.likesCountBottom}>{item.likes}</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            );
        }
        return null;
    };

    return (
        <View style={styles.safeArea}>
            <View style={styles.fixedTopSection}>
                <ImageBackground
                    source={require('../assets/Home/Mask Group.png')}
                    style={[styles.backgroundImage, { blurRadius: 10 }]} // Додано blurRadius
                >
                    <View style={styles.overlay} />
                    <View style={styles.topBar}>
                        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
                            <Feather name="arrow-left" size={24} color="black" />
                        </TouchableOpacity>
                        <View style={styles.topBarIcons}>
                            <TouchableOpacity style={styles.shareButton}>
                                <Share name="share" size={24} color="black" />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.bookmarkButton}>
                                <Saved name="bookmark" size={24} color="black" />
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
                            <TouchableOpacity style={styles.ratingButton} onPress={() => console.log('Рейтинг')}>
                                <View style={styles.rating}>
                                    <Zirka name="star" size={20} color="#FFC107" />
                                    <Text style={styles.ratingText}>4.5</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.likesButton} onPress={() => console.log('Лайки')}>
                                <View style={styles.likes}>
                                    <Like name="thumbs-up" size={20} color="white" />
                                    <Text style={styles.likesText}>34</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.dislikesButton} onPress={() => console.log('Дизлайки')}>
                                <View style={styles.dislikes}>
                                    <Dislike name="thumbs-down" size={20} color="white" />
                                    <Text style={styles.dislikesText}>8</Text>
                                </View>
                            </TouchableOpacity>
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

            <Modal
                animationType="slide"
                transparent={true}
                visible={isThreeDotsMenuVisible}
                onRequestClose={closeThreeDotsMenu}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => {
                                // Тут додайте логіку для "Поділитись"
                                console.log(`Поділитись обговоренням з ID: ${selectedDiscussionItemId}`);
                                closeThreeDotsMenu();
                            }}
                        >
                            <Share width={20} height={20} style={styles.modalIcon} />
                            <Text style={styles.modalText}>Поділитись</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.modalOption}
                            onPress={() => {
                                openSaveToCollection();
                            }}
                        >
                            <Saved width={20} height={20} style={styles.modalIcon} />
                            <Text style={styles.modalText}>Зберегти</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeThreeDotsMenu}>
                            <Text style={styles.modalCloseText}>Закрити</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={isSaveToCollectionVisible}
                onRequestClose={closeSaveToCollection}
            >
                <View style={styles.centeredView}>
                    <View style={styles.saveToCollectionModalView}>
                        <Text style={styles.saveToCollectionTitle}>{saveToCollectionTitle}</Text>
                        {collections.map((collection) => (
                            <TouchableOpacity
                                key={collection.id}
                                style={styles.collectionItem}
                                onPress={() => handleSaveToCollection(collection.id)}
                            >
                                <Image source={collection.coverImage} style={styles.collectionCover} />
                                <Text style={styles.collectionName}>{collection.name}</Text>
                                <TouchableOpacity style={styles.collectionSaveButton}>
                                    {savedCollectionId === collection.id ? (
                                         <Saved2 width={23} height={27} />
                                    ) : (
                                        <Saved width={23} height={27}  />
                                    )}
                                </TouchableOpacity>
                            </TouchableOpacity>
                        ))}
                        <TouchableOpacity style={styles.modalCloseButton} onPress={closeSaveToCollection}>
                            <Text style={styles.modalCloseText}>Закрити</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
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
        height: 450,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        // Додано blurRadius для iOS
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
        paddingTop: 55,
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
        width: 140,
        height: 210,
        borderRadius: 8,
    },
    bookInfo: {
        alignItems: 'center',
        marginBottom: 16,
        top: -20,
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
        top: -20,
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
        paddingHorizontal: 20,
    },
    categoriesContainer: {
        flexDirection: 'row',
        justifyContent: 'center', // Змінено на 'center'
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
        color: '#191815',
        fontSize: 16,
        fontFamily: 'Bitter-Medium',
    },
    activeCategoryText: {
        color: 'white',
        fontFamily: 'Albra-Bold',
    },
    descriptionContainer: {
        marginTop: 10,
        paddingHorizontal: 10,
    },
    descriptionTitle: {
        color: 'black',
        fontSize: 24,
        fontFamily: 'Bitter-Medium',
        marginBottom: 10,
        textAlign: 'start',
    },
    descriptionText: {
        textAlign: 'start',
        color: '#191815',
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
        borderBottomColor: '#E0DAC2',
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
        color: '#191815',
        // margin: 10,
    },
    commentTime: {
        fontSize: 12,
        color: '#888272',
        fontFamily: 'Bitter-Medium',
        left: 10,
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
    },
    discussionTitle: {
        color: 'black',
        fontSize: 18,
        fontFamily: 'Bitter-Medium',
        marginBottom: 15,
        textAlign: 'start',
    },
    discussionItem: {
        backgroundColor: '#F1EFE4',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        flexDirection: 'row', // Головний контейнер - ряд
        alignItems: 'flex-start', // Вирівнювання елементів по верхньому краю
    },
    discussionImage: {
        width: 140,
        height: 140,
        borderRadius: 8,
        marginRight: 15,
    },
    discussionMain: {
        flex: 1, // Займає весь доступний простір справа від зображення
    },
    discussionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },
    discussionAuthor: {
        fontSize: 16,
        fontFamily: 'Bitter-Regular',
        color: '#888272',
        top: -5,
    },
    discussionTime: {
        fontSize: 12,
        color: '#888272',
        fontFamily: 'Bitter-Regular',
        marginLeft: 4,
    },
    discussionText: {
        fontSize: 14,
        color: 'black',
        fontFamily: 'Bitter-SemiBold',
        lineHeight: 20,
        marginBottom: 5,
    },
    discussionMeta: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    metaLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statusAndTime: {
        flexDirection: 'colmun',
        marginTop: 10,
        alignItems: 'end',
    },
    status: {
        borderRadius: 555,
        alignItems: 'start',
    },
    statusText: {
        color: '#E04D53',
        fontSize: 12,
        fontFamily: 'Bitter-Bold',
    },
    timeContainer: {
        alignItems: 'flex-end',
        bottom: 15,
    },

    spoilerBadge: {
        backgroundColor: '#F7CFD1',
        borderRadius: 555,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        marginRight: 5,
    },
    spoilerText: {
        color: '#191815',
        fontSize: 12,
        fontFamily: 'Albra-Medium',
    },
    genreBadge: {
        backgroundColor: '#E0DAC2',
        borderRadius: 555,
        paddingVertical: 3,
        paddingHorizontal: 6,
        alignSelf: 'flex-start',
        marginRight: 5,
    },
    genreText: {
        color: '#191815',
        fontSize: 12,
        fontFamily: 'Albra-Medium',
    },
    threeDotsButton: {
        marginLeft: 'auto',
        top: -20,
    },
    likeButtonBottom: {
        position: 'absolute',
        bottom: 30,
        left: 25,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 555,
        width: 56,
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
        marginLeft: 10,
        fontFamily: 'Bitter-Regular',
    },
    discussionInfo: {
        flex: 1,
    },
    discussionInfoHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 5,
    },

    discussionDate: {
        fontSize: 12,
        color: '#888272',
        fontFamily: 'Bitter-Regular',
    },

    discussionActions: {
        flexDirection: 'row',
        alignItems: 'center',
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
        fontSize: 14,
        color: 'black',
        fontFamily: 'Bitter-Regular',
    },
    shareButtonSmall: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    shareTextSmall: {
        fontSize: 12,
        color: 'black',
        marginLeft: 5,
    },
    saveButtonSmall: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    saveTextSmall: {
        fontSize: 12,
        color: 'black',
        marginLeft: 5,
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
        width: 60,
        height: 60,
        borderRadius: 15,
        marginRight: 10,
    },
    replyTextContainer: {
        flex: 1,
    },
    replyAuthor: {
        fontSize: 14,
        fontFamily: 'Bitter-Medium',
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
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalOption: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        width: '100%',
        justifyContent: 'center',
    },
    modalIcon: {
        marginRight: 10,
    },
    modalText: {
        fontSize: 18,
        fontFamily: 'Albra-Regular',
        color: 'black',
    },
    modalCloseButton: {
        marginTop: 20,
        backgroundColor: '#E0DAC2',
        borderRadius: 8,
        padding: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalCloseText: {
        fontSize: 16,
        fontFamily: 'Bitter-Medium',
        color: 'black',
    },
    saveToCollectionModalView: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        width: '90%',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    saveToCollectionTitle: {
        fontSize: 20,
        fontFamily: 'Bitter-Medium',
        color: 'black',
        marginBottom: 15,
        textAlign: 'center',
    },
    collectionItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        width: '100%',
        justifyContent: 'space-between',
    },
    collectionCover: {
        width: 40,
        height: 60,
        borderRadius: 5,
        marginRight: 15,
    },
    collectionName: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Albra-Regular',
        color: 'black',
    },
    collectionSaveButton: {
        padding: 8,
    },
});

export default BookDetailsScreen;

