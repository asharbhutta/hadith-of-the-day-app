import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import styles from './ahadithBlurCardStyle';

const CardWithBlurBackground = ({ imageSource, titleText, dateText, onPress }) => {
  if (!imageSource) {
    return null;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={{ uri: imageSource }} style={styles.card}>
        <View style={styles.blurContainer}>
          <ImageBackground
            source={{ uri: imageSource }}
            style={styles.originalImage}
            blurRadius={5}
          >
            <View style={styles.blurContent}>
              <Text style={styles.title}>{titleText}</Text>
              {dateText !== null && <Text style={styles.date}>{dateText}</Text>}
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default CardWithBlurBackground;

// import React from 'react';
// import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
// import styles from './ahadithBlurCardStyle';

// const CardWithBlurBackground = ({imageSource, titleText, dateText,onPress }) => {
//   if (!imageSource) {
//     return null;
//   }

//   return (
//     <TouchableOpacity onPress={onPress}>
//       <ImageBackground source={{uri: imageSource}} style={styles.card}>
//         <View style={styles.blurContainer}>
//           <ImageBackground
//             source={{uri: imageSource}}
//             style={styles.originalImage}
//             blurRadius={5}>
//             <View style={styles.blurContent}>
//               <Text style={styles.title}>{titleText}</Text>
//               <Text style={styles.date}>{dateText}</Text>
//             </View>
//           </ImageBackground>
//         </View>
//       </ImageBackground>
//     </TouchableOpacity>
//   );
// };

// export default CardWithBlurBackground;
