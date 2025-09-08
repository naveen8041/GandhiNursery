import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
export default function IdentifyScreen() {
  const [photo, setPhoto] = useState(null);
  const [diagnosis, setDiagnosis] = useState('');
  const handlePickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images });
    if (!result.cancelled) {
      setPhoto(result.uri);
      setDiagnosis('Healthy (sample result)');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Identify Plant</Text>
      <Button title="Pick Image" onPress={handlePickImage} />
      {photo && <Image source={{ uri: photo }} style={{ width: 200, height: 200, marginTop: 20 }} />}
      {diagnosis && <Text style={{ fontSize: 18, marginTop: 20 }}>Diagnosis: {diagnosis}</Text>}
    </View>
  );
}
