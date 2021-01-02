import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
import CreditrCardImage from '../../../assets/credit-card.png'
import { CheckBox } from '@react-native-community/checkbox'

export default function PaymentCards(props) {
    return(
        <View style={{backgroundColor: props.backgroundColor,
            borderRadius:10,
            alignItems:'center',
            padding:10}}>
            <View style={styles.creditCardContainer}>
                <Image  resizeMode='contain' source={props.icon} />
                <Text style={{ fontSize:15,
        color:props.textColor,
        fontFamily:'Poppins-SemiBold'}} >{props.text}</Text>
            </View>
            <View>
                {/* <CheckBox/> */}
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        // backgroundColor: background,
        // borderRadius:10,
        // alignItems:'center',
        // padding:10
        // alignContent:'center'
    },
    creditCardContainer:{
        width:'50%',
        // backgroundColor:'red',
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignSelf:'flex-start',
        
    },
    creditCardText:{
        fontSize:15,
        color:'#464951',
        fontFamily:'Poppins-SemiBold'
    }
})