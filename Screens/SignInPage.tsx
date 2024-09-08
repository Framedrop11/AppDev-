import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AppSignIn({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={styles.container}>

        {/* Greeting Header */}
        <View style={styles.header}>
          <Text style={styles.greeting}>Hi !</Text>
        </View>

        {/* Create Account Button */}
        <TouchableOpacity style={styles.createAccountButton}>
          <Text style={styles.createAccountText}>Create a new account</Text>
        </TouchableOpacity>

        {/* Input Fields */}
        <View style={styles.inputContainer}>
          <TextInput placeholder="Full Name" style={styles.input} />
          <TextInput placeholder="Email" style={styles.input} />
          <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
        </View>

        {/* Sign Up Button */}
        <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Forgot Password */}
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* OR Section */}
        <View style={styles.orContainer}>
          <View style={styles.line} />
          <Text style={styles.orText}>or</Text>
          <View style={styles.line} />
        </View>

        {/* Social Media Login */}
        <View style={styles.socialMediaContainer}>
          <View style={styles.socialIcon} />
          <View style={styles.socialIcon} />
          <View style={styles.socialIcon} />
        </View>

        {/* Login Redirect */}
        <View style={styles.loginRedirectContainer}>
          <Text style={styles.alreadyAccountText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.loginText} >Login</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 8,
  },
  greeting: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#ff6666',
  },
  createAccountButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20,
  },
  createAccountText: {
    fontSize: 16,
    color: '#333',
  },
  inputContainer: {
    paddingHorizontal: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 30,
    padding: 8,
    fontSize: 16,
  },
  signUpButton: {
    backgroundColor: '#ff6666',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 20,
    marginTop: 10
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    color: '#888',
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 30,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ccc',
  },
  orText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#888',
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 25,
  },
  socialIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  loginRedirectContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  alreadyAccountText: {
    color: '#888',
  },
  loginText: {
    color: '#3498DB',
    marginLeft: 5,
  },
});
