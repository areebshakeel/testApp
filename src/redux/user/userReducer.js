import {userActionTypes} from './userActionTypes'

const INITIAL_STATE={
    loading:false,
    email,
    success:false,
    error:false,

}

const userReducer=(state=INITIAL_STATE, action)=>{

    switch(action.type){
        case userActionTypes.USER_LOGIN_REQUEST:
            return{
                ...state,
                error:false,
                loading:true
                
            }
        case userActionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                success:true,
                error:false
            }    
        default:
            return state
        
    }

}

export default userReducer