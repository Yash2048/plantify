import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';

export default function ResponsiveImage({image}: {image: string}) {
  const [aspectRatio, setAspectRatio] = useState(1);

  useEffect(() => {
    if (image !== '') {
      Image.getSize(
        image,
        (width, height) => setAspectRatio(width / height),
        error => console.error("Couldn't get image size", error),
      );
    }
  }, [image]);
  /*  */
  if (image === '') {
    return (
      <View className="m-auto self-center border-dashed rounded-3xl border-4 border-gray-300 h-[55%] w-[80%] ">
        <Text className="text-center m-auto text-gray-400 text-2xl px-8">
          Put Your Plant Leaf
          {'\n'}
          <Text className="font-black text-gray-600">HERE!!</Text>
        </Text>
      </View>
    );
  }

  return (
    <View className="m-auto self-center border-dotted rounded-xl border-4 border-gray-400  w-[80%] ">
      <Image
        source={{uri: image}}
        className="w-full rounded-xl"
        style={{aspectRatio}}
        resizeMode="contain"
      />
    </View>
  );
}
