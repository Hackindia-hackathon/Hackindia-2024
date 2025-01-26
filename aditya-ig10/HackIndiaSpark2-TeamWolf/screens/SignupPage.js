import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SignupPage = ({ onSwitchToLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const slideAnim = useRef(new Animated.Value(0)).current;

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Signup attempted with:', email, password);
  };

  const handleSwitchToLogin = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      onSwitchToLogin();
    });
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ translateX: slideAnim }] }]}>
      <View style={styles.leftPanel}>
        <Text style={styles.welcomeText}>Welcome to signup</Text>
        <Text style={styles.haveAccountText}>Already have an account?</Text>
        <TouchableOpacity style={styles.loginButton} onPress={handleSwitchToLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rightPanel}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 2,
  },
  leftPanel: {
    width: width,
    backgroundColor: '#f77',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightPanel: {
    width: width,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  signupButton: {
    backgroundColor: '#f77',
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  haveAccountText: {
    color: '#fff',
    marginBottom: 10,
  },
  loginButton: {
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 20,
  },
  loginButtonText: {
    color: '#fff',
  },
});

export default SignupPage;