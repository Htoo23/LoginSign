import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const navigation = useNavigation();
  const handleLogin = () => {
    
    console.log(`Logging in with email: ${email} and password: ${password}`);
  };

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleCloseForgotPassword = () => {
    setShowForgotPassword(false);
  };

  const handleResetPassword = () => {
    
    console.log(`Resetting password for email: ${email}`);
  };

  const handleSignUp = () => {
   
    navigation.navigate('Signup');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Welcome from RealWorld!</Text>

      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <TouchableOpacity onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.microsoftButton} onPress={handleLogin}>
        <AntDesign name="windows" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Log in With Microsoft</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.microsoftButton} onPress={handleSignUp}>
        <AntDesign name="windows" size={20} color="white" style={styles.icon} />
        <Text style={styles.buttonText}>Sign Up With Microsoft</Text>
      </TouchableOpacity>

      
      <Modal visible={showForgotPassword} transparent animationType="slide">
        <TouchableWithoutFeedback onPress={handleCloseForgotPassword}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
        <View style={styles.modalContent}>
          <Text style={styles.forgotPasswordHeader}>Forgot Password</Text>
          <Text style={styles.randomText}>
            Enter your email below to receive a password reset link.
          </Text>
          <View style={styles.inputContainer}>
            <Icon name="envelope" size={20} color="#888" style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="#888"
              onChangeText={(text) => setEmail(text)}
            />
          </View>
          <TouchableOpacity style={styles.resetButton} onPress={handleResetPassword}>
            <Text style={styles.resetButtonText}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#888',
    borderBottomWidth: 1,
    color: '#333',
  },
  forgotPasswordText: {
    color: 'black',
    marginTop: 10,
    fontWeight: 'bold',
  },
  microsoftButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 5,
    marginRight:25,
    width:'50%',
  },
  
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  forgotPasswordHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  randomText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },
  resetButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  resetButtonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default Login;
