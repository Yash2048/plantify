import {View, Image, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import axios from 'axios';

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
      if (!image?.uri) {
        Alert.alert('Error', 'No image selected');
        return;
      }

      const form = new FormData();
      form.append('image', {
        uri: image?.uri,
        type: image?.type,
        name: image?.fileName,
      });

      setUploading(true);
      const response = await axios.post(API_URL, form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: progressEvent => {
          if (progressEvent.loaded === progressEvent.total) {
            Alert.alert('Upload complete', 'Wait for the response.');
          }
        },
      });

      const obj = response.data;
      if (!obj || !obj.result || !obj.result[0]) {
        throw new Error('Invalid response from server');
      }

      setData(obj.result[0]);
      console.log(obj.result[0]);
      setUploading(false);
      navigation.navigate('Details');
    } catch (error: any) {
      let errorMessage = 'An unknown error occurred';

      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Server responded with an error status
          errorMessage = `Server error: ${error.response.status} - ${
            error.response.data?.message || 'Unknown server error'
          }`;
        } else if (error.request) {
          // Request was made but no response
          errorMessage = 'Network error. Please check your connection.';
        } else {
          errorMessage = error.message;
        }
      } else if (error instanceof Error) {
        errorMessage = error.message;
      }

      Alert.alert('Upload Failed', errorMessage);
      console.error('Upload error:', error);
      setUploading(false);
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
          source={require('../assets/img/close.png')}
        />
      </TouchableOpacity>
      <TouchableOpacity id="check" onPress={upload}>
        <Image
          className="max-h-full mx-5 my-auto"
          source={require('../assets/img/upload.png')}
        />
      </TouchableOpacity>
    </View>
  );
}
