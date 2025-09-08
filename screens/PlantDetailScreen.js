import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { medicines } from '../sampleData';
export default function PlantDetailScreen({ route }) {
  const { plant } = route.params;
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 8 }}>{plant.name}</Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Health: {plant.health}</Text>
      <Text style={{ fontSize: 18, marginBottom: 8 }}>Care Schedule:</Text>
      <FlatList
        data={plant.schedule}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <Text style={{ fontSize: 16, marginBottom: 4 }}>{item.type}: {item.time} {item.medicineType ? `(${item.medicineType})` : ''}</Text>
        )}
      />
      <Text style={{ fontSize: 18, marginTop: 16 }}>Suggested Medicines:</Text>
      <Text style={{ fontSize: 16, marginTop: 8 }}>Organic:</Text>
      {medicines.organic.map((med, i) => (
        <Text key={i} style={{ fontSize: 15 }}>{med.name} - {med.for}</Text>
      ))}
      <Text style={{ fontSize: 16, marginTop: 8 }}>Non-Organic:</Text>
      {medicines.nonOrganic.map((med, i) => (
        <Text key={i} style={{ fontSize: 15 }}>{med.name} - {med.for}</Text>
      ))}
    </View>
  );
}
