// SavedScreen.js
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
  Dimensions,
  TextInput,
  PixelRatio,
} from "react-native";
import Home from "../assets/Panel/Home.svg";
<<<<<<< HEAD
import Home2 from "../assets/Panel/home2.svg";
import List from "../assets/Panel/list.svg";
import Plus from "../assets/Panel/plus.svg";
import Save from "../assets/Panel/save.svg";
import Save2 from "../assets/Panel/save2.svg";
=======
import List from "../assets/Panel/list.svg";
import Plus from "../assets/Panel/plus.svg";
import Save from "../assets/Panel/save.svg";
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
import Profile from "../assets/Panel/profile.svg";
import Menu from "../assets/Profile/menu.svg";
import Heart from "../assets/Home/heart.svg";
import Saved from "../assets/Home/saved.svg";
import Saved2 from "../assets/Home/saved2.svg";
import Share from "../assets/Home/Share.svg";
import { Feather } from "@expo/vector-icons";
import SearchIcon from "../assets/Home/search.svg";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

const SavedScreen = () => {
  const navigation = useNavigation();
<<<<<<< HEAD
 const [activeTab, setActiveTab] = useState('SavedScreen');
 const [discussionData, setDiscussionData] = useState([
=======
  const [activeTab, setActiveTab] = useState("SavedScreen");
  const [discussionData, setDiscussionData] = useState([
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
    {
      id: "d1",
      author: "Jane Smith",
      time: "5хв тому",
      text: "Завершення першої частини циклу: мої теорії щодо наступної<3",
      likes: 34,
      image: require("../assets/Home/spell.png"),
      isSpoiler: true,
      genre: "Роман",
      status: "Нове",
    },
    {
      id: "d2",
      author: "By Nata",
      time: "1 годину тому",
      text: "Обговорення нової детективної історії. Хто головний підозрюваний?",
      likes: 15,
      image: require("../assets/Home/spell2.png"),
      isSpoiler: false,
      genre: "Детектив",
      status: "Нове",
    },
    {
      id: "d3",
      author: "Alice Johnson",
      time: "2 години тому",
      text: "Мої роздуми про останній розділ. Чи хтось ще був здивований?",
      likes: 28,
      image: require("../assets/Home/book5.png"),
      isSpoiler: true,
      genre: "Фентезі",
      status: "Активне",
    },
  ]);

  const [isThreeDotsMenuVisible, setIsThreeDotsMenuVisible] = useState(false);
  const [selectedDiscussionItemId, setSelectedDiscussionItemId] =
    useState(null);
  const [isSaveToCollectionVisible, setIsSaveToCollectionVisible] =
    useState(false);
  const [saveToCollectionTitle, setSaveToCollectionTitle] = useState(
    "Зберегти до колекції"
  );
  const [savedCollectionId, setSavedCollectionId] = useState(null);
  const [collections, setCollections] = useState([
    {
      id: "c1",
      name: "Прочитане",
      coverImage: require("../assets/Home/book5.png"),
    },
    {
      id: "c2",
      name: "У планах",
      coverImage: require("../assets/Home/book5.png"),
    },
    {
      id: "c3",
      name: "Улюблене",
      coverImage: require("../assets/Home/book5.png"),
    },
<<<<<<< HEAD
    {
      id: "c4",
      name: "Улюблене",
      coverImage: require("../assets/Home/book5.png"),
    },
    {
      id: "c5",
      name: "Улюблене",
      coverImage: require("../assets/Home/book5.png"),
    },
=======
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
  ]);
  const [activeCategory, setActiveCategory] = useState("Всі");
  const categories = [
    "Всі",
    "Фентезі",
    "Детектив",
    "Роман",
    "Наукова фантастика",
  ];
  const [searchText, setSearchText] = useState("");

  const openThreeDotsMenu = (itemId) => {
    setSelectedDiscussionItemId(itemId);
    setIsThreeDotsMenuVisible(true);
  };

  const closeThreeDotsMenu = () => {
    setIsThreeDotsMenuVisible(false);
    setSelectedDiscussionItemId(null);
  };

  const openSaveToCollection = () => {
    setIsThreeDotsMenuVisible(false);
    setIsSaveToCollectionVisible(true);
    setSaveToCollectionTitle("Зберегти до колекції");
    setSavedCollectionId(null);
  };

  const closeSaveToCollection = () => {
    setIsSaveToCollectionVisible(false);
    setSelectedDiscussionItemId(null);
  };

  const handleSaveToCollection = (collectionId) => {
    if (selectedDiscussionItemId) {
      console.log(
        `Збережено обговорення з ID ${selectedDiscussionItemId} до колекції з ID ${collectionId}`
      );
      setSaveToCollectionTitle("Успішно збережено");
      setSavedCollectionId(collectionId);
      setTimeout(() => closeSaveToCollection(), 1000); // Автоматичне закриття через секунду
    }
  };

  const navigateToSearchScreen = () => {
    navigation.navigate("SearchScreen");
  };

  const handleCategoryPress = (category) => {
    setActiveCategory(category);
    console.log(`Обрано категорію: ${category}`);
    // Тут можна додати логіку фільтрації обговорень за категорією
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Збережені обговорення</Text>

      {/* Поле пошуку */}
      <TouchableOpacity
        style={styles.searchBar}
        onPress={() => navigation.navigate("Search")}
      >
        <SearchIcon width={20} height={20} style={styles.searchIcon} />
        <Text style={styles.searchText}>Пошук обговорень...</Text>
      </TouchableOpacity>
<<<<<<< HEAD
=======

>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
      {/* Категорії */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {categories.map((category) => (
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

      {/* Список обговорень */}
      <ScrollView>
        {discussionData.map((item) => (
<<<<<<< HEAD
          <View key={item.id} style={styles.discussionItem} >
            <TouchableOpacity onPress={() => { navigation.navigate('Spell_details');  }} >
            {item.image && (
              <Image source={item.image} style={styles.discussionImage} />
              
            )}            </TouchableOpacity>

=======
          <View key={item.id} style={styles.discussionItem}>
            {item.image && (
              <Image source={item.image} style={styles.discussionImage} />
            )}
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
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
              <Heart
                style={styles.likesSvg}
                width={14}
                height={12}
                fill="white"
              />
              <Text style={styles.likesCountBottom}>{item.likes}</Text>
            </TouchableOpacity>
          </View>
        ))}
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
                console.log(
                  `Поділитись обговоренням з ID: ${selectedDiscussionItemId}`
                );
                closeThreeDotsMenu();
              }}
            >
              <Share width={20} height={20} style={styles.modalIcon} />
              <Text style={styles.modalText}>Поділитись</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalOption}
              onPress={openSaveToCollection}
            >
              <Saved width={20} height={20} style={styles.modalIcon} />
              <Text style={styles.modalText}>Зберегти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeThreeDotsMenu}
            >
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
            <Text style={styles.saveToCollectionTitle}>
              {saveToCollectionTitle}
            </Text>
            {collections.map((collection) => (
              <TouchableOpacity
                key={collection.id}
                style={styles.collectionItem}
                onPress={() => handleSaveToCollection(collection.id)}
              >
                <Image
                  source={collection.coverImage}
                  style={styles.collectionCover}
                />
                <Text style={styles.collectionName}>{collection.name}</Text>
                <TouchableOpacity style={styles.collectionSaveButton}>
                  {savedCollectionId === collection.id ? (
                    <Saved2 width={23} height={27} />
                  ) : (
                    <Saved width={23} height={27} />
                  )}
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalCloseButton}
              onPress={closeSaveToCollection}
            >
              <Text style={styles.modalCloseText}>Закрити</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
<<<<<<< HEAD
     <View style={styles.navigationBar}>
              <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Image'); setActiveTab('Image'); }}>
                <Home2 style={styles.navIcon}/>
                {activeTab === 'Image' && <View style={[styles.activenavIcon, ]} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('CollectionMain'); setActiveTab('CollectionMain'); }}> 
                <List style={styles.navIcon} />
                {activeTab === 'CollectionMain' && <View style={[styles.activenavIcon,]} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Create'); setActiveTab('Create'); }}>
                <Plus style={styles.navIcon} />
                {activeTab === 'Create' && <View style={[styles.activenavIcon, ]} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('SavedScreen'); setActiveTab('SavedScreen'); }}>
                <Save2 style={styles.navIcon} />
                {activeTab === 'SavedScreen' && <View style={[styles.activenavIcon, ]} />}
              </TouchableOpacity>
              <TouchableOpacity style={styles.navItem} onPress={() => { navigation.navigate('Product'); setActiveTab('Product'); }}>
                <Profile style={styles.navIcon} />
                {activeTab === 'Product' && <View style={[styles.activenavIcon,]} />}
              </TouchableOpacity>
            </View>
=======
      {/* Кастомна навігація */}
      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Image");
            setActiveTab("Home");
          }}
        >
          <Home style={styles.navIcon} />
          {activeTab === "Home" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("BooksScreen");
            setActiveTab("Discover");
          }}
        >
          <List style={styles.navIcon} />
          {activeTab === "Discover" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Create");
            setActiveTab("Create");
          }}
        >
          <Plus style={styles.navIcon} />
          {activeTab === "Create" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("SavedScreen");
            setActiveTab("SavedScreen");
          }}
        >
          <Save style={styles.navIcon} />
          {activeTab === "SavedScreen" && (
            <View style={[styles.activenavIcon]} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Product");
            setActiveTab("Profile");
          }}
        >
          <Profile style={styles.navIcon} />
          {activeTab === "Profile" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
      </View>
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1EFE4",
    paddingTop: 80,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
    marginHorizontal: 16,
    marginBottom: 10,
  },
  searchIcon: {
    marginRight: width * 0.02,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: "gray",
    backgroundColor: "#E0DAC2",
    marginLeft: width * 0.03,
    fontFamily: "Bitter",
  },
  categoriesContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  categoryButton: {
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.05,
    justifyContent: "center",
    alignItems: "center",
    marginRight: width * 0.02,
    height: 40,
  },
  categoryText: {
    fontSize: 14,
    color: "#333",
    fontFamily: "Albra-Medium",
    margin: 10,
  },
  activeCategoryButton: {
    backgroundColor: "#000",
  },
  activeCategoryText: {
    color: "#fff",
    fontFamily: "Bitter",
  },
  title: {
    fontSize: 24,
    fontFamily: "Bitter-Medium",
    color: "black",
    marginBottom: 20,
    textAlign: "center",
    marginHorizontal: 20,
  },
  discussionItem: {
    backgroundColor: "#F1EFE4",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "flex-start",
    marginHorizontal: 16,
    // shadowColor: "#000",
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 4,
    // elevation: 2,
  },
  discussionImage: {
    width: 120,
    height: 120,
    borderRadius: 8,
    marginRight: 15,
  },
  discussionMain: {
    flex: 1,
  },
  discussionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  discussionAuthor: {
    fontSize: 16,
    fontFamily: "Bitter-Regular",
    color: "#888272",
    top: -5,
  },
  discussionTime: {
    fontSize: 12,
    color: "#888272",
    fontFamily: "Bitter-Regular",
    marginLeft: 4,
  },
  discussionText: {
    fontSize: 14,
    color: "black",
    fontFamily: "Bitter-SemiBold",
    lineHeight: 20,
    marginBottom: 5,
  },
  metaContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  metaLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  statusAndTime: {
    flexDirection: "column",
    alignItems: "flex-end",
  },
  status: {
    borderRadius: 555,
    alignItems: "flex-start",
  },
  statusText: {
    color: "#E04D53",
    fontSize: 12,
    fontFamily: "Bitter-Bold",
  },
  timeContainer: {
    alignItems: "flex-end",
    marginTop: 5,
  },
  spoilerBadge: {
    backgroundColor: "#F7CFD1",
    borderRadius: 555,
    paddingVertical: 3,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    marginRight: 5,
  },
  spoilerText: {
    color: "#191815",
    fontSize: 12,
    fontFamily: "Albra-Medium",
  },
  genreBadge: {
    backgroundColor: "#E0DAC2",
    borderRadius: 555,
    paddingVertical: 3,
    paddingHorizontal: 6,
    alignSelf: "flex-start",
    marginRight: 5,
  },
  genreText: {
    color: "#191815",
    fontSize: 12,
    fontFamily: "Albra-Medium",
  },
  threeDotsButton: {
    marginLeft: "auto",
    top: -20,
  },
  likeButtonBottom: {
    position: "absolute",
<<<<<<< HEAD
    bottom: 45,
=======
    bottom: 15,
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
    left: 15,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 555,
    width: 56,
    height: 24,
  },
  likesCountBottom: {
    position: "absolute",
    color: "white",
    fontSize: 12,
    marginLeft: 30,
    fontFamily: "Bitter-Medium",
  },
  likesSvg: {
    position: "absolute",
    color: "white",
    fontSize: 14,
    marginLeft: 10,
    fontFamily: "Bitter-Regular",
  },
  centeredView: {
<<<<<<< HEAD
    flex: 1,
=======
    flexflex: 1,
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOption: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
    justifyContent: "center",
  },
  modalIcon: {
    marginRight: 10,
  },
  modalText: {
    fontSize: 18,
    fontFamily: "Albra-Regular",
    color: "black",
  },
  modalCloseButton: {
    marginTop: 20,
    backgroundColor: "#E0DAC2",
    borderRadius: 8,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  modalCloseText: {
    fontSize: 16,
    fontFamily: "Bitter-Medium",
    color: "black",
  },
  saveToCollectionModalView: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    width: "90%",
    alignItems: "center",
    shadowColor: "#000",
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
    fontFamily: "Bitter-Medium",
    color: "black",
    marginBottom: 15,
    textAlign: "center",
  },
  collectionItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: "100%",
  },
  collectionCover: {
    width: 50,
    height: 75,
    borderRadius: 5,
    marginRight: 15,
  },
  collectionName: {
    flex: 1,
    fontSize: 16,
    fontFamily: "Albra-Regular",
    color: "black",
  },
  collectionSaveButton: {
    padding: 10,
  },
<<<<<<< HEAD
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
=======
  navigationBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#000",
    height: height * 0.1,
    width: width * 0.9,
    borderRadius: width * 0.1,
    position: "absolute",
    bottom: height * 0.02,
    left: width * 0.05,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    width: width * 0.1,
    height: width * 0.1,
  },
  navIcon: {
    width: width * 0.06,
    height: width * 0.06,
    resizeMode: "contain",
  },
  activenavIcon: {
    position: "absolute",
    bottom: -15,
    borderRadius: 50,
    height: 5,
    width: 43,
    backgroundColor: "#E04D53",
  },
>>>>>>> 96a3a01338129a5f5e4693d7375d4787a7c3330d
});

export default SavedScreen;
