import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import {API_URL} from '../../env.json';
export default function Menu({
  setImage,
  setUploading,
}: {
  setImage: (image: string | undefined) => void;
  setUploading: (uploading: boolean) => void;
}) {
  async function upload() {
    try {
      setUploading(true);
      const res = await fetch(API_URL);
      const data = await res.json();
      Alert.alert('title', data.message);
      setUploading(false);
    } catch (error: any) {
      Alert.alert('title', error.message);
    }
  }
  const cross = async () => {
    setImage(undefined);
    setUploading(false);
  };
  return (
    <View className="w-full h-16 flex-row justify-between">
      <TouchableOpacity id="cross" onPress={cross}>
        <Image
          className="max-h-full mx-5 my-auto"
          source={require('../assets/img/cross.webp')}
        />
      </TouchableOpacity>
      <TouchableOpacity id="check" onPress={upload}>
        <Image
          className="max-h-full mx-5 my-auto"
          source={require('../assets/img/check.webp')}
        />
      </TouchableOpacity>
    </View>
  );
}
