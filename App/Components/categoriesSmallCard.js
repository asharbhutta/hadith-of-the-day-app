import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './categoriesSmallCardStyle'; // Corrected import path

const SmallCard = ({ imageSource, titleText, onPress }) => {
  if (!imageSource) {
    // Return null if imageSource is null
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={{ uri: imageSource }} style={styles.card}>
        <View style={styles.blurContainer}>
          <View style={styles.blurContent}>
            <Text style={styles.title}>{titleText}</Text>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default SmallCard;
