import React, { useState, useEffect, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import styles from './imageSliderStyle';

const { width } = Dimensions.get('window');

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const renderItem = ({ item }) => (
    <Image source={{ uri: item }} style={styles.image} resizeMode="cover" />
  );

  const renderPaginationDots = () => (
    <View style={styles.paginationContainer}>
      {images.map((_, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.paginationDot,
            index === currentIndex ? styles.activeDot : null,
          ]}
          onPress={() => scrollToIndex(index)}
        />
      ))}
    </View>
  );

  const scrollToIndex = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ index, animated: true });
    }
    setCurrentIndex(index);
  };

  useEffect(() => {
    // Reset the currentIndex to 0 when the images array changes
    setCurrentIndex(0);

    // Automatically move to the next image after 5 seconds
    const timer = setInterval(() => {
      if (currentIndex < images.length - 1) {
        scrollToIndex(currentIndex + 1);
      } else {
        scrollToIndex(0);
      }
    }, 5000);

    // Clear the timer on component unmount
    return () => clearInterval(timer);
  }, [images]);

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={width}
        decelerationRate="fast"
        pagingEnabled
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        onMomentumScrollEnd={event => {
          // Calculate the new index based on the scroll position
          const newIndex = Math.round(event.nativeEvent.contentOffset.x / width);
          setCurrentIndex(newIndex);
        }}
      />
      {renderPaginationDots()}
    </View>
  );
};

export default ImageSlider;
