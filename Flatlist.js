import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';

export default function F1() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange","Gova"]);

  const addItem = () => {
    setItems([...items, items.length+1]);
  };

  return (
    <>
      <FlatList
        data={items}
        renderItem={({ item }) => <Text style={{ margin: 5 }}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
  
    </>
  );
}