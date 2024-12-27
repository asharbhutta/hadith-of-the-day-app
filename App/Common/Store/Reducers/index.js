import {combineReducers} from 'redux'
import mainReducer from './mainReducer'

const rootReducer = combineReducers({
      main:mainReducer,
})

// const rootReducer=(state,action)=>{
//     console.log("Action Type",action);
//     if(action.type==="REDUX_DESTROY_SESSION"){
//         state=undefined
//     }
//     return appReducer(state,action)
// }

export default rootReducer
