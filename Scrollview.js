import React, { useState } from 'react';
import { ScrollView, Text, Button } from 'react-native';

export default function Scroll1() {

  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

  const addItem = () => {
    setItems([...items, items.length+1]);
  };

  return (
    <ScrollView >
      {items.map((item, index) => (
        <Text key={index} style={{ margin: 5 }}>{item}</Text>
      ))}
      <Button title="Add Item" onPress={addItem} />
    </ScrollView>
  );
}