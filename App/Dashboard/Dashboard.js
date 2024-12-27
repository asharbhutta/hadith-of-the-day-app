import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import images from '../../assets/images';
import {connect} from 'react-redux';
import CategoryCard from '../Components/categoryCard';
import CategoryHeader from '../Components/categoryHeaderCard';
import styles from './Style';
import {FetchingData} from '../Common/Store/Actions/General/fetchingData';
import {getAllHadith} from '../Common/Store/Actions/General/getAllHadith';
import { useSelector } from 'react-redux';
const categories = [
  {
    title: 'Quran',
    icon: images.Quran,
    hadithCount: 234,
    backgroundColor: '#FFDDEE',
  },
  {
    title: 'Azan',
    icon: images.Azan,
    hadithCount: 234,
    backgroundColor: '#EEDDFF',
  },
  {
    title: 'Namaz',
    icon: images.Namaz,
    hadithCount: 234,
    backgroundColor: '#DDEEFF',
  },
  {
    title: 'Dua',
    icon: images.Dua,
    hadithCount: 234,
    backgroundColor: '#E4F8D0',
  },
  {
    title: 'Tasbeeh',
    icon: images.Tasbeeh,
    hadithCount: 234,
    backgroundColor: '#FFEEDD',
  },
];
function Screen(props) {
  const { allAhadith } = useSelector((state) => state?.main);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data when component mounts
    props.getAllHadith(
      response => {
        setLoading(false); // Set loading to false when response is received
      },
      error => {
        console.log('Error:', error);
        // Handle error here
        setLoading(false); // Set loading to false even on error
      }
    );
  }, [props?.isLoading]);




  const renderLoadingIndicator = () => (
    <View style={styles.loadingContainer}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text>Loading...</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <CategoryCard
      title={item.title}
      imagePath={item.icon}
      hadithCount={item.hadithCount}
    />
  );
  const listHeader = () => {
    return (
      <View>
        <CategoryHeader
          imageSource={images.dashboardHeaderCardImage}
          text="HE WHO EATS OF THE PLANTS (GARLIC) SHOULD NOT APPROACH US AND PRAY ALONG WITH US."
        />
        {!isLoading && (
          <View style={styles.subContainer}>
            <Text style={styles.label}>Categories</Text>
            <TouchableOpacity
              onPress={() => {
                // props.FetchingData(true);
                props?.navigation.navigate('Third Screen'); // Navigate to the ThirdScreen
              }}>
              <Text style={styles.touchableText}>See all</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        renderLoadingIndicator() // Render loading indicator if isLoading is true
      ) : (
        <FlatList
          data={allAhadith}
          renderItem={renderItem}
          keyExtractor={item => item.title}
          ListHeaderComponent={listHeader}
        />
      )}
    </View>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.mainReducer?.isFetching ?? false,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    //  FetchingData:(status) => dispatch(FetchingData(status)),
    getAllHadith: (response, error) =>
      dispatch(getAllHadith(response, error)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Screen);
