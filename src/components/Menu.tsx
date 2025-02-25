import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Menu({
  setImage,
}: {
  setImage: (image: string | undefined) => void;
}) {
  return (
    <View className=" relative bottom-0 w-full h-[4rem] flex-row justify-between">
      <TouchableOpacity onPress={() => setImage(undefined)}>
        <Image
          className="max-h-full max-w-full mx-5 my-auto"
          source={require('../assets/img/cross.webp')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          className="max-h-full max-w-full mx-5 my-auto"
          source={require('../assets/img/check.webp')}
        />
      </TouchableOpacity>
    </View>
  );
}
