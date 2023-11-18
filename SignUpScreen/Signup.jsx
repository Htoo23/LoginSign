// Signup.jsx

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Signup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup</Text>
      {/* Add your signup content here */}
    </View>
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
  // Add more styles as needed
});

export default Signup;
