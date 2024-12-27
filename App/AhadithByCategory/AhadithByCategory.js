import {React, useState, useEffect} from 'react';
import {FlatList, ActivityIndicator, View} from 'react-native';
import AhadithBlurCard from '../Components/ahadithBlurCard';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {getAhadithByCategory} from '../Common/Store/Actions/General/getAhadithByCategory';
import {saveAhadithByCategories} from '../Common/Store/Actions/General/saveAhadithByCategories';

const Screen = ({route}) => {
  const categoryId = route.params?.categoryId;
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const [isLoading, setLoading] = useState(true); // Local state to manage loading
  const navigation = useNavigation(); // Use useNavigation hook to access navigation object
  const [newAhadithByCategory, setNewAhadithByCategory] = useState([]);
  const {ahadithByCategory} = useSelector(state => state?.main);

  useEffect(() => {
    if (ahadithByCategory[categoryId]) {
      setLoading(false);
      setNewAhadithByCategory(ahadithByCategory[categoryId]);
    } else {
      dispatch(
        getAhadithByCategory(
          categoryId,
          // onSuccess callback
          response => {
            // Set loading to true when starting to fetch data
            setNewAhadithByCategory(response.items);
            dispatch(saveAhadithByCategories(categoryId, response.items));
            setLoading(false);
          },
          // onFailure callback
          error => {
            // Handle failure case here
            console.error('Error fetching Ahadith:', error);
            setLoading(false); // Set loading to false after failure
          },
        ),
      );
    }
  }, [categoryId]);

  const handleCardPress = item => {
    navigation.navigate('DisplayHadithById', {item});
  };

  const renderCard = ({item}) => (
    <AhadithBlurCard
      imageSource={item.url}
      titleText={item.title}
      dateText={item.scheduled_at}
      onPress={() => handleCardPress(item)}
    />
  );
  if (!ahadithByCategory || ahadithByCategory.length === 0) {
    // console.log("$$$$$$$$$$$$$$     Yes     $$$$$$$$$$$")

    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      {isLoading && (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      {!isLoading && ( // Render only when loading is false
        <FlatList
          data={newAhadithByCategory}
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      )}
    </View>
  );
};

export default Screen;
