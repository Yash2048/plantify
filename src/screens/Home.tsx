import {View, Text, StyleSheet, TextInput} from 'react-native';
import Footer from '../components/Footer';
import ImageHere from '../components/ImageHere';
import Input from '../components/Input';

export default function Home() {
  return (
    <View className="flex-1 justify-end">
      <ImageHere />
      <Input />
      <Footer />
    </View>
  );
}
