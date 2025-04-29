import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import MyIcon from '../assets/Main/logo.svg';
import AppleIcon from '../assets/Main/apple.svg';
import GoogleIcon from '../assets/Main/google.svg';
import FacebookIcon from '../assets/Main/facebook.svg';
import Login from '../assets/Main/login.svg';
import Password from '../assets/Main/password.svg';
import Email from '../assets/Main/email.svg';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const RegisterScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleRegisterSuccess = () => {
    navigation.navigate('Welcome');
  };

  const handleLoginLinkPress = () => {
    navigation.navigate('Login');
  };

  const handleSocialRegister = (platform) => {
    console.log(`Реєстрація через ${platform}`);
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
        <Text style={styles.backButtonText}>←</Text>
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <View style={styles.logoh}>
           <MyIcon width={100} height={100} />
        </View>
      </View>
      <Text style={styles.registerTitle}>Зареєструватися</Text>
      <Text style={styles.registerSubtitle}>Людина з гарною книгою в руках ніколи не може бути самотньою</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Повне Ім'я</Text>
       <View style={styles.inputWithIcon}>
                <Login style={styles.icon} resizeMode="contain" />
                 <TextInput
                   style={[styles.inputWithLeftIcon, styles.fontBitter]}
                   placeholder="Введіть Ваше ім'я чи пошту"
                    placeholderTextColor="#888272"
                 />
               </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пошта</Text>
         <View style={styles.inputWithIcon}>
                <Email style={styles.icon} resizeMode="contain" />
                <TextInput
                   style={[styles.inputWithLeftIcon, styles.fontBitter]}
                   placeholder="Введіть Ваше ім'я чи пошту"
                    placeholderTextColor="#888272"
                 />
        </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Пароль</Text>
        <View style={styles.inputWithIcon}>
               <Password style={styles.icon} resizeMode="contain" />
               <TextInput
                   style={[styles.inputWithLeftIcon, styles.fontBitter]}
                   placeholder="Введіть Ваше ім'я чи пошту"
                    placeholderTextColor="#888272"
                 />             </View>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Підтвердити Пароль</Text>
        <View style={styles.inputWithIcon}>
               <Password style={styles.icon} resizeMode="contain" />
               <TextInput
                   style={[styles.inputWithLeftIcon, styles.fontBitter]}
                   placeholder="Введіть Ваше ім'я чи пошту"
                    placeholderTextColor="#888272"
                 />             </View>
      </View>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegisterSuccess}>
        <Text style={styles.registerButtonText}>Зареєструватися</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <View style={styles.divider} />
        <Text style={styles.socialLoginText}>реєстрація за допомогою</Text>
        <View style={styles.socialButtons}>
          <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Apple')}>
                    <AppleIcon style={styles.socialIcon} />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Google')}>
                   <GoogleIcon style={styles.socialIcon} />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.socialButton} onPress={() => handleSocialRegister('Facebook')}>
                   <FacebookIcon style={styles.socialIcon} />
                   </TouchableOpacity>
        </View>
      </View>
      <View style={styles.haveAccountContainer}>
        <Text style={styles.haveAccountText}>Маєте аккаунт?</Text>
        <TouchableOpacity onPress={handleLoginLinkPress}>
          <Text style={styles.loginLink}>Увійти</Text>
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
  contentContainer: {
    flexGrow: 1,
    alignItems: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F1EFE4',
  },
  backButton: {
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
  backButtonText: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Bitter', // Додано шрифт
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoh: {
    backgroundColor: '#2E3B4E',
    width: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -15,
  },
  registerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
    fontFamily: 'Bitter', // Додано шрифт
  },
  registerSubtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#757575',
    marginBottom: 30,
    fontFamily: 'Bitter', // Додано шрифт
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Bitter', // Додано шрифт
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0DAC2',
    borderRadius: 555,
    paddingHorizontal: 15,
    backgroundColor: '#E0DAC2',
    height: 52,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  inputWithLeftIcon: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 14,
  },
  registerButton: {
    width: 380,
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Bitter', // Додано шрифт
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  socialIcon: {
    width: 100,
    height: 50,
    margin: 6,
  },
  socialLoginText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Bitter', // Додано шрифт
  },
  haveAccountContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 80,
    marginTop: 10,
  },
  haveAccountText: {
    fontSize: 16,
    color: '#757575',
    marginRight: 5,
    fontFamily: 'Bitter', // Додано шрифт
  },
  loginLink: {
    fontSize: 16,
    color: '#E04D53',
    fontWeight: 'bold',
    fontFamily: 'Bitter', // Додано шрифт
  },
  fontBitter: { // Додатковий стиль для інпутів
    fontFamily: 'Bitter',
  },
});

export default RegisterScreen;