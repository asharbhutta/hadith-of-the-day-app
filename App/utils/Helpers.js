import {Dimensions, PixelRatio, Platform} from 'react-native';
const helpers = {
  screen_width: () => {
    const dim = Dimensions.get('screen');
    return /*dim.width >= dim.height ? dim.height :*/ dim.width
  },
  screen_height: () => {
    const dim = Dimensions.get('screen');
    return /*dim.width >= dim.height ? dim.width :*/ dim.height
  },
  normalize: size => {
    const dim = Dimensions.get('screen');
    let scale = Dimensions.get('window').width / 375;
    if (dim.width >= dim.height) {
      scale = Dimensions.get('window').height / 375
    }
    if (scale > 2.0) {
      scale = 2.0;
    }
    const newSize = size * scale;
    return /*DeviceInfo.isTablet() ? (Math.round(PixelRatio.roundToNearestPixel(newSize))) * 0.7 : */ Math.round(PixelRatio.roundToNearestPixel(newSize));
  },
  wp: value => {
    return (Dimensions.get('window').width * value) / 100;
  },
  hp: value => {
    return (Dimensions.get('window').height * value) / 100;
  },
  isLandscape: () => {
    const dim = Dimensions.get('screen');
    return dim.width >= dim.height;
  },
  degreesToRadians: (degrees) => {
    return degrees * Math.PI / 180;
  },
  removeTags:(str) => {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
 
    // Regular expression to identify HTML tags in
    // the input string. Replacing the identified
    // HTML tag with a null string.
    return str.replace(/(<([^>]+)>)/ig, '');
}
  
};

export default helpers;
