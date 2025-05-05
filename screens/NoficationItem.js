import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const NotificationItem = ({
  profileImageSource,
  byUser,
  timeAgo,
  notificationText,
  actionButtonText,
  onActionButtonPress,
}) => (
  <View style={styles.notificationItem}>
    <Image source={profileImageSource} style={styles.profileImage} />
    <View style={styles.notificationContent}>
      <Text style={styles.byUserText}>
        By <Text style={styles.boldText}>{byUser}</Text> {timeAgo} тому
      </Text>
      <Text style={styles.notificationText}>{notificationText}</Text>
    </View>
    {actionButtonText && (
      <TouchableOpacity style={styles.actionButton} onPress={onActionButtonPress}>
        <Text style={styles.actionButtonText}>{actionButtonText}</Text>
      </TouchableOpacity>
    )}
  </View>
);

const NotificationScreen = () => {
    const navigation = useNavigation();
    const handleBackPress = () => {
        navigation.goBack();
      };
  return (
    <SafeAreaView style={styles.safeArea}>
      {/* Верхня панель */}
      <View style={styles.topBar}>
         <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
            <Feather name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Сповіщення</Text>
        <View style={{ width: 24 }} /> {/* Spacer */}
      </View>

      {/* Список сповіщень */}
      <ScrollView>
        <NotificationItem 
          profileImageSource={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
          byUser="Castiel Da'Neer"
          timeAgo="5 хв"
          notificationText="Ваше обговорення прокоментували..."
          actionButtonText="Відповісти"
          onActionButtonPress={() => console.log('Відповісти')}
        />
        <NotificationItem
          profileImageSource={{ uri: 'https://randomuser.me/api/portraits/women/2.jpg' }}
          byUser="Leslie Alexander"
          timeAgo="20 хв"
          notificationText="Leslie Alexander опублікувала(-в) нове обговорення..."
        />
        <NotificationItem
          profileImageSource={{ uri: 'https://randomuser.me/api/portraits/women/3.jpg' }}
          byUser="Brooklyn Simmons"
          timeAgo="23 хв"
          notificationText="Ваш коментар отримав вподобайку<3..."
        />
        <NotificationItem
          profileImageSource={{ uri: 'https://randomuser.me/api/portraits/men/4.jpg' }}
          byUser="Castiel Da'Neer"
          timeAgo="5 хв"
          notificationText="У Вас новий читач +1..."
          actionButtonText="Підписатися"
          onActionButtonPress={() => console.log('Підписатися')}
        />
        <NotificationItem
          profileImageSource={{ uri: 'https://randomuser.me/api/portraits/women/5.jpg' }}
          byUser="Jenny Wilson"
          timeAgo="30 хв"
          notificationText="Ваше обговорення отримало вподобайку<3..."
        />
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
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    backgroundColor: '#F1EFE4',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
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
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    right: 20,
    fontFamily: 'Bitter-Medium', 
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F1EFE4',
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  profileImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  notificationContent: {
    flex: 1,
  },
  byUserText: {
    fontSize: 14,
    color: '#555',
    fontFamily: 'Bitter', 
  },
  boldText: {
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'Bitter', 
  },
  notificationText: {
    fontSize: 16,
    color: '#333',
    marginTop: 4,
    fontFamily: 'Bitter', 
  },
  actionButton: {
    backgroundColor: '#191815',
    borderRadius: 555,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 12,
    fontFamily: 'Albra-Medium',
  },
  actionButtonText: {
    color: '#FDFDFC',
    fontSize: 14,
    fontFamily: 'Albra-Medium',
    },
});

export default NotificationScreen;