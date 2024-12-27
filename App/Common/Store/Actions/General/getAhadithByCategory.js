import {GET_AHADITH_BY_CATEGORY} from './ActionTypes/ApiActionTypes';
import {REDUX_SAVE_HADITH_BY_CATEGORY} from './ActionTypes/ReduxActionTypes'
import constants from '../../../Constants';
export const getAhadithByCategory = (categoryId,onSuccess,onFailure) => {
  return{
        type:GET_AHADITH_BY_CATEGORY,
        payload:{
            apiUrl:constants.getPostByTag_url+categoryId,
            categoryId:categoryId,
            metaData:true,
            header:"application/json",
            requestType:'GET',
            reduxActionType:REDUX_SAVE_HADITH_BY_CATEGORY,
            onSuccess: onSuccess,
            onFailure: onFailure
        }
  }
}
