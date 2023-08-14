import React, { useState, useEffect} from 'react';
import { ScrollView, View, TouchableOpacity, Image, Text, TextInput, FlatList, StyleSheet } from 'react-native';

import apiKey from '../apiKey';
import foodItems from '../components/foodItems';
import foodDetails from '../components/foodDetails';

const HomeScreen = ({ navigation }) => {

  const [food, setFood] = useState([]);

  const getFoodDetailsById = async () => {
    try {
      const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '20',
          tags: 'under_30_minutes'
        },
        headers: {
          'X-RapidAPI-Key': 'fcce567a70msh557de0fc66a928bp164285jsnf151d9ccfc7b',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      const json = await response.json();
      console.log(json);
      setFood(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFoodDetailsById();//laad upcomming foods wanneer het scherm laadt
  }, []);

  let pic = {
    uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
  };
  
  return (
    
    <View style={styles.container}>

      <View style={styles.header}>
        <Image source={require('../assets/icon.png')} style={styles.logo} />
      </View>

      <TextInput
        placeholder="search food"
        style={styles.input}
        onChangeText={getFoodDetailsById}//geeft argument enteredText mee, denk aan de taskInputHandler uit de todo app.
      />
      
      <FlatList
        data={food}
        keyExtractor={item => item.id}//gebruik imdb_id als key voor de flatlist
        renderItem={({ item }) => (
          <FoodItem
            id={item.id}
            title={item.title}
            navigation={navigation}
            onSelectFood={(selectedId) => { navigation.navigate('Details', { foodId: selectedId }) }}
          />
        )}
      />


      <ScrollView style={styles.content}>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Information')}>
            <Image source={pic} style={[styles.item, {width: 193, height: 110, marginTop: 50}]} />
          </TouchableOpacity>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
          <Text style={styles.item}>dtfyghjkljghnfg</Text>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Likes')}>
          <Image source={require('../assets/hearts-icons-vectors-illustrations.jpg')} style={styles.icon} />
          <Text style={styles.footerText}>Your likes</Text>
        </TouchableOpacity>

        <View>
          <Image source={require('../assets/house-icon-vector-illustration.jpg')} style={styles.icon} />
          <Text style={styles.footerText}>Home</Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('Basket')}>
          <Image source={require('../assets/basket-icon.jpg')} style={styles.icon} />
          <Text style={styles.footerText}>Your Basket</Text>
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

