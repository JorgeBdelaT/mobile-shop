import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ProductsList from '../screens/ProductsList';
import ProductDetails from '../screens/ProductDetails';

const Stack = createStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ProductsList"
        screenOptions={{
          headerBackTitleVisible: false,
          headerTintColor: 'black',
        }}
      >
        <Stack.Screen
          name="ProductsList"
          component={ProductsList}
          options={{ headerTitle: 'Products List' }}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{ headerTitle: 'Product Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
