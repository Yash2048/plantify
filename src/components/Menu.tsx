import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Menu() {
  return (
    <View className=" relative bottom-0 w-full h-[4rem] flex-row justify-between">
      <TouchableOpacity>
        <Image
          className="max-h-full max-w-full mx-3 my-auto"
          source={require('../assets/img/check.webp')}
        />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image
          className="max-h-full max-w-full mx-3 my-auto"
          source={require('../assets/img/cross.webp')}
        />
      </TouchableOpacity>
    </View>
  );
}
