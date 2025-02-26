import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';

import {useData} from '../Context/DataContext';
import {API_URL} from '../../env.json';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Asset} from 'react-native-image-picker';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

export default function Menu({
  image,
  setImage,
  setUploading,
}: {
  image: Asset | undefined;
  setImage: (image: Asset | undefined) => void;
  setUploading: (uploading: boolean) => void;
}) {
  const {setData, data} = useData();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  async function upload() {
    try {
      const form = new FormData();
      form.append('file', {
        uri: image?.uri,
        type: image?.type,
        name: image?.fileName,
      });

      setUploading(true);
      const res = await fetch(API_URL + '/upload', {
        method: 'POST',
        body: form,
      });
      const obj = await res.json();
      Alert.alert('title', obj.message);
      setData(obj);
      console.log(data);
      setUploading(false);
      navigation.navigate('Details');
    } catch (error: any) {
      Alert.alert('title', error.message);
      console.log(error);
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
