// Style.js

import {StyleSheet} from 'react-native';
import { helpers } from '../utils';

const Style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  logoContainer: {
    flex: 0.5,
    justifyContent: 'center',
  },
  logo: {
    flex: 0.6,
    alignSelf: 'center',
  },
  titleContainer: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: helpers.normalize(24),
    fontWeight: 'bold', // Make the text bold
    color: '#42278F', // Set the text color
    textAlign: 'center',
  },
  descriptionContainer: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  descriptionText:{
    fontSize: helpers.normalize(16),
    color: '#534D76', // Set the text color
    textAlign:"center",
    marginHorizontal:helpers.normalize(10)
  },

  signInContainer: {
    flex: 0.2,
    alignItems:"center",
    justifyContent:"flex-end",
  },
  button: {
    alignItems: 'center',
    padding: helpers.normalize(10),
    borderRadius: helpers.normalize(20),
    backgroundColor: '#A97DD4', 
    width: helpers.wp(70), 
    marginBottom:helpers.normalize(20)
  },
  buttonText:{
    color:"white",
  }
});

export default Style;
