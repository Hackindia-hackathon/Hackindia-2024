import React, { useRef, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet, Animated } from 'react-native';
import CustomButton from '../components/CustomButton';
import { Login } from '@mui/icons-material';

const FadeInView = ({ delay, children, style }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(10)).current;
  useEffect(() => {
    Animated.sequence([
      Animated.delay(delay),
      Animated.parallel([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 0,
          duration: 800,
          useNativeDriver: true,
        }),
      ]),
    ]).start();
  }, [delay, fadeAnim, translateY]);

  return (
    <Animated.View
      style={[
        style,
        {
          opacity: fadeAnim,
          transform: [{ translateY }],
        },
      ]}
    >
      {children}
    </Animated.View>
  );
};

const StartupPage = ({ navigation }) => {
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const handleGetStarted = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../components/back.png')}
      style={styles.backgroundImage}
    >
      <Animated.View style={[styles.overlay, { opacity: fadeAnim }]}>
        <View style={styles.container}>
          <View style={styles.header}>
            <FadeInView delay={0}>
              <Text style={styles.logo}>NexusChain 🔗</Text>
            </FadeInView>
            <FadeInView delay={200} style={styles.nav}>
              {['Work', 'Services', 'Pricing', 'About', 'Contact'].map((item, index) => (
                <Text key={item} style={styles.navItem}>
                  {item}
                </Text>
              ))}
            </FadeInView>
          </View>
          
          <View style={styles.content}>
            <FadeInView delay={400}>
              <Text style={styles.title}>DESIGN &{'\n'}THINKING</Text>
            </FadeInView>
            <FadeInView delay={600}>
              <Text style={styles.description}>
                We're a digital studio based in South Florida that's blazing a new trail in the industry, with bold designs that push the boundaries of what's possible, and cutting-edge functionality that makes design solutions stand out from the crowd.
              </Text>
            </FadeInView>
          </View>

          <FadeInView delay={800} style={styles.buttonContainer}>
            <CustomButton
              title="Get Started"
              onPress={handleGetStarted}
            />
          </FadeInView>
        </View>
      </Animated.View>
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
  },
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginStart: 15,
  },
  nav: {
    flexDirection: 'row',
  },
  navItem: {
    color: 'white',
    marginLeft: 20,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 72,
    fontWeight: 'bold',
    marginStart: 15,
    marginBottom: 20,
  },
  description: {
    color: 'white',
    fontSize: 18,
    marginStart: 15,
    maxWidth: 600,
  },
  buttonContainer: {
    marginTop: 40,
  },
});

export default StartupPage;