import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Dimensions,
  PixelRatio,
  Platform,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Home2 from "../assets/Panel/home2.svg";
import List from "../assets/Panel/list.svg";
import Plus from "../assets/Panel/plus.svg";
import Save from "../assets/Panel/save.svg";
import List2 from "../assets/Panel/list2.svg";
import Profile from "../assets/Panel/profile.svg";
import Search from "../assets/Home/search.svg";
import EmptyCol from "../assets/Main/for_colection.svg";

const { width, height } = Dimensions.get("window");

const CollectionMain = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("Discover");
  const [collectionsData, setCollectionsData] = useState([]);

  useEffect(() => {
    // Отримуємо назву нової колекції, якщо вона передана
    if (route.params?.newCollectionTitle) {
      const newTitle = route.params.newCollectionTitle;
      const newCollection = {
        id: Date.now(), // Генеруємо унікальний ID
        title: newTitle,
        books: [], // Поки що порожня колекція
      };
      setCollectionsData((prevCollections) => [newCollection, ...prevCollections]);
    } else {
      // Початкові колекції
      const initialBookData = [
        {
          id: 1,
          title: "Розпали Мене",
          author: "Тагере Мафі",
          cover: require("../assets/Home/book.png"),
        },
        {
          id: 2,
          title: "Привиди Венеції",
          author: "КДА",
          cover: require("../assets/Home/book2.png"),
        },
        {
          id: 3,
          title: "Золото Темряви",
          author: "Скарлетт Сент-Клер",
          cover: require("../assets/Home/book.png"),
        },
        {
          id: 4,
          title: "Відблиск",
          author: "В.Е. Шваб",
          cover: require("../assets/Home/book2.png"),
        },
        {
          id: 5,
          title: "Рівні Вага",
          author: "Винниченко",
          cover: require("../assets/Home/book.png"),
        },
        {
          id: 6,
          title: "Четверте крило",
          author: "Ребекка Яррос",
          cover: require("../assets/Home/book2.png"),
        },
        {
          id: 7,
          title: "Місячне сяйво",
          author: "Невідомий Автор",
          cover: require("../assets/Home/book.png"),
        },
        {
          id: 8,
          title: "Хірург",
          author: "Геррітсен",
          cover: require("../assets/Home/book2.png"),
        },
      ];
      const chunkArray = (array, size) => {
        const chunkedArr = [];
        for (let i = 0; i < array.length; i += size) {
          chunkedArr.push({
            id: `initial-${i / size + 1}`,
            title: `Колекція ${i / size + 1}`,
            books: array.slice(i, i + size),
          });
        }
        return chunkedArr;
      };
      setCollectionsData(chunkArray(initialBookData, 4));
    }
  }, [route.params?.newCollectionTitle]);

  const handleCollectionPress = (collection) => {
    navigation.navigate("Collection", { collection });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <ScrollView style={styles.content}>
          {/* Заголовок та кнопка "+" */}
          <View style={styles.header}>
            <Text style={styles.title}>Книги</Text>
            <TouchableOpacity
              style={styles.plusButton}
              onPress={() => navigation.navigate("Creatcolection")}
            >
              <Plus style={styles.plusIcon} />
            </TouchableOpacity>
          </View>

          {/* Поле пошуку */}
          <View style={styles.searchBar}>
            <TouchableOpacity onPress={() => console.log("Пошук")}>
              <Search />
            </TouchableOpacity>
            <TextInput
              style={styles.searchText}
              placeholder="Пошук"
              value={searchText}
              onPress={() => navigation.navigate("Search")}
              onChangeText={setSearchText}
              onSubmitEditing={() =>
                navigation.navigate("SearchResults", { query: searchText })
              }
            />
          </View>

          {/* Відображення колекцій */}
          <View style={styles.booksContainer}>
            {collectionsData.map((collection) => (
              <TouchableOpacity
                key={collection.id}
                style={styles.collectionContainer}
                onPress={() => handleCollectionPress(collection)}
              >
                <EmptyCol />
                <Text style={styles.collectionTitle}>{collection.title}</Text>
                <View style={styles.bookRow}>
                  {collection.books.map((book, index) => (
                    <View key={book.id} style={styles.book}>
                      {index < 2 && (
                        <Image source={book.cover} style={styles.bookCover} />
                      )}
                    </View>
                  ))}
                </View>
                <View style={styles.bookRow}>
                  {collection.books.slice(2).map((book, index) => (
                    <View key={book.id} style={styles.book}>
                      {index < 2 && (
                        <Image source={book.cover} style={styles.bookCover} />
                      )}
                    </View>
                  ))}
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Кастомна навігація */}
        <View style={styles.navigationBar}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {
              navigation.navigate("Image");
              setActiveTab("Home");
            }}
          >
            <Home2  style={styles.navIcon} />
            {activeTab === "Home" && <View style={[styles.activenavIcon]} />}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => {
              navigation.navigate("BooksScreen");
              setActiveTab("Discover");
            }}
          >
            <List2  style={styles.navIcon} />
            {activeTab === "Discover" && (
              <View style={[styles.activenavIcon]} />
            )}
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
            {activeTab === "" && (
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
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F1EFE4",
  },
  container: {
    flex: 1,
    backgroundColor: "#F1EFE4",
  },
  content: {
    flex: 1,
    padding: width * 0.03,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.04,
    marginTop: height * 0.01,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#191815",
    fontFamily: "Bitter-Bold",
  },
  plusButton: {
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.06,
    padding: width * 0.02,
  },
  plusIcon: {
    width: width * 0.06,
    height: width * 0.06,
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
    marginBottom: height * 0.03,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: "black",
    backgroundColor: "#E0DAC2",
    marginLeft: width * 0.02,
    fontFamily: "Bitter",
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
    paddingHorizontal: width * 0.02,
  },
  collectionContainer: {
    width: "50%",
    paddingHorizontal: width * 0.02,
    marginBottom: height * 0.03,
  },
  collectionTitle: {
    fontSize: 18,
    color: "#191815",
    fontFamily: "Bitter-Medium",
    marginBottom: height * 0.01,
  },
  bookRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  book: {
    alignItems: "center",
    width:"50%", // Приблизно половина доступного місця в рядку
  },
  bookCover: {
    width: "90%",
    height: 90,
    borderRadius: width * 0.025,
    marginBottom: height * 0.005,
  },
  bookTitle: {
    fontSize: 14,
    color: "#333",
    textAlign: "center",
    fontFamily: "Bitter-Bold",
    marginTop: height * 0.005,
  },
  bookAuthor: {
    fontSize: 12,
    color: "#666",
    textAlign: "center",
    fontFamily: "Bitter-Regular",
  },
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
});

export default CollectionMain;