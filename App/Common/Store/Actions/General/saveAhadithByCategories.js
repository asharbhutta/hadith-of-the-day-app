import {GET_HADITH_BY_CATEGORY_ID} from './ActionTypes/ApiActionTypes';
import {REDUX_SAVE_HADITH_BY_CATEGORY_ID} from './ActionTypes/ReduxActionTypes'
export const saveAhadithByCategories = (categoryId,hadithByCategory) => {
  return{
        type:GET_HADITH_BY_CATEGORY_ID,
        payload:{
            data:{
              categoryId:categoryId,
              hadithByCategories:hadithByCategory
            },
            reduxActionType:REDUX_SAVE_HADITH_BY_CATEGORY_ID,
        }
  }
}
