import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import IonIcon from 'react-native-vector-icons/AntDesign'

export default function SecurityInput (...props){
    // alert(props.changeIsHidden)
    return (
        <View>
            <Text style={styles.labelText}>{ props.label}</Text>
        <View style={styles.container} >
            {/* <EntypoIcon name="eye" size={30} color='#707070' /> */}
            <IonIcon name="lock" size={30} color='#707070' />
            <TextInput style={styles.input} secureTextEntry={ true}/>
            { props.isHidden?
            <EntypoIcon  name="eye-with-line" size={30} color='#707070' />
            :
            <EntypoIcon   name="eye" size={30} color='#707070'/>

            }
        </View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#F8F8F8',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#707070',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-evenly',
        paddingHorizontal:10
        // padding:5

    },
    input: {
        minWidth:'80%',
        maxWidth:'80%'

    },
    labelText:{
        fontSize:15,
        fontFamily:'Poppins-Regular',
        color:'#464951',
        padding:2
    }
})
    
