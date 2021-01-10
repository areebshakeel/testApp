import React, { useState } from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { ScrollView, } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/AntDesign'
import WalletImage from '../../../assets/wallet.png'
import kfcImage from '../../../assets/kfc.png'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default function OrderItem(props) {
    return (
        <TouchableOpacity onPress={() => props.flagFalse()}
            style={{ padding: 5, backgroundColor: props.backgroundColor, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 10 }} >
            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                <View>
                    <Image source={props.orderImage} />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }} >
                    <View>
                        <View style={{ flexDirection: 'row' }} >
                            <Text style={{
                                color: props.textColor,
                                fontSize: 14,
                                fontFamily: 'Poppins-SemiBold'
                            }} > {props.itemName} </Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                            <EntypoIcon color={props.textColor} name="location-pin" />
                            <Text style={{
                                color: props.textColor,
                                fontSize: 10,
                                fontFamily: 'Poppins-Regular'
                            }} >{props.location}</Text>
                        </View>

                    </View>

                </View>
            </View>
            <View>
                <Text style={{
                    color: props.textColor,
                    fontSize: 14,
                    fontFamily: 'Poppins-SemiBold'
                }} >{props.time}</Text>
            </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

})