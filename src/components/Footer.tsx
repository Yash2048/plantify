import {View, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

export default function Footer() {
  const rotation = useSharedValue(0);

  useEffect(() => {
    rotation.value = withSpring(10); // Apply rotation when component mounts
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateY: 45}, // Move origin to bottom-left corner
        {rotate: `${rotation.value}deg`}, // Rotate 60 degrees
        {translateY: -45}, // Move it back after rotation
      ],
    };
  });

  return (
    <View className="flex items-center justify-center h-20 bg-gray-800">
      {/* Center Circle Button */}
      <View className="flex justify-center items-center rounded-full w-[60px] h-[60px] border-gray-200 border-[2px]">
        <TouchableOpacity className="bg-gray-400 rounded-full w-[50px] h-[50px]" />
      </View>

      {/* Square Buttons */}
      <TouchableOpacity className="absolute right-9 aspect-square w-[45px]">
        {/* Static Red Square */}
        <View className="absolute left-0 bottom-0 bg-red-300 rounded-md aspect-square w-[45px] z-10" />

        {/* Tilted Violet Square */}
        <Animated.View
          className="absolute left-0 bottom-0 bg-violet-300 rounded-md aspect-square w-[45px] z-0"
          style={animatedStyle}
        />
      </TouchableOpacity>
    </View>
  );
}
