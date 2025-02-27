import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {useData} from '../Context/DataContext';

export default function PlantDetails() {
  const {data} = useData();
  if (!data) {
    return;
  }
  const keys = [
    'scientific_name',
    'common_name',
    'family',
    'leaf_shape',
    'leaf_margin_edge',
    'leaf_division',
    'common_diseases_and_pests',
    'description',
    'utility',
  ];

  const textStyle = ' text-blue-200';
  const containerStyle = ' bg-gray-500';
  return (
    <ScrollView className="bg-slate-300">
      <View />
      {keys.map(key => {
        if (key === 'description' || key === 'utility') {
          return (
            <View key={key} className={' m-1 rounded-lg p-1' + containerStyle}>
              <Text className="text-3xl self-center font-black  ">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <Text
                className={'text-xl font-extrabold text-center' + textStyle}>
                {(data as any)[key]}
              </Text>
            </View>
          );
        } else {
          return (
            <View key={key} className={' m-1 rounded-lg p-1' + containerStyle}>
              <Text className={'text-lg font-semibold ' + textStyle}>
                <Text className="text-xl font-extrabold text-black">
                  {key}:{' '}
                </Text>
                {(data as any)[key]}
              </Text>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}
