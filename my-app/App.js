import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homepage';
import InformationScreen from './screens/information';
import LikesScreen from './screens/likes';
import BasketScreen from './screens/basket';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Information" component={InformationScreen} />
          <Stack.Screen name="Likes" component={LikesScreen} />
          <Stack.Screen name="Basket" component={BasketScreen} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

export default App;
