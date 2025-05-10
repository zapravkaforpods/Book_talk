import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Pen from '../assets/Main/pen.svg';


const CollectionScreen = () => {
  const navigation = useNavigation();
  const [showDeleteButton, setShowDeleteButton] = useState(false);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleDeleteCollection = () => {
    Alert.alert(
      "Видалити колекцію",
      "Ви впевнені, що хочете видалити цю колекцію?",
      [
        { text: "Скасувати", style: "cancel" },
        {
          text: "Видалити",
          onPress: () => {
            navigation.goBack(); // Перехід на попередній екран
          },
        },
      ]
    );
  };

  const books = [
    {
      title: "Хірург",
      author: "Тесс Геррітсен",
      imageSource: require("../assets/Home/book.png"),
    },
    {
      title: "Із крові й попелу",
      author: "Дженніфер Л. Арментраут",
      imageSource: require("../assets/Home/book2.png"),
    },
    {
      title: "Відблиск",
      author: "Рейвен Кеннеді",
      imageSource: require("../assets/Home/book_s.png"),
    },
    {
      title: "Темніший колір магії",
      author: "В. Е. Шваб",
      imageSource: require("../assets/Home/book2.png"),
    },
  ];

  const handleEllipsisPress = () => {
    setShowDeleteButton(prev => !prev);
  };

  return (
    <View style={styles.container}>
      {/* Верхня панель */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}>
          <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Колекція 1</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={styles.headerButton}
            onPress={handleEllipsisPress}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.headerButton}>
            <Pen />
          </TouchableOpacity>
        </View>
      </View>

      {/* Кнопка видалення колекції */}
      {showDeleteButton && (
        <TouchableOpacity style={styles.deleteButton} onPress={handleDeleteCollection}>
          <Ionicons name="trash-outline" size={18} color="#FF6347" />
          <Text style={styles.deleteButtonText}>Видалити колекцію</Text>
        </TouchableOpacity>
      )}

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
    backgroundColor: "#F1EFE4",
    paddingTop: 50,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  backButton: {
    width: 48,
    height: 48,
    backgroundColor: "#E0DAC2",
    borderRadius: 555,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: "Bitter-Medium",
  },
  headerButton: {
    marginLeft: 16,
    backgroundColor: "#E0DAC2",
    borderRadius: 555,
    width: 48,
    height: 48,
    justifyContent: "center",
    alignItems: "center",
  },
  deleteButton: {
    flexDirection: "row",
    alignSelf: "flex-end",
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginHorizontal: 16,
    marginBottom: 16,
    width: "45%",
  },
  deleteButtonText: {
    color: "#FF6347",
    marginLeft: 8,
  },
  booksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center', // Додано для центрування
    paddingVertical: 15,
  },
  bookItem: {
    paddingHorizontal: 15,
    marginBottom: 16,
  },
  bookCover: {
    width: 170,
    height: 240,
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
