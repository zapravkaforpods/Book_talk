import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";
// import { SafeAreaView } from "react-native-safe-area-context";
import Home from "../assets/Panel/Home.svg";
import List from "../assets/Panel/list.svg";
import Plus from "../assets/Panel/plus.svg";
import Save from "../assets/Panel/save.svg";
import Profile from "../assets/Panel/profile.svg";
import Headphones from "../assets/Home/Headphones.svg";
import Bell from "../assets/Home/notification.svg";
import Filter from "../assets/Home/filter.svg";
import Search from "../assets/Home/search.svg";

const { width, height } = Dimensions.get("window");
const ImageScreen = () => {
  const navigation = useNavigation({ animationEnabled: false });
  const [searchText, setSearchText] = useState("");
  const [activeTab, setActiveTab] = useState("Image");
  const [activeCategory, setActiveCategory] = useState("Всі");
  const [displayedBooks, setDisplayedBooks] = useState([]);
  const [allBooks] = useState([
    {
      id: 1,
      title: "Із крові й попелу",
      author: "Дженніфер Л. Арментраут",
      genre: "Фентезі",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 2,
      title: "Розпали мене",
      author: "Тагере Мафі",
      genre: "Фентезі",
      cover: require("../assets/Home/book2.png"),
    },
    {
      id: 3,
      title: "Книга Детектив 1",
      author: "Автор Детектив 1",
      genre: "Детектив",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 4,
      title: "Книга Детектив 2",
      author: "Автор Детектив 2",
      genre: "Детектив",
      cover: require("../assets/Home/book2.png"),
    },
    {
      id: 5,
      title: "Книга Роман 1",
      author: "Автор Роман 1",
      genre: "Роман",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 6,
      title: "Книга Роман 2",
      author: "Автор Роман 2",
      genre: "Роман",
      cover: require("../assets/Home/book2.png"),
    },
    {
      id: 7,
      title: "Книга Псих 1",
      author: "Автор Псих 1",
      genre: "Псих",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 8,
      title: "Книга Псих 2",
      author: "Автор Псих 2",
      genre: "Псих",
      cover: require("../assets/Home/book2.png"),
    },
    {
      id: 9,
      title: "Книга Всі 1",
      author: "Автор Всі 1",
      genre: "Всі",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 10,
      title: "Книга Всі 2",
      author: "Автор Всі 2",
      genre: "Всі",
      cover: require("../assets/Home/book2.png"),
    },
    {
      id: 11,
      title: "Книга Фентезі 3",
      author: "Автор Фентезі 3",
      genre: "Фентезі",
      cover: require("../assets/Home/book.png"),
    },
    {
      id: 12,
      title: "Книга Детектив 3",
      author: "Автор Детектив 3",
      genre: "Детектив",
      cover: require("../assets/Home/book2.png"),
    },
  ]);

  useEffect(() => {
    filterBooks(activeCategory);
  }, [activeCategory, allBooks]);

  const filterBooks = (genre) => {
    const filtered =
      genre === "Всі"
        ? allBooks.slice(0, 4)
        : allBooks.filter((book) => book.genre === genre).slice(0, 4);
    setDisplayedBooks(filtered);
  };

  const handleGenrePress = (genre) => {
    setActiveCategory(genre);
  };

  const handleViewAllReadingPress = () => {
    navigation.navigate("ReadingList", {
      books: displayedBooks,
      category: activeCategory,
    });
  };

  const handleViewAllDiscussionTypesPress = () => {
    navigation.navigate("DiscussionTypes");
  };

  const handleViewAllTopDiscussionsPress = () => {
    navigation.navigate("TopDiscussions");
  };
  const navigateToFeedback = () => {
    navigation.navigate("Feedback");
  };

  const categories = ["Всі", "Фентезі", "Детектив", "Роман", "Псих"];

  return (
    // <SafeAreaView style={styles.safeArea}>
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        {/* Верхня частина екрана */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.userSection}
            onPress={() => navigation.navigate("Product")}
          >
            <Image
              source={require("../assets/Main/my photo.png")}
              style={styles.userPhoto}
            />
            <View style={styles.userInfo}>
              <Text style={styles.helloText}>Helo, Nata!👋 </Text>
              <Text style={styles.questionText}>
                Про що поговоримо сьогодні?
              </Text>
            </View>
          </TouchableOpacity>
          <View style={styles.icons}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={navigateToFeedback}
            >
              <Headphones />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => navigation.navigate("Notification")}
            >
              <Bell />
            </TouchableOpacity>
          </View>
        </View>

        {/* Пошуковий рядок */}
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
          <Filter />
        </View>

        {/* Категорії */}
        <ScrollView horizontal style={styles.categories}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                activeCategory === category && styles.activeCategoryButton,
              ]}
              onPress={() => handleGenrePress(category)}
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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Що зараз читають</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={handleViewAllReadingPress}
          >
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            {displayedBooks.slice(0, 2).map((book) => (
              <TouchableOpacity
                key={book.id}
                style={styles.book}
                onPress={() => {
                  navigation.navigate("Book_details");
                  setActiveTab("Book_details");
                }}
              >
                <Image source={book.cover} style={styles.bookCover} />
                <Text style={styles.bookTitle}>{book.title}</Text>
                <Text style={styles.bookAuthor}>{book.author}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {displayedBooks.length > 2 && (
            <View style={styles.bookRow}>
              {displayedBooks.slice(2, 4).map((book) => (
                <TouchableOpacity
                  key={book.id}
                  style={styles.book}
                  onPress={() => {
                    navigation.navigate("Book_details");
                    setActiveTab("Book_details");
                  }}
                >
                  <Image source={book.cover} style={styles.bookCover} />
                  <Text style={styles.bookTitle}>{book.title}</Text>
                  <Text style={styles.bookAuthor}>{book.author}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          {displayedBooks.length === 0 && (
            <Text style={{ marginTop: 20, color: "#777" }}>
              Немає книг у цій категорії.
            </Text>
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Типи обговорень</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={handleViewAllDiscussionTypesPress}
          >
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Новинки</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book2.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Бестселери</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.bookRow}>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Класика</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book2.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Фентезі</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Топ обговорень</Text>
          <TouchableOpacity
            style={styles.viewAllButton}
            onPress={handleViewAllTopDiscussionsPress}
          >
            <Text style={styles.viewAllText}>Переглянути всі</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.booksContainer}>
          <View style={styles.bookRow}>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book4.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Обговорення 1</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.book}
              onPress={() => {
                navigation.navigate("Book_details");
                setActiveTab("Book_details");
              }}
            >
              <Image
                source={require("../assets/Home/book4.png")}
                style={styles.bookCover}
              />
              <Text style={styles.bookTitle}>Обговорення 2</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.navigationBar}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Image");
            setActiveTab("Image");
          }}
        >
          <Home style={styles.navIcon} />
          {activeTab === "Image" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("CollectionMain");
            setActiveTab("CollectionMain");
          }}
        >
          <List style={styles.navIcon} />
          {activeTab === "CollectionMain" && (
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
          {activeTab === "SavedScreen" && (
            <View style={[styles.activenavIcon]} />
          )}
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => {
            navigation.navigate("Product");
            setActiveTab("Product");
          }}
        >
          <Profile style={styles.navIcon} />
          {activeTab === "Product" && <View style={[styles.activenavIcon]} />}
        </TouchableOpacity>
      </View>
    </View>
    // </SafeAreaView>
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
    marginTop: 60,
  },
  content: {
    flex: 1,
    padding: width * 0.03,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.08,
    marginTop: height * 0.01,
  },
  userSection: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  userPhoto: {
    width: width * 0.12,
    height: width * 0.12,
    borderRadius: width * 0.06,
    marginRight: width * 0.02,
  },
  userInfo: {
    flex: 1,
  },
  backButton: {
    width: width * 0.12,
    height: width * 0.12,
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.06,
    marginLeft: width * 0.02,
    justifyContent: "center",
    alignItems: "center",
  },
  helloText: {
    fontSize: 18,
    color: "#888272",
    fontFamily: "Bitter-Light",
  },
  questionText: {
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: "#191815",
    fontFamily: "Albra-Bold",
  },
  icons: {
    flexDirection: "row",
  },
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.06,
    paddingHorizontal: width * 0.04,
    height: height * 0.06,
    top: -50,
  },
  searchText: {
    flex: 1,
    fontSize: PixelRatio.roundToNearestPixel(width * 0.04),
    color: "black",
    backgroundColor: "#E0DAC2",
    marginLeft: width * 0.02,
    fontFamily: "Bitter",
  },
  categories: {
    top: -25,
    marginBottom: height * 0.01,
  },
  categoryButton: {
    backgroundColor: "#E0DAC2",
    borderRadius: width * 0.05,
    paddingVertical: height * 0.01,
    paddingHorizontal: width * 0.03,
    marginRight: width * 0.02,
  },
  categoryText: {
    fontSize: 14,
    color: "#191815",
    fontFamily: "Albra-Medium",
  },
  activeCategoryButton: {
    backgroundColor: "#000",
  },
  activeCategoryText: {
    color: "#fff",
    fontFamily: "Bitter",
  },
  section: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: height * 0.01,
  },
  sectionTitle: {
    fontSize: 19,
    color: "#333",
    fontFamily: "Bitter-Medium",
  },
  viewAllButton: {
    padding: width * 0.01,
  },
  viewAllText: {
    fontSize: 15,
    color: "#E04D53",
    fontFamily: "Albra-Medium",
  },
  booksContainer: {
    alignItems: "center",
    marginBottom: height * 0.02,
  },
  bookRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 16,
  },
  book: {
    alignItems: "center",
  },
  bookCover: {
    width: 169,
    height: 248,
    borderRadius: width * 0.025,
    marginBottom: height * 0.01,
  },
  bookTitle: {
    fontSize: 16,
    color: "#333",
    width: width * 0.4,
    textAlign: "center",
    fontFamily: "Bitter-Bold",
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
    bottom: height * 0.04,
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

export default ImageScreen;
