import {View} from 'react-native';
import Footer from '../components/Footer';
import ImageHere from '../components/ImageHere';
import {useState} from 'react';

export default function Home() {
  const [image, setImage] = useState<string>('');
  return (
    <View className="flex-1 justify-end">
      <ImageHere image={image} />
      <Footer setImage={setImage} />
    </View>
  );
}
