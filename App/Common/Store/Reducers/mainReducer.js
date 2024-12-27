import {
  REDUX_SAVE_ALL_HADITH,
  REDUX_RELOAD_HOME,
  REDUX_SAVE_HADITH_BY_CATEGORY,
  REDUX_SAVE_HADITH_BY_CATEGORY_ID
} from '../Actions/General/ActionTypes/ReduxActionTypes'

const initialState = {
  isFetching: false,
  allAhadith: [],
  ahadithByCategory:{}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    
    case REDUX_RELOAD_HOME:
      return {
        ...state, 
        isFetching: action?.payload,
      };
      case REDUX_SAVE_ALL_HADITH:
        return {
          ...state, 

          allAhadith: action?.payload,
      };
      case REDUX_SAVE_HADITH_BY_CATEGORY:
        return {
          ...state, 

      };
      case REDUX_SAVE_HADITH_BY_CATEGORY_ID:
        // console.log(action?.payload?.data);
        return {
          ...state, 
          ahadithByCategory: 
          {
            ...state.ahadithByCategory,
            [action?.payload?.data.categoryId] :action?.payload?.data.hadithByCategories
          }
      };
      
    default:
      return state
  }

}


export default reducer
