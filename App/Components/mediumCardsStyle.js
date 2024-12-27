import {StyleSheet} from 'react-native';
import {helpers} from '../utils';
const mediumCardstyles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    width: helpers.wp(32),
    height: helpers.hp(16),
    borderRadius: helpers.normalize(25),
    marginRight: helpers.normalize(15),
    marginLeft: helpers.normalize(15),
  },
  title: {
    fontSize: helpers.normalize(16), // Example font size, adjust as needed
    color: 'white',
    textAlign: 'left',
    marginTop: 'auto', // Align the title to the bottom of the container
    marginLeft: helpers.normalize(4), // Adjust left margin as needed
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: helpers.normalize(2),
      height: helpers.normalize(2),
    },
    textShadowRadius: helpers.normalize(10),
    paddingHorizontal: helpers.normalize(10),
    paddingVertical:helpers.normalize(5)
  },
});
export default mediumCardstyles;
