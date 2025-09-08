
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import PlantListScreen from './screens/PlantListScreen';
import PlantDetailScreen from './screens/PlantDetailScreen';
import IdentifyScreen from './screens/IdentifyScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="PlantList" component={PlantListScreen} />
        <Stack.Screen name="PlantDetail" component={PlantDetailScreen} />
        <Stack.Screen name="Identify" component={IdentifyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
