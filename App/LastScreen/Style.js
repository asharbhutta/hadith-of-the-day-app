// Style.js

import {StyleSheet} from 'react-native';
import {helpers} from '../utils';
const Style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:helpers.normalize(10)
  },
  imageSlider: {
  },
  hadithList: {
    justifyContent:"flex-end",


  },
  categoriesList: {
    justifyContent:"flex-end",
    alignContent:"flex-end",

  },

  headerContainer: {    
    flexDirection:"row",
    justifyContent: "space-between",
    alignItems: "center",
    margin:helpers.normalize(10)

  },
  label: {
    color: 'black',
    fontSize: helpers.normalize(16),
    textAlign: 'left',
    marginLeft:helpers.normalize(10)
  },
  touchableText: {
    color: 'black',
    fontSize: helpers.normalize(14),
    marginRight:helpers.normalize(5)
  },
});

export default Style;
