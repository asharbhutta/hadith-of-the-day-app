import { StyleSheet } from 'react-native';
import { helpers } from "../utils";
const styles = StyleSheet.create({
  container: {
    width: helpers.wp(98),
    height: helpers.hp(45), // Adjust as per your need
    // marginTop: helpers.normalize(10)
  },
  image: {
    width: helpers.wp(97),
    height: '100%',
    marginRight:helpers.normalize(5),
    marginLeft:helpers.normalize(7)
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#808080',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: '#FFFFFF',
  },
});

export default styles;
