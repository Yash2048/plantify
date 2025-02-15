import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Input() {
  return (
    <View className="border-stone-700 border-[3px] my-[1rem] self-center flex-row w-[90%] h-[3.6rem] bg-slate-400 rounded-2xl">
      <View className="w-[80%] bg-green-500 rounded-l-xl">
        <View className="bg-white w-[95%] h-[80%] m-auto rounded-md  " />
      </View>
      <TouchableOpacity className="w-[20%] bg-green-800 rounded-r-xl rounded-r-s border-stone-500 border-l-2" />
    </View>
  );
}
