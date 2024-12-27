// Style.js

import {StyleSheet, Touchable} from 'react-native';
import {helpers} from '../utils';
const Style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  subContainer: {
    flexDirection:"row",
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:helpers.normalize(15),
    marginBottom :helpers.normalize(15),

  },
  label: {
    color: 'black',
    fontSize: helpers.normalize(22),
    textAlign: 'left',
    fontWeight: 'bold',
  },
  touchableText: {
    color: 'blue',
    fontSize: helpers.normalize(12),
  },
});

export default Style;
