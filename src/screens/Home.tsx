import {ScrollView, View} from 'react-native';
import Footer from '../components/Footer';
import ImageHere from '../components/ImageHere';
import {useState} from 'react';
import Menu from '../components/Menu';
import {Asset, ImagePickerResponse} from 'react-native-image-picker';

interface Image {
  uri: string;
}

export default function Home() {
  const [image, setImage] = useState<Asset | undefined>(undefined);
  const [uploading, setUploading] = useState(false);
  return (
    <>
      <ScrollView contentContainerClassName="flex-grow ">
        <ImageHere uploading={uploading} image={image} />
        {image && <Menu setUploading={setUploading} setImage={setImage} />}
      </ScrollView>
      <Footer setImage={setImage} />
    </>
  );
}
