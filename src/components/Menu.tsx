import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

import {useData} from '../Context/DataContext';
import {API_URL} from '../../env.json';

export default function Menu({
  setImage,
  setUploading,
}: {
  setImage: (image: string | undefined) => void;
  setUploading: (uploading: boolean) => void;
}) {
  const {setData, data} = useData();

  async function upload() {
    try {
      setUploading(true);
      const res = await fetch(API_URL);
      const obj = await res.json();
      Alert.alert('title', obj.message);
      setData(obj);
      console.log(data);
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
