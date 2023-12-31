import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

import apiKey from '../apiKey';

const FoodDetails = props => {
  const [foodDetails, setFoodDetails] = useState({});

  const getFoodDetailsById = async () => {
    try {
      const url = encodeURI("https://tasty.p.rapidapi.com/feeds/list" + props.foodName + "/")
      const response = await fetch(url, {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "tasty.p.rapidapi.com",
          "x-rapidapi-key": apiKey
        }
      })
      const json = await response.json();
      setFoodDetails(json.results);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getFoodDetailsById();
  }, []);

  return (
    <ScrollView>
      <Text style={styles.name}>{foodDetails.name}</Text>
      <View style={styles.details}>
        <Text>{foodDetails.plot}</Text>
        <Text style={styles.release}>release: {foodDetails.release}</Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  name: {
    margin: 16,
    fontSize: 24,
    textAlign: 'center',
  },
  details: {
    borderWidth: 1,
    padding: 16,
    margin: 8,
  },
  foodPicture: {
    width: '100%',
    height: 450
  },
  release: {
    fontStyle: 'italic',
    fontSize: 12,
    marginTop: 8,
    textAlign: 'right',
  }
});
export default FoodDetails;