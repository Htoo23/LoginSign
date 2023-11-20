import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity,Modal } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import CodeField from 'react-native-confirmation-code-field';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [showVerificationModal, setShowVerificationModal] = useState(false);
  const [otp, setOtp] = useState('');
  const navigation = useNavigation();

  const handleSignUp = () => {
    
    console.log('Sign Up button pressed');
    setShowVerificationModal(true);
    
    
  };
  const handleVerify = () => {
    // Add your verification logic here
    console.log('Verifying OTP:', otp);
    // For example, navigate to another screen after verification
    navigation.navigate('Home');
    // Close the modal
    setShowVerificationModal(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={styles.inputContainer}>
        <Icon name="envelope" size={20} color="#888" style={styles.icon} />
        <TextInput style={styles.input} placeholder='Email Address' placeholderTextColor='#888' onChangeText={(text) => setEmail(text)} />
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
      <View style={styles.inputContainer}>
        <Icon name="lock" size={20} color="#888" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          onChangeText={(text) => setConfirmPassword(text)}
        />
      </View>

      <TouchableOpacity style={styles.microsoftButton} onPress={handleSignUp}>
        <Text style={styles.buttonText1}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.microsoftButton}>
        <Text style={styles.buttonText1}>Existing User? Login</Text>
      </TouchableOpacity>
      <Modal visible={showVerificationModal} transparent animationType="slide">
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPressOut={() => setShowVerificationModal(false)}
        />
        <View style={styles.modalContainer}>
          <Text style={styles.modalText}>Verify Your Email</Text>
          <Text style={styles.randomText}>Check your email for the verification code.</Text>
          <Text style={styles.verifyEmailText}>Verify Email:</Text>
          <Text style={styles.randomText}>A verification email has been sent to your registered email address. Please enter the OTP code from the email to verify your account.</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter OTP"
              placeholderTextColor="#888"
              keyboardType="numeric"
              onChangeText={(text) => setOtp(text)}
            />
          </View>
          <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
            <Text style={styles.buttonText}>Verify</Text>
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
  microsoftButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '80%',
    justifyContent: 'center',
  },
  buttonText1:{
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 35,
    marginRight: 25,
    width: '50%',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 120,
    marginRight: 15,
    width: '50%',
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'white',
    padding: 16,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  modalText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'black',
  },
  verifyEmailText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,

    color: 'black',
  },
  randomText: {
    fontSize: 14,
    color: 'black',
    marginBottom: 10,
  },
  verifyButton: {
    backgroundColor: 'black',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '100%',
    justifyContent: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});

export default Signup;
