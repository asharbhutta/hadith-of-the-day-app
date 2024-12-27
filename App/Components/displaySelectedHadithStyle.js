// BlurredImageOverlayStyles.js

import { StyleSheet } from 'react-native';
import { helpers } from '../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'space-between',
    padding: helpers.normalize(20),
  },
  title: {
    fontSize: helpers.normalize(24),
    fontWeight: 'bold',
    color: 'white',
  },
  imageContainer: {
    alignItems: 'flex-start',
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: helpers.normalize(20),
  },
  actionButton: {
    padding: helpers.normalize(10),
  },
  originalImage: {
    width:helpers.wp(90) , // Adjust width as needed
    height:helpers.hp(55) , // Adjust height as needed
    resizeMode:'contain', // Adjust resizeMode as needed
  },
  crossButton: {
    flexDirection:"row",
    justifyContent:'space-between',
    alignItems: 'center',
    padding: helpers.normalize(10),
    marginLeft: 'auto', // Push closeButton to the right corner
  },
});

export default styles;
