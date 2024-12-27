import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {View, TouchableOpacity} from 'react-native';
import {Provider} from 'react-redux';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicon from 'react-native-vector-icons/Ionicons';
import store from '../Common/Store/configureStore';
import styles from './Style'; // Import styles from the styles file
// import {helpers} from '../utils';

import {StatusBar} from 'react-native';

// Import your screens
import Splash from '../Splash/Splash';
// import Dashboard from '../Dashboard/Dashboard';
import ThirdScreen from '../ThirdScreen/ThirdScreen';
import AllAhadith from '../AllAhadith/AllAhadith';
import ahadithByCategory from '../AhadithByCategory/AhadithByCategory';
import LastScreen from '../LastScreen/LastScreen';
import DisplayHadithById from '../DisplayHadithById/DisplayHadithById';
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <Provider store={store()}>
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{headerShown: false}}
          />

          {/* <Stack.Screen
            style={styles.DashboardTitleContainer}
            name="Dashboard"
            component={Dashboard}
            options={({navigation}) => ({
              headerTitle: 'Hadith of the Day',
              headerStyle: styles.dashBoardHeader,
              headerTitleStyle: styles.dashboardHeaderTitle,
              headerRight: () => (
                <View style={styles.dashBoardIconsContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      // Handle search icon press
                    }}
                    style={styles.dashBoardIconButton}>
                    <Ionicon name="search" size={helpers.normalize(24)} />
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      // Handle notification icon press
                    }}
                    style={styles.dashBoardIconButton}>
                    <Ionicon
                      name="notifications-outline"
                      size={helpers.normalize(24)}
                    />
                  </TouchableOpacity>
                </View>
              ),
            })}
          /> */}
          <Stack.Screen
            style={styles.thirdScreenTitleContainer}
            name="Third Screen"
            component={ThirdScreen}
            options={({navigation}) => ({
              headerTitle: 'Hadith  of the Day',
              headerStyle: styles.thirdScreenHeader,
              headerTitleStyle: styles.thirdScreenHeaderTitle,
              headerTitleAlign: 'center', // Center the header title
              // headerRight: () => (
              //   <View style={styles.thirdScreenIconsContainer}>
              //     <TouchableOpacity
              //       onPress={() => {
              //         // Handle search icon press
              //       }}
              //       style={styles.thirdScreenIconButton}>
              //       <Ionicon
              //         name="information-circle-outline"
              //         size={helpers.normalize(24)}
              //         color="black"
              //       />
              //     </TouchableOpacity>

              //     <TouchableOpacity
              //       onPress={() => {
              //         // Handle notification icon press
              //       }}
              //       style={styles.thirdScreenIconButton}>
              //       <Ionicon
              //         name="share-social-outline"
              //         size={helpers.normalize(24)}
              //         color="black"
              //       />
              //     </TouchableOpacity>
              //   </View>
              // ),
            })}
          />

          <Stack.Screen
            style={styles.thirdScreenHeader}
            name="Ahadith By category"
            component={ahadithByCategory}
            options={({navigation}) => ({
              headerTitle: 'Ahadith By category',
              headerStyle: styles.thirdScreenHeader,
              headerTitleStyle: styles.thirdScreenHeaderTitle,
              // headerRight: () => (
              //   <View style={styles.fourthScreenIconsContainer}>
              //     <TouchableOpacity
              //       onPress={() => {
              //         // Handle search icon press
              //       }}
              //       style={styles.fourthScreenIconButton}>
              //       <MaterialIcons
              //         name="zoom-out"
              //         size={helpers.normalize(24)}
              //         color="black"
              //       />
              //     </TouchableOpacity>
              //   </View>
              // ),
            })}
          />
          <Stack.Screen
            name="DisplayHadithById"
            component={DisplayHadithById}
            options={{headerShown: false}}
          />
          <Stack.Screen
            style={styles.thirdScreenHeader}
            name="Fourth Screen"
            component={AllAhadith}
            options={({navigation}) => ({
              headerTitle: 'All Ahadith',
              headerStyle: styles.thirdScreenHeader,
              headerTitleStyle: styles.thirdScreenHeaderTitle,
              // headerRight: () => (
              //   <View style={styles.fourthScreenIconsContainer}>
              //     <TouchableOpacity
              //       onPress={() => {
              //         // Handle search icon press
              //       }}
              //       style={styles.fourthScreenIconButton}>
              //       <MaterialIcons
              //         name="zoom-out"
              //         size={helpers.normalize(24)}
              //         color="black"
              //       />
              //     </TouchableOpacity>
              //   </View>
              // ),
            })}
          />
          <Stack.Screen
            style={styles.thirdScreenHeader}
            name="Last Screen"
            component={LastScreen}
            options={({navigation}) => ({
              headerTitle: 'All Categories',
              headerStyle: styles.thirdScreenHeader,
              headerTitleStyle: styles.thirdScreenHeaderTitle,
              // headerRight: () => (
              //   <View style={styles.fourthScreenIconsContainer}>
              //     <TouchableOpacity
              //       onPress={() => {
              //         // Handle search icon press
              //       }}
              //       style={styles.fourthScreenIconButton}>
              //       <MaterialIcons
              //         name="zoom-out"
              //         size={helpers.normalize(24)}
              //         color="black"
              //       />
              //     </TouchableOpacity>
              //   </View>
              // ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigation;
