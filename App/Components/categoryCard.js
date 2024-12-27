import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import style from './categoryCardStyle'; // Importing styles
import { helpers } from '../utils';

const CategoryCard = ({  imagePath, title, hadithCount }) => {
  return (
    <TouchableOpacity onPress={() => { /* Handle onPress */ }}>
      <View style={[style.container, { backgroundColor: "#DEDEDE" }]}>
        <View style={style.imageContainer}>
          <Image source={imagePath} style={style.image} />
        </View>
        <View style={style.titleContainer}>
          <Text style={style.titleText}>{title}</Text>
        </View>
        <View style={style.hadithCountContainer}>
          <Text style={style.hadithCountText}>{hadithCount} Hadith </Text>
          <AntDesign name="caretright" size={helpers.normalize(12)} color="white" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CategoryCard;
