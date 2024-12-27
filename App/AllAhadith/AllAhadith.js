import React, { useEffect,useState } from 'react';
import { View, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import AhadithBlurCard from '../Components/ahadithBlurCard';
import { getAllHadith } from '../Common/Store/Actions/General/getAllHadith';
import { useNavigation } from '@react-navigation/native';

const Screen = () => {
  // console.log(allAhadith,"Hello");
  const dispatch = useDispatch();
  const {allAhadith} = useSelector((state) => state?.main);
  const [isLoading, setLoading] = useState(true);
  const navigation = useNavigation(); // Use useNavigation hook to access navigation object

  useEffect(() => {
    dispatch(getAllHadith())
      setLoading(false); // Set loading to false after data is fetched
  }, [dispatch]);

  // console.log('allHadith:', allAhadith);

  if (isLoading || !allAhadith) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  const handleCardPress = (item) => {
    console.log('Pressed card with id:', item.id);
    navigation.navigate('DisplayHadithById', { item });

  };
  const renderCard = ({ item }) => (
    <AhadithBlurCard
      imageSource={item.thumb_url}
      titleText={item.title}
      dateText={item.posted_at}
      onPress={() => handleCardPress(item)}
    />
  );

  return (
    <FlatList
      data={allAhadith.hadith}
      renderItem={renderCard}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2}
    />
  );
};

export default Screen;