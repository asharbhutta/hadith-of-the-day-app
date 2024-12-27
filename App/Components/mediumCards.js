import React from 'react';
import { ImageBackground, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './mediumCardsStyle';

const ImageWithTitleCard = ({ data, onPress }) => {

  const renderCard = ({ item }) => {
    if (!item.url) {
      return null; // If thumb_url is null, don't render anything
    }

    return (
      <TouchableOpacity onPress={() =>onPress(item)}>
        <ImageBackground source={{ uri: item.url }} style={styles.card}>
          <Text style={styles.title}>{item.title || item.tag}</Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderCard}
      keyExtractor={(item, index) => index.toString()}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default ImageWithTitleCard;
// import React from 'react';
// import {ImageBackground, Text, FlatList, TouchableOpacity} from 'react-native';
// import styles from './mediumCardsStyle';

// const ImageWithTitleCard = ({data}, onPress) => {
//   const renderCard = ({item}) => {
//     if (!item.url) {
//       return null; // If thumb_url is null, don't render anything
//     }

//     return (
//       <TouchableOpacity onPress={() => onPress(item)}>
//         <ImageBackground source={{uri: item.url}} style={styles.card}>
//           <Text style={styles.title}>{item.title || item.tag}</Text>
//         </ImageBackground>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <FlatList
//       data={data}
//       renderItem={renderCard}
//       keyExtractor={(item, index) => index.toString()}
//       horizontal={true}
//       showsHorizontalScrollIndicator={false}
      
//     />
//   );
// };

// export default ImageWithTitleCard;
