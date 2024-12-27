import {StyleSheet} from 'react-native';
import {helpers} from '../utils';
helpers;
const Style = StyleSheet.create({
  
//DashBoard Styling
  dashboardTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  dashBoardIconsContainer: {
    flex:1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    
  },
  dashBoardIconButton: {
    flex:1/4,
    padding: helpers.normalize(10),
    justifyContent:"flex-end",
  },
  dashBoardHeader: {
    backgroundColor: '#FFFFFF', // Example background color
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
  },
 dashboardHeaderTitle: {
    fontSize: helpers.normalize(24),
    color: '#7168F9',
    padding: helpers.normalize(5),
  },



//Third Screeen

  thirdScreenTitleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  thirdScreenIconsContainer: {
    flex:1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    
  },
  thirdScreenIconButton: {
    flex:1/3,
    padding: helpers.normalize(10),
    justifyContent:"flex-end",
  },
  thirdScreenHeader: {
    backgroundColor: '#FFFFFF', // Example background color
    elevation: 0, // Remove shadow on Android
    shadowOpacity: 0, // Remove shadow on iOS
    
  },
  thirdScreenHeaderTitle: {
    fontSize: helpers.normalize(24),
    color: 'black',
    padding: helpers.normalize(5),

  },



  //Fourth Screen
 
  fourthScreenIconsContainer: {
    flex:1,
    flexDirection: 'row',
    alignContent: 'space-between',
    justifyContent: 'flex-end',
    
  },
  fourthScreenIconButton: {
    flex:1/4,
    padding: helpers.normalize(10),
    justifyContent:"flex-end",
  },
});

export default Style;
