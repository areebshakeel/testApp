import React, { useState } from 'react'
import { View, Text } from 'react-native'
// import {
//     GoogleSignin,
//     GoogleSigninButton,
//     statusCodes,
// } from '@react-native-community/google-signin';

// GoogleSignin.configure({
//     webClientId:'154063526855-69igbuggdvmbiqm6rctdpm9mngkahb8q.apps.googleusercontent.com',
//     offlineAccess:true
// })

function Profile() {
    
    // const [userGoogleInfo, setUserGoogleInfo]=useState({})
    // const [loaded, setLoaded,] =useState(false)

    // SignIn=async()=>{
    //     try{
    //         await GoogleSignin.hasPlayServices()
    //         const userInfo= await GoogleSignin.signIn()
    //         setUserGoogleInfo(userInfo)
    //         setLoaded(true)

    //     }
    //     catch(error){
    //         console.log(error.message)
    //     }
    // }
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text>Profile Page</Text>

            {/* <GoogleSigninButton onPress={()=>signIn()} />
            {loaded?
            <View>
                <Text>{userGoogleInfo.user.name}</Text>
                <Text>{userGoogleInfo.user.email}</Text>
            </View> :
            <View>
                <Text>Not Signed In</Text>
            </View>
            } */}
            

        </View>
    )
}

export default Profile