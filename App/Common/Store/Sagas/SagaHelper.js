import { put } from 'redux-saga/effects';
import axios from 'axios';
import { extractJsonFromResponse, isValidJson } from '../../../utils/helperFunctions'; // Adjust the path to match your file structure

function* fetchData(action) {
  try {
    // Make GET request to the API endpoint
    // console.log("*********MY API***********",action.payload.apiUrl)
    const response = yield axios.get(action.payload.apiUrl);

    // Convert response data to JSON
    const responseData = extractJsonFromResponse(response.data);

    // Check if the extracted data is valid JSON
    if (isValidJson(responseData)) {
      const jsonData = JSON.parse(responseData);

      // Dispatch Redux action with the response data
      
      yield put({
        type: action.payload.reduxActionType,
        payload: jsonData, // Use the parsed JSON data
      });


      // Call success callback function if provided
      if (action.payload.onSuccess) {
        action.payload.onSuccess(jsonData);
      }
    } else {
      // Handle invalid JSON response
      console.error('Invalid JSON response:', responseData);

      // Dispatch Redux action for failure
      yield put({
        type: 'API_REQUEST_FAILURE',
        error: 'Invalid JSON response',
      });

      // Call failure callback function if provided
      if (action.payload.onFailure) {
        action.payload.onFailure('Invalid JSON response');
      }
    }
  } catch (error) {
    // Handle API request error
    console.error('API request error:', error);

    // Dispatch Redux action for failure
    yield put({
      type: 'API_REQUEST_FAILURE',
      error: error.message,
    });

    // Call failure callback function if provided
    if (action.payload.onFailure) {
      action.payload.onFailure(error.message);
    }
  }
}

export default fetchData;


// import { select, put } from "redux-saga/effects";
// import constants from "../../Constants";
// const DEBUG_LOG_API = true;
// const DEBUG_LOG_API_REQUEST = true;
// const DEBUG_LOG_API_RAW_RESPONSE = true;
// const DEBUG_LOG_API_JSON_RESPONSE = true;

// const debug_log = (should_log, text, variable) => {
//     if (should_log) {
//         console.log(`*** text *** ${text} ************`);
//         console.log(`*** variable *** ${variable} ************`);
//     }
// };

// function* fetchData(action) {
//     let all_state = yield select();
//     // console.log("all state" ,all_state?.LOGINREDUCER?.loginData?.payload?.accessToken)

//     try {
//         let completeUrl = new URL(action.payload.apiUrl, base_url).toString();
//         console.log("completeUrl  " ,completeUrl)
//         debug_log(DEBUG_LOG_API, `${action.payload.requestType} API URL`, completeUrl);

//         const request = {
//             headers: {
//                 "Content-Type": action.payload.header,
//             },
//             method: action.payload.requestType,
//         };

//         if (action.payload.metaData) {
//             request.headers.Authorization ="Bearer " + all_state?.LOGINREDUCER?.loginData?.payload?.accessToken;
//                 // "Bearer " + all_state?.authReducer?.userInfo.accessToken;

//         }

//         if (action.payload.requestType !== "GET") {
//             request.body =
//                 action.payload.header === "application/x-www-form-urlencoded"
//                     ? action.payload.body
//                     : JSON.stringify(action.payload.body);
//         }

//         debug_log(DEBUG_LOG_API_REQUEST, `API REQUEST ${completeUrl}`, request);
//         // testing
//         console.log("testing cannot get error " ,  completeUrl ,  '+' ,  request);
//         if (base_url !== "") {
//             const response = yield fetch(completeUrl, request);
//             debug_log(
//                 DEBUG_LOG_API_RAW_RESPONSE,
//                 `API RAW RESPONSE ${completeUrl}`,
//                 response
//             );

//             // Check for non-JSON responses (e.g., HTML error pages)
//             if (!response.ok) {
//                 const responseText = yield response.text();
//                 console.log("Non-JSON response:", responseText);

//                 if (typeof action.payload.onFailure === "function") {
//                     action.payload.onFailure({ message: "Non-JSON response received." });
//                 }

//                 return; // Stop processing further
//             }

//             const responseData = yield response.json();
//             debug_log(
//                 DEBUG_LOG_API_JSON_RESPONSE,
//                 `API JSON RESPONSE ${completeUrl}`,
//                 responseData
//             );

//             if (action.payload.reduxActionType !== "") {
//                 yield put({
//                     type: action.payload.reduxActionType,
//                     payload: responseData,
//                     requestParams: action.payload.body,
//                 });
//             }

//             if (typeof action.payload.onSuccess === "function") {
//                 action.payload.onSuccess(responseData);
//             }
//         }
//     } catch (error) {
//         console.log("catch error", error);
//         if (typeof action.payload.onFailure === "function") {
//             action.payload.onFailure({ message: error.message });
//         }
//     }
// }

// export default fetchData;


// import React from 'react'


// import {put, select} from 'redux-saga/effects'
// import constants from '../../Constants';

// const DEBUG_LOG_API = true;
// const DEBUG_LOG_API_REQUEST = true;
// const DEBUG_LOG_API_RAW_RESPONSE = true;
// const DEBUG_LOG_API_JSON_RESPONSE = true;

// const debug_log = (should_log, text, variable) => {
//     if (should_log) {
//         console.log('******** ' + text + ' *****hgjg*********');
//         console.log("debugLog",variable);
//     }
// }

// export const convert_get_params = (params, isPageUrl = false) => {
//     if (params.length > 0) {
//         let str = params.join("|")
//         return isPageUrl ? '&' : '?' + 'filter=' + str
//     }
//     return '';
// }


// export const append_order_by = (get_string, orderBy, orderByText, isPageUrl = false) => {
//     if (orderBy.length > 0) {
//         return get_string + ((get_string.length == 0 && !isPageUrl) ? '?' : '&') + orderByText + orderBy;
//     }
//     return get_string;
// }


// function* fetchData(action) {
//     console.log("******ACTION", action);
//     console.log("******base_urlbase_url", constants.all_data_api_url);

//     let all_state = yield select();
//     all_state = all_state.main;
//     let userInfo = all_state.main;
//     console.log("all_state" ,  all_state)
//     console.log("User Info in ", userInfo);

//     try {
//         // var complete_url = action.payload.apiUrl + action.payload.getString;
//         var complete_url = action.payload.apiUrl;

//         if (action.payload) {
//             // complete_url = base_url + action.payload.apiUrl + action.payload.getString;
//             complete_url = constants.all_data_api_url ;
//             console.log('complete_urlcomplete_url' , complete_url)
            
//         }
//         debug_log(DEBUG_LOG_API, action.payload.requestType + ' API URL', complete_url);
        
//         var request = {
//             headers: {
//                 'Content-Type': action.payload.header,
//                 'v': '1'
//             },
//             method: action.payload.requestType,
//         };

//         // if (action.payload.accessToken) {
//         //     request.headers.Authorization = "Bearer "  + userInfo.access_token;
//         // }
//         // if (action.payload.userMetaData) {
//         //     request.headers.userRole=userInfo.selectedRoleId//roles.filter(x=>x.roleTitle.toUpperCase() == all_state.userInfo.selectedRole)[0].user_role_id;
//         //     request.headers.userId=userInfo.user.userId;
//         // }
//         if (action.payload.requestType !== 'GET') {
            
//             request = {
//                 ...request,
//                 body: action.payload.header === 'application/x-www-form-urlencoded' ? action.payload.body : JSON.stringify(action.payload.body)
//             };
//         }

//         debug_log(DEBUG_LOG_API_REQUEST, 'API REQUEST', request);
//         if (constants.all_data_api_url !== '') {
//             // console.log("Saga Helper: Desire",request)

//             // const data = yield fetch(complete_url, request.method);
//             const data = yield fetch(constants.all_data_api_url, request.method);

//             console.log("Lamba",request.headers['Content-Type'])

//             console.log("Lamba",data)
//             debug_log(DEBUG_LOG_API_RAW_RESPONSE, 'API RAW RESPONSE', data);

//             let response = yield data;
//             debug_log(DEBUG_LOG_API_JSON_RESPONSE, 'API JSON RESPONSE', response);
//             if (response && response.responseCode == 200 && response.payload && response.payload.success) {
//                 if (action.payload.reduxActionType !== "" || action.payload.reduxActionType !== null) {
//                     yield put({
//                         type: action.payload.reduxActionType,
//                         payload: response,
//                         requestParams: action.payload.body
//                     })
//                 }
//                 action.payload.onSuccess(response)

//             } else {
//                 action.payload.onFailure(response)
//             }
//         } else
//             action.payload.onFailure("No Server BASE URL")
//     } catch (e) {
//         console.log("Exception2", e);
//         action.payload.onFailure({message: e.message})
//     }
// }


// export default fetchData
