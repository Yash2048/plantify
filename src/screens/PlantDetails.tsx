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
  // console.log(keys);
  // const data = [
  //   { id: '1', title: 'Item 1' },
  //   { id: '2', title: 'Item 2' },
  //   { id: '3', title: 'Item 3' },
  // ];

  return (
    <ScrollView className="bg-slate-300">
      {keys.map(key => {
        if (key === 'description' || key === 'utility') {
          return (
            <View key={key} className=" m-1 bg-slate-500 rounded-lg p-1">
              <Text className="text-3xl self-center font-black  ">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </Text>
              <Text className="text-xl text-blue-200 font-extrabold text-center">
                {(data as any)[key]}
              </Text>
            </View>
          );
        } else {
          return (
            <View key={key} className=" m-1 bg-slate-500 rounded-lg p-1">
              <Text className="text-lg text-blue-200">
                <Text className="text-xl font-extrabold text-black">{key}</Text>
                : {(data as any)[key]}
              </Text>
            </View>
          );
        }
      })}
    </ScrollView>
  );
}
