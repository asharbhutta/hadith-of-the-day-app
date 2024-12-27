import { StyleSheet } from 'react-native';
import { helpers } from '../utils';
const categoryCardStyle = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
    padding:helpers.normalize(10),
    borderRadius: helpers.normalize(12),
    width:helpers.wp(90),
    marginVertical: helpers.normalize(5),
  },
  imageContainer: {
    flex: 0.2,
  },
  titleContainer: {
    flex: 0.58,
  },
  hadithCountContainer: {
    flex: 0.22, 
    // paddingHorizontal: helpers.normalize(16),
    flexDirection: 'row', // Align items in a row
    justifyContent:"space-between",
  },
  titleText: {
    color: 'black',
    fontSize: helpers.normalize(18),
    fontWeight: 'bold',

  },
  hadithCountText: {
    color: 'black',
    fontSize: helpers.normalize(10),

  },
});

export default categoryCardStyle;
