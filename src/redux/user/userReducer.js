import {userActionTypes} from './userActionTypes'

const INITIAL_STATE={
    loading:false,
    error:null,

}

const userReducer=(state=INITIAL_STATE, action)=>{
    // console.log(action?.res?.data,'---->action')

    switch(action.type){
        // console.log(action)
        
        case userActionTypes.USER_LOGIN_REQUEST:
            return{
                ...state,
                error:null,
                loading:true
                
            }
        case userActionTypes.USER_LOGIN_SUCCESS:
            const {res:{data}}=action
            
            console.log('action ka dataa-->> ',data)
            return{
                ...state,
                user:data,
                loading:false,
                error:null
            }
        case userActionTypes.USER_LOGIN_FAILED:
            return{
                error:action.error,
                loading:false
            }        
        default: {
            return {...state};
              }
        
    }

}

export default userReducer