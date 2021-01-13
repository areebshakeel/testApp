import {userActionTypes} from './userActionTypes';
import axios from 'axios';

// type:userActionTypes.USER_LOGIN_REQUEST,
// payload

export function userLoginRequest(payLoad) {
  console.log(payLoad);
  return (dispatch) => {
    axios
      .post('https://devfoodapp.m3tech.com.pk/public/api/login', payLoad)
      .then((res) => {
        return dispatch({
          type: userActionTypes.USER_LOGIN_SUCCESS,
          res,
        });
      })
      .catch((error) => {
          console.log('Error-->> ',error.message);
        return dispatch({
          type: userActionTypes.USER_LOGIN_FAILED,
          error,
        });
      });
  };
}

export const userLoginSuccess = async (payload) => {
  console.log('data from component-->', payload);
  console.log('response', res);
  return {
    type: userActionTypes.USER_LOGIN_SUCCESS,
    data: payload,
  };
};

export const USER_LOGIN_FAILED = (payload) => ({
  type: userActionTypes.USER_LOGIN_FAILED,
  payload,
});
