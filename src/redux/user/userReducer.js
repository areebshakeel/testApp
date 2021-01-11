import {userActionTypes} from './userActionTypes'

const INITIAL_STATE={
    loading:false,
    // email:"",
    success:false,
    error:false,

}

const userReducer=(state=INITIAL_STATE, action)=>{
    // console.log(action?.res?.data,'---->action')

    switch(action.type){
        // console.log(action)
        
        case userActionTypes.USER_LOGIN_REQUEST:
            return{
                ...state,
                error:false,
                loading:true
                
            }
        case userActionTypes.USER_LOGIN_SUCCESS:
            return{
                ...state,
                user:action.res.data,
                loading:false,
                success:true,
                error:false
            }    
            default: {
                return {...state};
              }
        
    }

}

export default userReducer