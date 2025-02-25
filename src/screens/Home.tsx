import {ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import ImageHere from '../components/ImageHere';
import {useState} from 'react';
import Menu from '../components/Menu';

export default function Home() {
  const [image, setImage] = useState<string>('');
  return (
    <>
      <ScrollView contentContainerClassName="flex-grow ">
        <ImageHere image={image} />
        <Menu />
      </ScrollView>
      <Footer setImage={setImage} />
    </>
  );
}
