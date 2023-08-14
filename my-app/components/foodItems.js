import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const FoodItems = props => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => props.onSelectFood(props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity >

  );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 0.5,
  }
});
export default FoodItems;