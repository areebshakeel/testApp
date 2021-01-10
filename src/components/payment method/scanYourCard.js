import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
// import {Picker} from '@react-native-picker/picker '
import { ScrollView } from 'react-native-gesture-handler'
import CardImage from '../../../assets/add-card-img.png'
import Button from '../Button'
import Input from '../Input'
import { Picker } from 'native-base'
// import { TextInput } from 'react-native-paper'


export default function ScanYourCard() {
    const [monthValue, setMonthValue] = useState('MM');
    const [yearValue, setYearValue] = useState('YYYY')
    const months = ['mm','1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
    const years = ['yyyy','2020', '2021', '2022', '2023', '2024', '2025', '2026', '2027', '2028', '2029', '2030']
    return (
        <ScrollView style={{ backgroundColor: '#FFFF' }} >
            <View style={styles.container}>
                <View>
                    <Text style={styles.paymentMethodtext} >Add a Payment Method</Text>
                </View>
                <View stye={styles.imageContainer} >
                    <Image resizeMode="contain" source={CardImage} />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Button title="Scan Your Card" backgroundColor='#2196F3' color='#FFFFFF' />
                </View>
                <View style={{ marginTop: 10, alignSelf: 'center' }}>
                    <Text style={styles.orText}>
                        OR
                    </Text>
                </View>
                <View>
                    <Input placeholder="" label="Carholder Name*" />
                </View>
                <View style={{ marginTop: 10 }}>
                    <Input placeholder="" label="Carholder Number*" />

                </View>


<<<<<<< HEAD
                <View style={styles.pickerContainer} >
=======
                <View style={{ marginTop: 10 }}  >
>>>>>>> a7a1a80e756392301e2ff75c8c1ef5878df65cc6
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '80%',
                        // alignSelf: 'center',
                        padding: 2
                    }} >
                        <Text>End Date</Text>
                        <Text>CCV</Text>
                    </View>
                    <View style={styles.pickerCotainer} >
                        <View style={styles.picker1} >
                            <Picker style={styles.pickerText} mode="dialog" selectedValue={monthValue} 
                            onValueChange={(itemValue, itemIndex) => setMonthValue(itemValue)} >
                                {months.map(item => <Picker.Item label={item} value={item} />)}
                            </Picker>
                        </View  >
                        <View style={styles.picker2} >
                            <Picker style={styles.pickerText} mode="dialog"
                            onValueChange={(itemValue)=>setYearValue(itemValue)} >
                                {years.map(item => <Picker.Item label={item} value={item} />)}
                            </Picker>
                        </View>
                        <View style={styles.cvv} >
                            <TextInput />
                        </View>
                    </View>

                </View>


                <View style={{ marginTop: 10 }}>
                    <Button title="Add Method   " backgroundColor='#2196F3' color='#FFFFFF' />
                </View>




            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        // alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 5
    },
    imageContainer: {
        alignSelf: 'center',
        alignItems: 'center'
    },
    paymentMethodtext: {
        color: '#2196F3',
        fontSize: 20,
        fontFamily: 'Poppins-SemiBold',
        textAlign: 'center'
    },
    orText: {
        color: '#464951',
        fontFamily: 'Poppins-Bold',
        fontSize: 20
    },

    cvv: {
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',
        width: '30%'
        // paddingHorizontal: 15,

    },
    pickerCotainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    picker1: {
        width: '25%',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',


    },
    picker2: {
        width: '30%',
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#707070',
        borderRadius: 10,
        backgroundColor: '#F8F8F8',

    },
    pickerText:{
        color:'#3D3D3D',
        fontSize:15,
        
    }


})


