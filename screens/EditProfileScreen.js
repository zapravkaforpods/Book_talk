import React, { useState } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditProfileScreen = () => {
  const [fullName, setFullName] = useState('Nata'); 
  const [gender, setGender] = useState('Жабка'); 
  const [status, setStatus] = useState('Читаю зараз'); 
  const [email, setEmail] = useState('dolores.chambers@example.com'); 
  const [password, setPassword] = useState('..........'); 

  return (
    <SafeAreaView style={styles.safeArea}>
    <ScrollView>
    <View style={styles.container}>
    <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
            <Text style={styles.backButtonText}>←</Text>
        </TouchableOpacity>
        <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>Редагування</Text>
        </View>
    </View>
      <View style={styles.profileImageContainer}>
        <Image source={require('../assets/Main/my photo.jpg')} style={styles.profileImage} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Повне ім'я</Text>
        <View style={styles.inputRow}>
          <Icon name="account" size={20} color="grey" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={fullName}
            onChangeText={setFullName}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Гендер</Text>
        <View style={styles.inputRow}>
          <Icon name="gender-male-female" size={20} color="grey" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
          
        </View>
      </View>

    
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Статус</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={gender}
            onChangeText={setGender}
          />
          <TouchableOpacity style={styles.infoButton}>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пошта</Text>
        <View style={styles.inputRow}>
          <Icon name="email" size={20} color="grey" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <View style={styles.inputRow}>
          <Icon name="lock" size={20} color="grey" style={styles.icon} />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
          />
          <TouchableOpacity style={styles.passwordVisibleButton}>
            <Icon name="eye-off" size={20} color="grey" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.changePasswordButton}>
          <Text style={styles.changePasswordText}>Змінити пароль?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.saveButton}>
        <Text style={styles.saveButtonText}>Зберегти</Text>
      </TouchableOpacity>
    </View>
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
    padding: 20,
},
header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    flex: 1, // Додано flex: 1 для розтягування header на всю ширину
},
backButton: {
    marginRight: 10,
    width: 48,
    height: 48,
    backgroundColor: '#E0DAC2',
    borderRadius: 555,
},
backButtonText: {
    fontSize: 24,
    top: 8,
    left: 14,
},
headerTitleContainer: {
    flex: 1, // Додано flex: 1 для розтягування контейнера на всю доступну ширину
   right: 30, // Вирівнювання по центру вертикально
},
headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center', // Вирівнювання по центру горизонтально
},
  profileImageContainer: {
    alignItems: 'center',
    marginBottom: 130,
   
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inputContainer: {
    marginBottom: 15,
    bottom: 80,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontFamily:'georgia',
  },
  input: {
    backgroundColor: '#E0DAC2',
    padding: 10,
    borderRadius: 5,
    flex: 1,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E0DAC2',
    borderRadius: 50,
    paddingHorizontal: 10,
    height: 52,
  },
  icon: {
    marginRight: 10,
  },
  changePasswordButton: {
    alignSelf: 'flex-end',
    marginTop: 5,
  },
  changePasswordText: {
    color: 'blue',
  },
  saveButton: {
    backgroundColor: 'black',
    padding: 15,
    borderRadius: 917,
    alignItems: 'center',
    top: -50,
  },
  saveButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  infoButton: {
    marginLeft: 10,
  },
  passwordVisibleButton: {
    marginLeft: 10,
  },
});

export default EditProfileScreen;