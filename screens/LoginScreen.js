import React from 'react';
import { View, Text, Button } from 'react-native';
export default function LoginScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Login</Text>
      {/* Social login buttons can be added here using Expo AuthSession or Firebase */}
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Continue as Guest" onPress={() => navigation.navigate('PlantList')} />
    </View>
  );
}
