import React from 'react';
import { View, StyleSheet } from 'react-native';
import Login from './LoginScreen/Login';
import Signup from './SignUpScreen/Signup';


const App = () => {
  return (
    <View style={styles.container}>
     <Login/>
     <Signup/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Set a background color for the entire app if needed
  },
});

export default App;
