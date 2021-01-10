const updateUser = (user) => {
    console.log('user-->',user)
    return {
        type: "UPDATE_USER",
        user
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