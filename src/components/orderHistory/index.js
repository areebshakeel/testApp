import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import OrderCard from './orderCard'
import Icon from 'react-native-vector-icons/AntDesign'


export default function OrderHistory() {
    const orders = [0, 1, 2]
    return (
        <View style={{ backgroundColor: '#FFFF', padding: 10, height: '100%' }}>
            <View style={{flexDirection:'row', alignItems:'center', width:'100%', justifyContent:'space-between'}} >
                <View style={styles.arrow}>
                    <Icon name="arrowleft" size={30} />
                </View>
                <View>
                    <Text style={styles.headingText} >Order History</Text>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
            {orders.map(item => <View style={{ marginTop: 20 }} >
                <OrderCard />
            </View>)}

        </View>
    )

}

const styles = StyleSheet.create({
    headingText: {
        color: '#2196F3',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        // alignSelf:'center'
    },
    arrow: {
        alignSelf: 'flex-start',

    },
})