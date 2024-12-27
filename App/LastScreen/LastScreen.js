import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import CategorySmallCard from '../Components/categoriesSmallCard';
import {useSelector, useDispatch} from 'react-redux';
import {getAhadithByCategory} from '../Common/Store/Actions/General/getAhadithByCategory';
import DisplaySelectedHadith from '../Components/displaySelectedHadith';
import {useNavigation} from '@react-navigation/native';

const Screen = () => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const {allAhadith} = useSelector(state => state?.main);
  const navigation = useNavigation(); // Use useNavigation hook to access navigation object
  const [isLoading, setLoading] = useState(false); // Local state to manage loading

  const handleOnPress = categoryId => {
    navigation.navigate('Ahadith By category', {
      categoryId: categoryId,
            });
    // setLoading(true); // Set loading to true when starting to fetch data

    // console.log("It's correct",categoryId)
    // dispatch(
    //   getAhadithByCategory(
    //     categoryId,
    //     // onSuccess callback
    //     response => {
    //       // Handle success case here
    //       console.log('Ahadith by Category fetched successfully');
    //       navigation.navigate('Ahadith By category', {
    //         ahadithByCategory: response,
    //       });
    //       setLoading(false); // Set loading to true when starting to fetch data
    //     },
    //     // onFailure callback
    //     error => {
    //       // Handle failure case here
    //       console.error('Error fetching Ahadith:', error);
    //     },
    //   ),
    // );
    // navigation?.navigate("Ahadith By category");
  };

  return (
    <View style={{flex: 1}}>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <FlatList
        data={allAhadith?.tags}
        renderItem={({item}) => (
          <CategorySmallCard
            imageSource={item.url}
            titleText={item.tag}
            onPress={() => handleOnPress(item.id)} // Invoke handleOnPress with categoryId
          />
        )}
        keyExtractor={item => item.id.toString()}
        numColumns={4}
      />
    </View>
  );
};

export default Screen;