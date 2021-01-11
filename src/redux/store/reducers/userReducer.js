const InitialState={
    user:{}

}
export default (state = InitialState, action) => {
    switch(action.type) {
        case "UPDATE_USER": {
            
            console.log('action==>',action)
            return Object.assign({},state,{
                user:action.body,
            })
        }
        case "REMOVE_USER": {
            return {...state, user: null}
        }
        default: {
            return state;
        }
    }
}

