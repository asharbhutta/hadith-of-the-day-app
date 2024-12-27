import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SectionList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getAllHadith} from '../Common/Store/Actions/General/getAllHadith';
import ImageSlider from '../Components/imageSlider';
import styles from './Style';
import ImageWithTitleCard from '../Components/mediumCards';

const Screen = ({navigation}) => {
  const dispatch = useDispatch(); // Initialize useDispatch hook
  const {allAhadith} = useSelector(state => state?.main);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    // Fetch data when the component mounts
    if (allAhadith) {
      setLoading(false); // If allAhadith has some value, set isLoading to false
    } else {
      dispatch(getAllHadith(
        response => {
          console.log("All Ahadith are fetching again") 
        },
        error => {
          console.log('Error:', error);
        }
      ));
      setLoading(false);
    }
  }, [allAhadith]);

  if (isLoading || !allAhadith || !allAhadith.hadith || !allAhadith.tags) {
    // If data is loading or any of the required properties are undefined, show loading indicator
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  const renderCard = ({item, onPress}) => (
    <ImageWithTitleCard
      data={item}
      onPress={(item) => {
        // console.log("Fine",item.id); // Log the id of the pressed item
        navigation.navigate('DisplayHadithById', { item });

      }}
    />
  );

  const categoriesListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.label}>Categories</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Last Screen')}>
        <Text style={styles.touchableText}>See all</Text>
      </TouchableOpacity>
    </View>
  );

  const allHadithListHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.label}>All Ahadith</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Fourth Screen')}>
        <Text style={styles.touchableText}>See all</Text>
      </TouchableOpacity>
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.categoriesList}>
        <SectionList
          sections={[
            {title: 'All Hadith', data: [allAhadith.hadith.slice(8, 15)]},
            {title: 'Categories', data: [allAhadith.tags.slice(0, 15)]},
          ]}
          renderSectionHeader={({section: {title}}) =>
            title === 'All Hadith'
              ? allHadithListHeader()
              : categoriesListHeader()
          }
          renderItem={renderCard}
          keyExtractor={(item, index) => index.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.sectionListContent}
          ListHeaderComponent={
            <View style={styles.imageSlider}>
              <ImageSlider
                images={allAhadith.hadith.slice(0, 7).map(item => item.url)}
              />
            </View>
          }
        />
      </View>
    </View>
  );
};

export default Screen;
