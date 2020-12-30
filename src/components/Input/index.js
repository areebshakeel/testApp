import React from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'

export default function Input(props){
    return(
        <View>
            <Text style={styles.labelText} >{props.label}</Text>
        <View style={styles.inputContainer}>
            <TextInput style={styles.inputText} 
            placeholder={props.placeholder} />
        </View>
        </View>
    )
}

const styles= StyleSheet.create({

    inputContainer:{
        borderTopWidth:1,
        borderBottomWidth:1,
        borderLeftWidth:1,
        borderRightWidth:1,
        borderColor:'#707070',
        paddingHorizontal:100,
        borderRadius:10,
        backgroundColor:'#F8F8F8'
        // minWidth:'50%'
    },
    inputText:{
        minWidth:'90%',
        maxWidth:'90%'
    },
    labelText:{
        fontSize:15,
        fontFamily:'Poppins-Regular',
        color:'#464951',
        padding:2
    }
})