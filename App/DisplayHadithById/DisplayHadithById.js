import {React} from 'react';
import {View, } from 'react-native';
import DisplaySelectedHadith from '../Components/displaySelectedHadith';

function Screen(props) {
  const { item } = props.route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      {/* Render the BlurredImageOverlay component */}
      <DisplaySelectedHadith
        imageUrl={
        item.url
        }
        title={item.title}
      />
    </View>
  );
}


export default Screen;
