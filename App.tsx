import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from './Screens/LandingPage';  // Adjust the path as necessary
import LoginScreen from './Screens/LoginPage';      // Adjust the path as necessary
import SigninScreen from './Screens/SignInPage';    // Adjust the path as necessary
import HomeScreen from './Screens/HomePage';        // Adjust the path as necessary

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing" screenOptions={{
    headerShown: false, }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signin" component={SigninScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
