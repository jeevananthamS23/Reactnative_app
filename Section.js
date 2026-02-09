import React from 'react';
import { SectionList, Text } from 'react-native';

const sections = [
  { title: 'Fruits', data: ['Apple','berry', 'Banana'] },
  { title: 'Veggies', data: ['Carrot', 'Potato'] }
];

export default function Section() {
  return (
    <SectionList
      sections={sections}
      renderItem={({ item }) => <Text>{item}</Text>}
      renderSectionHeader={({ section }) => <Text style={{ fontWeight: 'bold' }}>{section.title}</Text>}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}