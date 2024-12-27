import {GET_ALL_HADITH} from './ActionTypes/ApiActionTypes';
import {REDUX_SAVE_ALL_HADITH} from './ActionTypes/ReduxActionTypes'
import constants from '../../../Constants';
export const getAllHadith = (onSuccess,onFailure) => {
  console.log("Ahadith fetch");

  return{
        type:GET_ALL_HADITH,
        payload:{
            apiUrl:constants.all_data_api_url,
            metaData:true,
            header:"application/json",
            requestType:'GET',
            reduxActionType:REDUX_SAVE_ALL_HADITH,
            onSuccess: onSuccess,
            onFailure: onFailure
        }
  }
}
