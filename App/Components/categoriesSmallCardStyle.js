import { StyleSheet } from 'react-native';
import { helpers } from '../utils';
const styles = StyleSheet.create({
  card: {
    height: helpers.hp(9),
    width: helpers.wp(20),
    borderRadius: helpers.normalize(10),
    overflow: 'hidden',
    margin: helpers.normalize(10),
  },
  blurContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom:helpers.normalize(7)

  },
  blurContent: {
    flex:0.25,
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',

  },
  title: {
    color: 'white',
    fontSize: helpers.normalize(11),
    fontWeight: 'ultralight', // Set the font weight to a lighter value

  },
});

export default styles;
