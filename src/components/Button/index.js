import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default function Button (props){
    return(
        <TouchableOpacity style={{backgroundColor:props.backgroundColor,paddingVertical: 15,
            paddingHorizontal: 130,
            borderRadius: 8,}}>
            <Text style={{color:props.color, textAlign:'center',width:140, alignSelf:"center"}} >{props.title}</Text>
        </TouchableOpacity>
    )
} 