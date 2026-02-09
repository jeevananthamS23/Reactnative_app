import React, { useState } from 'react';
import { VirtualizedList, Text } from 'react-native';

export default function Vrl() {
  const [items, setItems] = useState(["Apple", "Banana", "Orange"]);

 
  return (
    <>
      <VirtualizedList
        data={items}
        getItem={(data, index) => data[index]}
        getItemCount={data => data.length}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      
      />

    </>
  );
}