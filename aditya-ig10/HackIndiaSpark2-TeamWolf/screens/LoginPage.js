import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = () => {
    
    navigation.navigate('AuthDashboard');
  };

  return (
    <View style={styles.container}>
      <ImageBackground 
        source={require('../components/back.png')}
        style={styles.leftPanel}
      >
        <View style={styles.logoContainer}>
          <Ionicons name="hexagon-outline" size={40} color="white" />
        </View>
      </ImageBackground>
      <View style={styles.rightPanel}>
        <Text style={styles.title}>We are <Text style={styles.boldText}>NexusChain</Text></Text>
        <Text style={styles.subtitle}>Welcome back! Log in to your{'\n'}account to view today's{'\n'}clients:</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput 
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        
        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <TextInput 
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </View>
        
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.basicVersionText}>Basic version</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: '100%',
    backgroundColor: 'white',
  },
  leftPanel: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundsize: 'fit',
    padding: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    overflow: 'hidden',
  },
  logoContainer: {
    marginTop: 20,
  },
  rightPanel: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 10,
    color: '#333',
  },
  boldText: {
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 30,
    lineHeight: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    marginBottom: 20,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#A388EE',
    paddingVertical: 12,
    borderRadius: 0,
    alignItems: 'center',
    marginTop: 20,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  basicVersionText: {
    textAlign: 'center',
    marginTop: 20,
    color: '#999',
    fontSize: 14,
  },
});

export default LoginPage;