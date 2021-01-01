import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import WalletImage from '../../../assets/wallet.png'
import kfcImage from '../../../assets/kfc.png'
import mcdonaldsImage from '../../../assets/macdonalds.png'
import OrderItem from '../activeOrder/orderItem'
import Button from '../Button'
import StarIcon from 'react-native-vector-icons/FontAwesome'
import TextArea from '../textArea'
export default function AddReview(props) {
    const [flag, setFlag] = useState(true)
    const [badge, setBadge] = useState(true)
    function flagFalse() {
        setFlag(false)
    }
    const star = ['1', '2', '3', '4', '5']

    return (
        <ScrollView style={{ backgroundColor: '#FFFF' }} >
            <View style={styles.container}>
                <View style={styles.arrow} >
                    <Icon name="arrowleft" size={30} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.headingText} >Add Review</Text>
                </View>
                <View style={styles.imagContainer} >
                    <Image resizeMode="contain" source={WalletImage} />
                </View>
                <View style={{ marginTop: 20 }}  >
                    <View >
                        <OrderItem flagFalse={flagFalse} itemName=" KFC" orderImage={kfcImage} location='Burj Khalifa, Dubai' />
                    </View>
                </View>
                <View style={styles.starIconCOntainer}>
                    {
                        star.map(item => <StarIcon onPress={() => setBadge(!badge)} name="star" size={25} color={badge ? "#AEAEAE" : '#2196F3'} />
                        )
                    }
                </View>
                <View style={{ marginTop: 10 }} >
                    <TextArea placeholder="" label="Write a Review" />
                </View>
                <View style={{ marginTop: 10 }} >
                <Button backgroundColor="#2196F3" color="#FFFF" title="Submit" />
                </View>






            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#FFFF'
    },
    headingText: {
        color: '#2196F3',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold'
    },
    imagContainer: {
        marginTop: 30,
        alignSelf: 'center',
        borderBottomWidth: 2,
        borderColor: '#F8F8F8'
    },
    orderContainer: {

    },
    starIconCOntainer: {
        marginTop: 10,
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        // backgroundColor:'red',
        width: '50%',
        alignItems: 'center'
    }
})