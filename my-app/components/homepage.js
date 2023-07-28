import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>This is the homepage content.</Text>
      </View>

      <View style={styles.footer}>
      <Image source={require('../assets/basket-icon.png')} style={styles.icon} />
      <Image source={require('../assets/house-icon-vector-illustration.jpg')} style={styles.icon} />
      <Image source={require('../assets/basket-icon.jpg')} style={styles.icon} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // Background color of the entire page
  },
  header: {
    padding: 20,
    backgroundColor: '#ffffff', // Header background color
    alignItems: 'center',
  },
  logo: {
    width: 150, 
    height: 150,
  },
  icon: {
    width: 50, 
    height: 50,
  },
  title: {
    fontSize: 18,
    color: '#333333',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentText: {
    fontSize: 16,
    color: '#555555',
  },
  footer: {
    padding: 20,
    backgroundColor: '#ffffff', // Footer background color
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  footerText: {
    fontSize: 14,
    color: '#999999',
  },
});

export default HomeScreen;



