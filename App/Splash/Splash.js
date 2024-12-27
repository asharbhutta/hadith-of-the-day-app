import {React, useEffect} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Style from './Style'; 
import images from '../../assets/images';

import { mapStateToProps } from 'react-redux';
import {getAllHadith} from '../Common/Store/Actions/General/getAllHadith';
import { useSelector } from 'react-redux';
import {connect} from 'react-redux';

function Screen (props){
  const { allAhadith } = useSelector((state) => state?.main);

  useEffect(() => {
    // Fetch data when component mounts
    props.getAllHadith(
      response => {
        console.log("Navigated");
        props?.navigation.replace('Third Screen'); 

      },
      error => {
        console.log('Error:', error);
      }
    );
  }, [props?.navigation]);


  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.replace('Dashboard'); 
  //   }, 2000); 

  //   return () => clearTimeout(timer);
  // }, [navigation]);
  return (
    <View style={Style.mainContainer}>
      <View style={Style.logoContainer}>
        <Image source={images.logo} style={Style.logo} resizeMode="contain" />
      </View>

      <View style={Style.titleContainer}>
        <Text style={Style.titleText}>Hadith of The Day</Text>
      </View>

      <View style={Style.descriptionContainer}>
        <Text style={Style.descriptionText}>
          There has certainly been for you in the Messenger of Allah an
          excellent patern for anyone whose hope is in Allah and the Last Day
          and [who]remembers Allah often.(Al-Ahzab:21){' '}
        </Text>
      </View>
{/* 
      <View style={Style.signInContainer}>
        <TouchableOpacity style={Style.button} >
          <Text style={Style.buttonText}>G</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

// export default Screen;


const mapDispatchToProps = dispatch => {
  return {
    //  FetchingData:(status) => dispatch(FetchingData(status)),
    getAllHadith: (response, error) =>
      dispatch(getAllHadith(response, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);