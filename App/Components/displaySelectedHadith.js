import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Alert,
  Image,
  Share,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import RNFetchBlob from 'rn-fetch-blob';
import RNFS from 'react-native-fs';
import { useNavigation } from '@react-navigation/native';
import styles from './displaySelectedHadithStyle';

const BlurredImageOverlay = ({imageUrl, title}) => {
    const navigation =useNavigation();
  // console.log(imageUrl);
  const handleDownload = async () => {
    try {
      const {DownloadDirectoryPath} = RNFS;
      const path = `${DownloadDirectoryPath}/image.jpg`;
      const options = {
        fromUrl: imageUrl,
        toFile: path,
      };
      const response = await RNFS.downloadFile(options);
      if (response.statusCode === 200) {
        Alert.alert('Success', 'Image saved to gallery');
      } else {
        Alert.alert('Error', 'Failed to save image');
      }
    } catch (error) {
      console.error('Failed to save image:', error);
      Alert.alert('Error', 'Failed to save image');
    }
  };

  const handleShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this image',
        url: imageUrl,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Shared with activity type of result.activityType
          // console.log('Shared with activity type:', result.activityType);
        } else {
          // Shared
          console.log('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        // Dismissed
        console.log('Dismissed');
      }
    } catch (error) {
      console.error('Failed to share image:', error);
      Alert.alert('Error', 'Failed to share image');
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: imageUrl}}
        style={styles.imageBackground}
        blurRadius={10}>
        <View style={styles.overlay}>
          <View style={styles.imageContainer}>
          <TouchableOpacity style={styles.crossButton}  onPress={() => navigation.goBack()}>
                {/* onPress={onClose} */}
                <Ionicons name="close" size={24} color="white" />
              </TouchableOpacity>
              <Text style={styles.title}>{title}</Text>
             
            <Image source={{uri: imageUrl}} style={styles.originalImage} />
          </View>

          <View style={styles.actionsContainer}>
            <TouchableOpacity onPress={handleShare} style={styles.actionButton}>
              <Ionicons name="share-social" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleDownload}
              style={styles.actionButton}>
              <Ionicons name="download" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default BlurredImageOverlay;
