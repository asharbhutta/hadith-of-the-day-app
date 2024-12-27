import { StyleSheet } from 'react-native';
import { helpers } from '../utils';
const styles = StyleSheet.create({
  imageBackground: {
    width: helpers.wp(90),
    aspectRatio: 14 / 9,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:helpers.normalize(16),
    overflow: 'hidden', // Clip the content to the rounded corners
    marginTop:helpers.normalize(10)
  },
  overlay: {
    padding: 10,
  },
  text: {
    color: 'white',
    fontSize: helpers.normalize(16),
    textAlign: "left",
  },
  
});

export default styles;
