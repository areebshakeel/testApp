import React, { useState } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import WalletImage from '../../../assets/wallet.png'
import kfcImage from '../../../assets/kfc.png'
import mcdonaldsImage from '../../../assets/macdonalds.png'
import OrderItem from './orderItem'
import Button from '../Button'
import DownArrow from 'react-native-vector-icons/Entypo'

export default function ActiveOrder(props) {
    const [flag, setFlag] = useState(true)

    function flagFalse() {
        setFlag(!flag)
    }

    return (
        <ScrollView style={{ backgroundColor: '#FFFF' }} >
            <View style={styles.container}>
                <View style={styles.arrow} >
                    <Icon name="arrowleft" size={30} />
                </View>
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.headingText} >Active Order</Text>
                </View>
                <View style={styles.imagContainer} >
                    <Image resizeMode="contain" source={WalletImage} />
                </View>

                <View style={{ marginTop: 20 }}  >
                    <View >
                        <OrderItem backgroundColor={flag ? '#F9F9F9' : '#2196F3'} textColor={flag ? '#464951' : '#FFFF'}
                            time="20 minutes" flagFalse={flagFalse} itemName=" KFC" orderImage={kfcImage} location='Burj Khalifa, Dubai' />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <OrderItem backgroundColor='#F9F9F9' textColor='#464951' time="30 minutes" flagFalse={flagFalse} itemName=" Mcdonald's" orderImage={mcdonaldsImage} location='Dubai Box Park' />
                    </View>
                    { !flag?
                    <View style={{ alignSelf: "center" }}>
                        <DownArrow color='#464951' name="chevron-small-down" size={30} />
                    </View>
                    : <Text></Text>
                    }
                </View>

                <View style={{ marginTop: 50}}>

                    {flag ? <View>
                        <Button backgroundColor="#C6E2F9" color="#FFFF" title="Reached Destination" />
                    </View> :
                        <View>

                            <View>
                                <Button backgroundColor="#2196F3" color="#FFFF" title="Reached Destination" />
                            </View>
                            <View style={{ marginTop: 10 }}>
                                <Button backgroundColor="#2196F3" color="#FFFF" title="Cancel Order" />
                            </View>
                        </View>}

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

    }
})