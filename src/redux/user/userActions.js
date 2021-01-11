import {userActionTypes} from './userActionTypes'

export const userLoginRequest=payLoad=>({
    type:userActionTypes.USER_LOGIN_REQUEST,
    payload
})

export const userLoginSuccess = async (payload) => {
    console.log('data from component-->',payload)
let res= await axios.post('https://devfoodapp.m3tech.com.pk/public/api/login')
console.log('response',res)    
return  {
        type: userActionTypes.USER_LOGIN_SUCCESS,
        
    }
}

export const USER_LOGIN_FAILED=payload=>({
    type:userActionTypes.USER_LOGIN_FAILED,
    payload
})