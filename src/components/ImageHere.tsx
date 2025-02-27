import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

export default function ResponsiveImage({
  image,
  uploading,
  setImage,
}: {
  image: Asset | undefined;
  uploading: boolean;
  setImage: (image: Asset | undefined) => void;
}) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (image && image.uri) {
      Image.getSize(
        image.uri,
        (width, height) => setAspectRatio(width / height),
        error => console.error("Couldn't get image size", error),
      );
    }
  }, [image]);
  /*  */

  if (!image) {
    const selectImage = async () => {
      const response = await launchImageLibrary({
        mediaType: 'photo',
        selectionLimit: 1,
      });

      if (response.didCancel) {
        return;
      } else if (response.errorMessage) {
        Alert.alert('Image Selection Error', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        if (response.assets[0].uri) {
          setImage(response.assets[0]);
        }
        // Alert.alert('Selected Image', response.assets[0].uri);
      }
    };

    return (
      <View className="m-auto self-center border-dashed rounded-3xl border-4 border-gray-300 h-[55%] w-[80%] ">
        <TouchableOpacity onPress={selectImage} className="self-center m-auto">
          <Text className="text-center self-center m-auto text-gray-400 text-2xl px-8">
            Put Your Plant
            {'\n'}
            <Text className="font-black text-gray-600">HERE!!</Text>
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="m-auto self-center border-solid rounded-xl border-4 border-gray-400  w-[80%] ">
      <ImageBackground
        source={{uri: image.uri}}
        imageClassName="flex  w-full  -z-10"
        style={{aspectRatio}}
        resizeMode="contain">
        {uploading && (
          <ActivityIndicator
            size={'large'}
            style={{transform: [{scale: 1.5}]}}
            className="self-center center m-auto"
          />
        )}
      </ImageBackground>
    </View>
  );
}
