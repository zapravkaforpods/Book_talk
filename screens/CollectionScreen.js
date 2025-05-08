import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Або будь-які інші іконки, які вам потрібні
import { useNavigation } from "@react-navigation/native";

const CollectionScreen = () => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };
  const books = [
    {
      title: "Хірург",
      author: "Тесс Геррітсен",
      // imageSource: require("./assets/surgeon_cover.jpg"), // Замініть на фактичний шлях до зображення
    },
    {
      title: "Із крові й попелу",
      author: "Дженніфер Л. Арментраут",
      // imageSource: require("./assets/blood_and_ash_cover.jpg"), // Замініть на фактичний шлях до зображення
    },
    {
      title: "Відблиск",
      author: "Рейвен Кеннеді",
      // imageSource: require("./assets/reflection_cover.jpg"), // Замініть на фактичний шлях до зображення
    },
    {
      title: "Темніший колір магії",
      author: "В. Е. Шваб",
      // imageSource: require("./assets/darker_shade_of_magic_cover.jpg"), // Замініть на фактичний шлях до зображення
    },
    // Додайте більше книг за потреби
  ];

  return (
    <View style={styles.container}>
      {/* Верхня панель */}
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackPress}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Колекція 1</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Ionicons name="pencil-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Кнопка видалення колекції */}
      <TouchableOpacity style={styles.deleteButton}>
        <Ionicons name="trash-outline" size={18} color="#FF6347" />
        <Text style={styles.deleteButtonText}>Видалити колекцію</Text>
      </TouchableOpacity>

      {/* Список книг */}
      <ScrollView contentContainerStyle={styles.booksContainer}>
        {books.map((book, index) => (
          <View style={styles.bookItem} key={index}>
            <Image
              source={book.imageSource}
              style={styles.bookCover}
              resizeMode="cover"
            />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookAuthor}>{book.author}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50, // Врахуйте відступ для статус-бару
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerButton: {
    marginLeft: 16,
  },
  deleteButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 5,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  deleteButtonText: {
    color: "#FF6347",
    marginLeft: 8,
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: 8,
  },
  bookItem: {
    width: "50%",
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  bookCover: {
    width: "100%",
    height: 200, // Регулюйте висоту за потреби
    borderRadius: 8,
  },
  bookTitle: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  bookAuthor: {
    fontSize: 14,
    color: "gray",
  },
});

export default CollectionScreen;
