import React from 'react';
import { View, Text, Button } from 'react-native';

const InformationScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Welcome to the Information Screen!</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default InformationScreen;

