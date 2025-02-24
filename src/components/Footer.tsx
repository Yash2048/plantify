import {
  View,
  TouchableOpacity,
  Image,
  Platform,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFS from 'react-native-fs';

export default function Footer({
  setImage,
}: {
  setImage: (image: string) => void;
}) {
  const [images, setImages] = useState<(string | undefined)[]>([
    undefined,
    undefined,
  ]);
  const rotation = useSharedValue(0);

  const requestPermissionAndLoad = async () => {
    if (Platform.OS === 'android') {
      let permission =
        Platform.Version >= 33
          ? PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
          : PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE;

      const granted = await PermissionsAndroid.request(permission, {
        title: 'Access to Images',
        message: 'This app needs access to your images',
        buttonPositive: 'OK',
        buttonNegative: 'Cancel',
      });

      if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
        console.warn('Permission denied');
        return;
      }
    }
    loadImages();
  };

  const loadImages = async () => {
    try {
      const dirPath = RNFS.ExternalStorageDirectoryPath + '/DCIM/Camera';
      const files = await RNFS.readDir(dirPath);
      const imageFiles = files.filter(file => {
        const ext = file.name.split('.').pop()?.toLowerCase();
        return (
          file.isFile() && (ext === 'jpg' || ext === 'jpeg' || ext === 'png')
        );
      });

      imageFiles.sort(
        (a, b) =>
          (b.mtime ? b.mtime.getTime() : 0) - (a.mtime ? a.mtime.getTime() : 0),
      );

      setImages(imageFiles.slice(0, 2).map(file => 'file://' + file.path));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    requestPermissionAndLoad();
  }, []);

  useEffect(() => {
    rotation.value = withSpring(10);
  }, []);

  const selectImage = async () => {
    const response = await launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    });

    if (response.didCancel) {
      return;
    } else if (response.errorMessage) {
      Alert.alert('Image Selection Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      console.log(response.assets);
      if (response.assets[0].uri) {
        setImage(response.assets[0].uri);
      }
      // Alert.alert('Selected Image', response.assets[0].uri);
    }
  };

  const captureImage = async () => {
    const response = await launchCamera({
      mediaType: 'photo',
      cameraType: 'back',
    });
    if (response.didCancel) {
      return;
    } else if (response.errorMessage) {
      console.log('Camera Error', response.errorMessage);
      Alert.alert('Camera Error', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      console.log(response.assets);
      if (response.assets[0].uri) {
        setImage(response.assets[0].uri);
      }
    }
  };
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {translateY: 45},
      {rotate: `${rotation.value}deg`},
      {translateY: -45},
    ],
  }));

  return (
    <View className="flex items-center justify-center h-20 bg-gray-800">
      <View
        id="camera_button"
        className="flex justify-center items-center rounded-full w-[60px] h-[60px] border-gray-200 border-[2px]">
        <TouchableOpacity
          onPress={captureImage}
          className="bg-gray-400 rounded-full w-[50px] h-[50px]"
        />
      </View>
      <TouchableOpacity
        id="image_selector"
        onPress={selectImage}
        className="absolute right-9 aspect-square w-[45px]">
        <Image
          source={{uri: images[0]}}
          className="absolute bg-red-300 bg-opacity-50 rounded-md aspect-square w-[45px] z-10"
        />
        <Animated.Image
          source={{uri: images[1]}}
          className="bg-violet-300 bg-opacity-50 rounded-md aspect-square w-[45px] z-0"
          style={animatedStyle}
        />
      </TouchableOpacity>
    </View>
  );
}
