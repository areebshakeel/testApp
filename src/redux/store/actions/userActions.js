import axios from 'axios'
const updateUser = async (body) => {
    console.log('body-->',body)
let res= await axios.post('https://jsonplaceholder.typicode.com/posts', {userId:1234566, title:'my Name', id:1234, body:'Pakistan'})
console.log('response',res)    
return  {
        type: "UPDATE_USER",
        
    }
}



const removeUser = () => {
    return {
        type: "REMOVE_USER",
        user: null
    }
}

export {
    updateUser,
    removeUser
}