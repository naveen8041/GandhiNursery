import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Button } from 'react-native';
import { plants } from '../sampleData';
export default function PlantListScreen({ navigation }) {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>My Plants</Text>
      <FlatList
        data={plants}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('PlantDetail', { plant: item })} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 12 }}>
            <Image source={item.image} style={{ width: 60, height: 60, marginRight: 12, borderRadius: 30 }} />
            <Text style={{ fontSize: 18 }}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Identify Plant" onPress={() => navigation.navigate('Identify')} />
    </View>
  );
}
