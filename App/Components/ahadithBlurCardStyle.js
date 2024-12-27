import { StyleSheet } from 'react-native';
import { helpers } from '../utils';
const styles = StyleSheet.create({
  card: {
    height: helpers.hp(20),
    width: helpers.wp(45),
    borderRadius: helpers.normalize(10),
    overflow: 'hidden',
    margin: helpers.normalize(10),
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  originalImage: {
    flex: 0.3,
    justifyContent: 'flex-end',
  },
  blurContent: {
    flex:1,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: helpers.normalize(16),
  },
  date: {
    color: 'white',
    fontSize: helpers.normalize(11),
  },
});

export default styles;
