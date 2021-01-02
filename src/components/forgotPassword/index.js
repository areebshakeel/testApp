import React, { useState } from 'react'
import {View, Text} from 'react-native'
import ForgotPassword from './forgot'
import ResetPassword from './reset'


export default function ForgotPasswordScreen(){

    const [flag, setFlag] = useState(true)
    function flagFalse(){
        setFlag(false)
    }
    return(
        <View>
            {/* <ForgotPassword/> */}
            <ResetPassword/> 
            
        </View>
    )
}