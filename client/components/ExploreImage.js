import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from 'react-native';

const ExploreImage = ({ image }) => {
  return (
    <ImageBackground
      source={{ uri: image.urls.regular }}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1 * 1.7,
    resizeMode: 'cover',
  },
});

export default ExploreImage;
