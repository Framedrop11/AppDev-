import { SafeAreaView, ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AppLandingPage({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.bodyContainer}>
        
        {/* Logo Image */}
        <View style={styles.logoContainer}>
          <Image 
            source={{
              uri: 'https://images.pexels.com/photos/3311084/pexels-photo-3311084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}
            style={styles.logoImage}
          />
        </View>

        {/* Something Nice Image */}
        <View style={styles.somethingNiceContainer}>
          <Image
            source={{
              uri: 'https://images.pexels.com/photos/3476491/pexels-photo-3476491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            }}
            style={styles.somethingNiceImage}
          />
        </View>

        {/* Greeting and Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.greeting}>Hello!</Text>  
          <Text style={styles.description}>Unlock Your World, One Tap at a Time!</Text>
        </View>

        {/* Login and Sign Up Buttons */}
        <View style={styles.buttonContainer}>
          {/* Navigate to Login Page */}
          <TouchableOpacity 
            style={styles.loginButton}
            onPress={() => navigation.navigate('Login')} // Navigate to LoginPage
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          {/* Navigate to Sign Up Page */}
          <TouchableOpacity 
            style={styles.signUpButton}
            onPress={() => navigation.navigate('Signin')} // Navigate to SignInPage
          >
            <Text style={styles.buttonText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bodyContainer: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  logoContainer: {
    margin: 10,
  },
  logoImage: {
    height: 70,
    width: 100,
    borderRadius: 10,
    marginBottom: 100,
    backgroundColor: '#000'
  },
  somethingNiceContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  somethingNiceImage: {
    height: 180,
    width: 180,
    borderRadius: 90,
    backgroundColor: '#000'
  },
  descriptionContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ff6666',
  },
  description: {
    padding: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#888',
  },
  loginButton: {
    backgroundColor: '#3498DB',
    marginBottom: 30,
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  signUpButton: {
    backgroundColor: '#3498DB',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
