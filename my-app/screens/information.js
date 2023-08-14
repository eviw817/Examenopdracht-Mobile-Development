import React from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import FoodDetails from '../components/foodDetails';

const LikesScreen = ({ navigation }) => {
  return (
    <View style={styles.screen}>
      <MovieDetails movieId={movieId} />
      <Button
        title="Go to Movies"
        onPress={() => navigation.navigate('Movies')}
      />
    </View>
  )

const styles = StyleSheet.create({
    container: {
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
  

export default InformationScreen;

