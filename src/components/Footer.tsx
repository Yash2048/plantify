import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Footer() {
  return (
    <View className="flex items-center justify-center h-20 bg-gray-800  ">
      <View className="flex justify-center items-center rounded-full w-[60px] h-[60px] border-gray-200 border-[2px]">
        <TouchableOpacity className="bg-gray-400 rounded-full w-[50px] h-[50px]" />
      </View>
      <TouchableOpacity className="absolute right-9 aspect-square w-[45px]  ">
        <View className="absolute left-0 bottom-0 bg-red-300 rounded-md aspect-square w-[45px] z-10" />
        <View className="absolute left-0 bottom-0 bg-violet-300 rounded-md aspect-square w-[45px] rotate-[60deg] z-0" />
        {/* <View className="absolute right-5 bg-gray-300 rounded-md aspect-square w-[45px]" /> */}
      </TouchableOpacity>
    </View>
  );
}
