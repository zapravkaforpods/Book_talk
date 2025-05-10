import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeft, Plus } from "lucide-react-native";
import EmptyCol from "../assets/Main/for_colection.svg";

const { width, height } = Dimensions.get("window");

const ViewCollection = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    if (route.params?.collection) {
      setCollection(route.params.collection);
    }
  }, [route.params?.collection]);

  if (!collection) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.errorText}>Колекція не знайдена.</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <ArrowLeft stroke="black" width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.title}>{collection.title}</Text>
          <TouchableOpacity
            style={styles.plusButton}
            onPress={() => navigation.navigate("Creatcolection")}
          >
            <Plus stroke="black" width={24} height={24} />
          </TouchableOpacity>
        </View>

        {/* Empty Container */}
        <View style={styles.emptyContainer}>
          <EmptyCol width={width * 0.5} height={height * 0.3} />
          <Text style={styles.emptyText}>Поки відсутні збережені книги</Text>
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
    paddingHorizontal: width * 0.04,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height * 0.02,
    marginBottom: height * 0.03,
  },
  backButton: {
    padding: width * 0.02,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#191815",
    fontFamily: "Bitter-Bold",
  },
  plusButton: {
    padding: width * 0.02,
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  emptyText: {
    fontSize: 16,
    color: "#8E8E8E",
    marginTop: height * 0.02,
    fontFamily: "Bitter",
  },
  errorText: {
    fontSize: 18,
    color: "red",
    textAlign: "center",
  },
});

export default ViewCollection;
