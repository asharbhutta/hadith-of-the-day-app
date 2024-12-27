import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import styles from './categoryHeaderCardStyle'; // Import the styles

const categoryHeaderCard = ({ imageSource, text }) => {
  return (
    <ImageBackground source={imageSource} style={styles.imageBackground}>
      <View style={styles.overlay}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </ImageBackground>
  );
};

export default categoryHeaderCard;
