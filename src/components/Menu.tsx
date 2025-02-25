import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Menu({
  setImage,
  setUploading,
}: {
  setImage: (image: string | undefined) => void;
  setUploading: (uploading: boolean) => void;
}) {
  const upload = async () => {
    setUploading(false);
  };
  return (
    <View className=" relative bottom-0 w-full h-[4rem] flex-row justify-between">
      <TouchableOpacity id="cross" onPress={upload}>
        <Image
          className="max-h-full max-w-full mx-5 my-auto"
          source={require('../assets/img/cross.webp')}
        />
      </TouchableOpacity>
      <TouchableOpacity id="check" onPress={() => setUploading(true)}>
        <Image
          className="max-h-full max-w-full mx-5 my-auto"
          source={require('../assets/img/check.webp')}
        />
      </TouchableOpacity>
    </View>
  );
}
