import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/FontAwesome5';
import SamsungPayIcon from '../../../assets/samsung-pay.png'
import Button from '../Button'

// import { CheckBox } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
// import { Image } from 'native-base';



export default function AddMethod() {
    return (
        <View style={styles.container}>
            <View style={styles.addMethodContainer}>
                <Text style={styles.paymentText} >Payment Method</Text>
                <Text style={styles.addMethodText} >Add Method</Text>
            </View>
            <View style={{marginTop:20}}>
            <View style={styles.cardContainer }  >
                <View style={styles.creditCardContainer }  >
                    <Icon name='credit-card' size={30} />
                    <Text>Credit Card</Text>
                </View>
                <View>
                    <CheckBox style={styles.checkBox} />
                </View>
            </View>
            <View style={styles.applePayContainer} >
                <View style={styles.applePay} >
                    <Icon name="apple" size={30} color='white' />
                    <Text style={{color:'#FFFFFF'}} >Apple Pay</Text>
                </View>
            </View>
            <View style={styles.walletContainer} >
                <View style={styles.wallet}>
                    <IonIcon name='wallet' size={30} />
                    <Text>Wallet</Text>
                </View>
            </View>
            <View style={styles.walletContainer} >
                <View style={styles.wallet}>
                <Image source={SamsungPayIcon} />
                    <Text style={{textAlign:'center'}} >Samsung Pay</Text>
                </View>
            </View>
            <View style={{marginTop:10}} >
            <Button  title='Next' backgroundColor='#2196F3' color='#FFFFFF' />
            </View>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        // alignItems:'center',
        paddingTop:30,
        width:'95%',
        alignSelf:'center',
        backgroundColor:'#FFFFFF'

    },
addMethodContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',

},
paymentText:{
    color:'#2196F3',
    fontSize:20,
    fontFamily:'Poppins-SemiBold'
},
addMethodText:{
    color:'#2196F3',
    fontSize:12,
    alignItems:'center'
},
creditCardContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'40%',
    padding:2,
    marginLeft:8

},
cardContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    // borderTopWidth:1,
    // borderBottomWidth:1,
    // borderLeftWidth:1,
    // borderRightWidth:1,
    // borderColor:'black',
    backgroundColor:'#F8F8F8',
    padding:10,
    borderRadius:10
},
checkBox:{
    borderRadius:20
},
applePay:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'40%',
    padding:4,
    marginLeft:8
    // alignSelf:'flex-start'
},
applePayContainer:{
    backgroundColor:'black',
    marginTop:10,
    padding:10,
    borderRadius:10
},
wallet:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'40%',
    alignItems:'center',
    padding:2,
    marginLeft:8

},
walletContainer:{
    backgroundColor:'#F8F8F8',
    borderRadius:10,
    padding:10,    
    marginTop:10,

}
})

