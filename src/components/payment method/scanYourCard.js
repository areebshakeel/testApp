import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
// import {Picker} from '@react-native-picker/picker '
import { ScrollView } from 'react-native-gesture-handler'
import CardImage from '../../../assets/add-card-img.png'
import Button from '../Button'
import Input from '../Input'
import { Picker } from 'native-base'
import { TextInput } from 'react-native-paper'


export default function ScanYourCard() {
    const [selectedValue, setSelectedValue] = useState("MM");
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    const years = [2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030]
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
                <View style={{ marginTop: 10 }}>
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


                <View style={styles.pickerMainContainer}>
                    <View>
                    <Text style={{color:'#464951'}} >End Date</Text>
                    <View style={styles.pickerContainer} >

                        <Picker mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} selectedValue={selectedValue} >
                            {
                                months.map((item, itemIndex) => {
                                    <Picker.Item label={item} />
                                })
                            }
                        </Picker>



                    </View>
                    </View>
                    <View>
                        <Text>                </Text>
                    <View style={styles.pickerContainer} >
                        <Picker mode='dropdown'
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            selectedValue={selectedValue} >
                            {
                                years.map((item, itemIndex) => {
                                    <Picker.Item label={item} />
                                })
                            }

                        </Picker>

                    </View>
                    </View>
                    <View>
                    <Text style={{color:'#464951'}} >CCV</Text>

                    <View style={styles.ccvInput} >
                                {/* <TextInput style={{height:'23%'}} /> */}
                    </View >
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
        alignItems: 'center',
        backgroundColor: '#FFFF',
        padding: 10
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
    pickerContainer: {
        width: '100%',
        // height: '100%',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#707070',
    },
    pickerMainContainer: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 20,
        // backgroundColor:'green'
    },
    ccvInput: {
        width: '100%',
        paddingHorizontal:40,
        paddingVertical:24,
        // height: '20%',
        backgroundColor: '#F8F8F8',
        borderRadius: 8,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#707070',
    }
})
