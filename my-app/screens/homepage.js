import React, { useState, useEffect} from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet, } from 'react-native';

import apiKey from '../apiKey';
import FoodItems from '../components/foodItems';
import { inlineStyles } from 'react-native-svg';

const HomeScreen = ({ navigation }) => {

  const [food, setFood] = useState([]);

  const getFoodDetailsById = async () => {
    try {
      const url = 'https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken%20soup';
      const response = await fetch("https://tasty.p.rapidapi.com/recipes/list",{
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': 'fcce567a70msh557de0fc66a928bp164285jsnf151d9ccfc7b',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      })

      const json = await response.json();
      setFood(json.results);
    } catch (error) {
      console.error(error);
    }
  }


  useEffect(() => {
    getFoodDetailsById();//laad upcomming foods wanneer het scherm laadt
  }, []);

  /*let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };*/
  
  //laad search results wanneer je in textinput typt
  const getFoodByTagsSearch = async (enteredText) => {//argument meegegeven door onChangeText
    try {
      if (enteredText.length > 3) {
        const url = encodeURI("https://tasty.p.rapidapi.com/tags/list" + enteredText + "/");
        console.log(url);
        const response = await fetch(url, {
          "method": "GET",
          "headers": {
            "x-rapidapi-host": "tasty.p.rapidapi.com",
            "x-rapidapi-key": apiKey
          }
        })
        const json = await response.json();
        console.log(json);
        setFood(json.results);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
      </View>

      <TextInput
        placeholder="Search for recipes"
        style={styles.input}
        onChangeText={getFoodByTagsSearch}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />
      
      <FlatList
        style={styles.flatlist}
        data={food}
        keyExtractor={item => item.id}//gebruik imdb_id als key voor de flatlist
        renderItem={({ item }) => (
          <FoodItems
            id={item.id}
            title={item.title}
            navigation={navigation}
            onSelectFood={(selectedId) => { navigation.navigate('Information', { foodId: selectedId }) }}
          />
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Likes')}>
          <Image source={require('../assets/hearts-icons-vectors-illustrations.jpg')} style={styles.icon} />
        </TouchableOpacity>

        <View>
          <Image source={require('../assets/house-icon-vector-illustration.jpg')} style={styles.icon} />
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
          <Image source={require('../assets/basket-icon.jpg')} style={styles.icon} />
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
  input: {
    borderWidth: 1,
    borderColor: 'orange',
    borderRadius: 8,
    padding: 10,
    margin: 20,
  },
  flatlist: {
    padding: 20,
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
    flexBasis: '80%',
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
    alignContent: 'center',
    fontSize: 14,
    color: '#999999',
  },
});

export default HomeScreen;

