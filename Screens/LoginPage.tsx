import React from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AppLogin({ navigation }) {  // Get navigation prop
  return (
    <SafeAreaView style={styles.container}>
      {/* Welcome Text */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.subHeader}>Sign in to continue</Text>
      </View>

      {/* Input fields for email and password */}
      <View style={styles.inputContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      </View>

      {/* Login Button */}
      <TouchableOpacity 
        style={styles.loginButton}
        onPress={() => navigation.navigate('Home')}  // Navigate to HomePage
      >
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Forgot Password Link */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* OR Divider */}
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

      {/* Sign Up Link */}
      <View style={styles.signUpContainer}>
        <Text style={styles.noAccountText}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.signUpText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  backArrow: {
    position: 'absolute',
    top: 10,
    left: 10,
  },
  backArrowText: {
    fontSize: 24,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff6666',
  },
  subHeader: {
    fontSize: 16,
    color: '#888',
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
    padding: 8,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#ff6666',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPassword: {
    color: '#888',
    textAlign: 'center',
    marginVertical: 10,
  },
  orContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
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
    marginVertical: 20,
  },
  socialIcon: {
    width: 50,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 10,
    marginHorizontal: 15,
  },
  signUpContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  noAccountText: {
    color: '#888',
  },
  signUpText: {
    color: '#ff6666',
    marginLeft: 5,
  },
});
