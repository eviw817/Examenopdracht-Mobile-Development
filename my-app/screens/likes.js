import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const LikesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>Your likes</Text>
        </View>

        <ScrollView style={styles.content}>
            <View>
                <Text style={styles.item}>Je hebt nog niets geliked</Text>
            </View>
        </ScrollView>

        <View style={styles.footer}>
            <Image source={require('../assets/hearts-icons-vectors-illustrations.jpg')} style={styles.icon} />

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Image
                source={require('../assets/house-icon-vector-illustration.jpg')}
                style={styles.icon}
            />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
            <Image
                source={require('../assets/basket-icon.jpg')}
                style={styles.icon}
            />
            </TouchableOpacity>
      
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#f5f5f5', // Background color of the entire page
    },
    header: {
      backgroundColor: '#ffffff', // Header background color
      alignItems: 'center',
    },
    logo: {
      width: 100,
      height: 100,
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
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: 400,
    },
    item: {
      margin: 20,
      padding: 20,
      flexBasis: '82%',
      aspectRatio: 1,
      backgroundColor: '#ffffff',
    },
    contentText: {
      fontSize: 16,
      color: '#555555',
    },
    footer: {
      padding: 20,
      backgroundColor: '#ffffff', // Footer background color
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    footerText: {
      fontSize: 14,
      color: '#999999',
    },
  });
  

export default LikesScreen;

