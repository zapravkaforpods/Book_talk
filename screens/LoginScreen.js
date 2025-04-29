import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyIcon from '../assets/Main/logo.svg';
import AppleIcon from '../assets/Main/apple.svg';
import GoogleIcon from '../assets/Main/google.svg';
import FacebookIcon from '../assets/Main/facebook.svg';
import { useNavigation } from '@react-navigation/native';
import Login from '../assets/Main/login.svg';
import Password from '../assets/Main/password.svg';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleRegisterLinkPress = () => {
    navigation.navigate('Register');
  };

  const handleLoginPress = () => {
    navigation.navigate('Welcome');
  };

  const handleForgotPasswordPress = () => {
    console.log('Забули пароль?');
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
      <Text style={styles.loginTitle}>Увійти</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Повне Ім'я/Пошта</Text>
        <View style={styles.inputWithIcon}>
          <Login style={styles.icon} resizeMode="contain" />
          <TextInput
            style={styles.inputWithLeftIcon}
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
            style={styles.inputWithLeftIcon}
            placeholder="Введіть Ваш пароль"
            placeholderTextColor="#888272"
          />
        </View>     
      </View>
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPasswordPress}>
        <Text style={styles.forgotPasswordText}>Забули пароль?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton} onPress={handleLoginPress}>
        <Text style={styles.loginButtonText}>Увійти</Text>
      </TouchableOpacity>
      <View style={styles.socialLoginContainer}>
        <View style={styles.divider} />
        <Text style={styles.socialLoginText}>увійти за допомогою</Text>
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
      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Не зареєстровані?</Text>
        <TouchableOpacity onPress={handleRegisterLinkPress}>
          <Text style={styles.registerLink}>Реєстрація</Text>
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
    fontFamily: 'Bitter-Regular', // Додано шрифт
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logoh: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: -15,
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: 'black',
    fontFamily: 'Bitter-Bold', // Додано шрифт
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
    fontFamily: 'Bitter-Regular', // Додано шрифт
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
    fontFamily: 'Bitter-Regular', // Додано шрифт
  },
  forgotPasswordButton: {
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
  forgotPasswordText: {
    fontSize: 16,
    color: '#E04D53',
    fontFamily: 'Bitter-Bold', // Додано шрифт
  },
  loginButton: {
    width: 380,
    backgroundColor: '#191815',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: -10,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Bitter-Bold', // Додано шрифт
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 15,
  },
  socialLoginText: {
    fontSize: 16,
    color: '#757575',
    textAlign: 'center',
    marginBottom: 15,
    fontFamily: 'Bitter-Regular', // Додано шрифт
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
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  registerText: {
    fontSize: 16,
    color: '#757575',
    marginRight: 5,
    fontFamily: 'Bitter-Regular', 
  },
  registerLink: {
    fontSize: 16,
    color: '#E04D53',
    fontWeight: 'bold',
    fontFamily: 'Bitter-Bold', 
  },
});

export default LoginScreen;