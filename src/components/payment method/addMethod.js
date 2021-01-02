import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import IonIcon from 'react-native-vector-icons/FontAwesome5';
import SamsungPayIcon from '../../../assets/samsung-pay.png'
import Button from '../Button'
import CreditrCardImage from '../../../assets/credit-card.png'
import AppleImage from '../../../assets/apple-icon.png'
import WalletImage from '../../../assets/wallet-icon.png'
import Icon from 'react-native-vector-icons/AntDesign'
// import { CheckBox } from 'native-base';
import CheckBox from '@react-native-community/checkbox';
import PaymentCards from '../paymentsCards'
import { ScrollView } from 'react-native-gesture-handler';
import PaymentAllCards from './paymentAllCards'



export default function AddMethod() {
    return (
        <ScrollView style={{ backgroundColor: '#FFFFFF' }} >
            <View style={styles.container}>
                <View style={styles.arrow} >
                    <Icon name="arrowleft" size={30} />
                </View>
              
                <View>
                    <PaymentAllCards/>
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // alignItems:'center',
        paddingTop: 30,
        width: '95%',
        alignSelf: 'center',
        backgroundColor: '#FFFFFF'

    },
    addMethodContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop:20

    },
    paymentText: {
        color: '#2196F3',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    addMethodText: {
        color: '#2196F3',
        fontSize: 12,
        alignItems: 'center'
    },
    creditCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        padding: 2,
        marginLeft: 8

    },
    cardContainer: {
       marginTop:10
    },
    checkBox: {
        borderRadius: 20
    },
    applePay: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '40%',
        padding: 4,
        marginLeft: 8
        // alignSelf:'flex-start'
    },
    applePayContainer: {
        backgroundColor: 'black',
        marginTop: 10,
        padding: 10,
        borderRadius: 10
    },
    wallet: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        alignItems: 'center',
        padding: 2,
        marginLeft: 8

    },
    walletContainer: {
        backgroundColor: '#F8F8F8',
        borderRadius: 10,
        padding: 10,
        marginTop: 10,

    },
    arrow: {
        alignSelf: 'flex-start',
        // marginLeft: 10

    }
})

