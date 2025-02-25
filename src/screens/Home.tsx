import {ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import ImageHere from '../components/ImageHere';
import {useState} from 'react';
import Menu from '../components/Menu';

export default function Home() {
  const [image, setImage] = useState<string | undefined>(undefined);
  return (
    <>
      <ScrollView contentContainerClassName="flex-grow ">
        <ImageHere image={image} />
        {image && <Menu setImage={setImage} />}
      </ScrollView>
      <Footer setImage={setImage} />
    </>
  );
}
