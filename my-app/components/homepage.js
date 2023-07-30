import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
      </View>

      <ScrollView style={styles.content}>
        <View>
          <Image source={pic} style={[styles.item, {width: 193, height: 110, marginTop: 50}]} />
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Likes')}>
          <Image
            source={require('../assets/hearts-icons-vectors-illustrations.jpg')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <Image source={require('../assets/house-icon-vector-illustration.jpg')} style={styles.icon} />

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
  content: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400,
  },
  item: {
    margin: 20,
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

export default HomeScreen;

