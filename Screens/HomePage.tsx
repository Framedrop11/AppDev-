import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window'); // Get screen dimensions

export default function AppHome() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Header with Logo and Profile Circle */}
      <View style={styles.header}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/50x50?text=LOGO' }} 
          style={styles.logo} 
        />
        <TouchableOpacity style={styles.profileCircle}>
          <Text style={styles.profileText}>P</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabs}>
        {/* Scholarship Button */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Scholarships</Text>
        </TouchableOpacity>

        {/* Upload Documents Button */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Upload Documents</Text>
        </TouchableOpacity>

        {/* Verification Status Button */}
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>Verification Status</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Navigation Bar */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>H</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>N</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>A</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>S</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5', // Light background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fff',
    elevation: 4,
  },
  logo: {
    width: width * 0.1,  // 10% of the screen width
    height: width * 0.1, // 10% of the screen width to maintain aspect ratio
    resizeMode: 'contain',
  },
  profileCircle: {
    width: width * 0.1,  // 10% of the screen width
    height: width * 0.1, // 10% of the screen width to maintain a circular shape
    borderRadius: (width * 0.1) / 2,
    backgroundColor: '#ddd', // Gray background for the profile circle
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 18,
    color: '#333', // Dark gray for profile text
  },
  tabs: {
    flex: 1, // Take up the available space
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  card: {
    backgroundColor: '#fff', // White background for cards
    borderRadius: 10,
    margin: 10,
    padding: height * 0.03, // Dynamically set padding based on screen height
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
    height: height * 0.24,  // Card height is 15% of the screen height
    width: width * 0.90,    // Card width is 85% of the screen width
    alignSelf: 'center',    // Center the card horizontally
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF6B6B', // Accent color for card text
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: height * 0.08, // Navigation bar height is 8% of the screen height
    backgroundColor: '#fff',
    elevation: 4,
    borderTopWidth: 1,
    borderTopColor: '#ccc', // Light gray for the top border of navigation
  },
  navButton: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height * 0.06, // Button height is 6% of the screen height
    width: height * 0.06,  // Button width is equal to height for a circular button
    borderRadius: (height * 0.06) / 2,
    borderColor: '#ccc', // Light gray border for navigation buttons
    borderWidth: 2,
    backgroundColor: '#FF6B6B', // Accent color for navigation buttons
  },
  navText: {
    fontSize: 14,
    color: '#333', // Dark gray for navigation text
  },
});

