import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import WalletImage from '../../../assets/wallet.png'
import kfcImage from '../../../assets/kfc.png'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default function OrderItem(props) {
    return (
        <View style={{padding:5,  backgroundColor: '#F9F9F9', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }} >
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View>
                    <Image source={props.orderImage} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                    <View>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={styles.itemText} > {props.itemName} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <EntypoIcon color="#C6E2F9" name="location-pin" />
                            <Text style={{
                                color: '#464951',
                                fontSize: 10,
                                fontFamily: 'Poppins-Regular'
                            }} >{props.location}</Text>
                        </View>

                    </View>

                </View>
            </View>
            <View>
                <Text style={styles.itemText} >30 minutes</Text>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    itemText: {
        color: '#464951',
        fontSize: 14,
        fontFamily: 'Poppins-SemiBold'
    }
})