import React from 'react';
import { Text, Button, FlatList } from 'react-native';
import { useQuery } from '@apollo/client';

import Center from '../components/Center';
import { GET_ALL_PRODUCTS } from '../graphql/requests';

const ProductsList = ({ navigation }) => {
  const { data, loading, error } = useQuery(GET_ALL_PRODUCTS);

  if (loading) return null;

  if (error) {
    console.log('error', error);
    return (
      <Button
        title="Product Details"
        onPress={() => {
          navigation.navigate('ProductDetails');
        }}
      />
    );
  }

  return (
    <Center>
      <FlatList
        data={data.products}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </Center>
  );
};

export default ProductsList;
