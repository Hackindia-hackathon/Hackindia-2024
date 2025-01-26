// AuthPage.jsx
import React, { useRef, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const FadeInView = ({ delay, children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      delay: delay,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim, delay]);

  return (
    <Animated.View style={[style, { opacity: fadeAnim }]}>
      {children}
    </Animated.View>
  );
};

const AuthPage = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../components/back.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.overlay}>
        <FadeInView delay={200} style={styles.container}>
          <FadeInView delay={400} style={styles.card}>
            <Text style={styles.cardTitle}>Login</Text>
            <Text style={styles.cardDescription}>
              Already have an account? Sign in to access your profile and continue your journey.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </FadeInView>
          <FadeInView delay={600} style={styles.card}>
            <Text style={styles.cardTitle}>Sign Up</Text>
            <Text style={styles.cardDescription}>
              New here? Create an account to start your adventure with us and unlock exclusive features.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
          </FadeInView>
        </FadeInView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 20,
    width: '45%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AuthPage;