import {View, Text, FlatList} from 'react-native';
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
    'description',
    'utility',
    'common_diseases_and_pests',
  ];
  console.log(keys);
  // const data = [
  //   { id: '1', title: 'Item 1' },
  //   { id: '2', title: 'Item 2' },
  //   { id: '3', title: 'Item 3' },
  // ];

  return (
    <View>
      {keys.map(key => {
        return (
          <View key={key} className=" m-1 h-fit">
            <Text className="text-lg">
              <Text className="text-xl font-extrabold">{key}</Text>:{' '}
              {(data as any)[key]}
            </Text>
          </View>
        );
      })}
    </View>
  );
}
