import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
export default function RegisterScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>
      <TextInput placeholder="Email" style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 8 }} />
      <TextInput placeholder="Password" secureTextEntry style={{ borderWidth: 1, width: 200, marginBottom: 10, padding: 8 }} />
      <Button title="Register" onPress={() => navigation.navigate('PlantList')} />
      <Button title="Back to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
