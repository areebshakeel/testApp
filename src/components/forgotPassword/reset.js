import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import ForgotImage from '../../../assets/forget-password-img.png'
import Input from '../Input'
import Button from '../Button'
import AntIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/AntDesign'
import PasswordInput from '../passwordInput'

export default function ResetPassword() {

    return (
        <ScrollView style={{ backgroundColor: '#FFFF'}} >
            <View style={styles.container}>
                <View style={styles.arrow} >
                    <Icon name="arrowleft" size={30} />
                </View>
                <View style={styles.imageContainer} >
                    <Image source={ForgotImage} />
                </View>
                <View style={styles.forgotPasswordHeading}>
                    <Text style={styles.forgotPasswordHeadingText} >Reset Password?</Text>
                </View>
                <View style={{ marginTop: 10, padding:10 }} >
                    <View>
                        <PasswordInput label='Enter New Password*' />
                    </View>
                    <View>
                        <PasswordInput label='Re-Enter Password*' />
                    </View>
                    <View style={{ marginTop: 10 }}  >
                        <Button backgroundColor="#2196F3" title="Submit" color="#FFFF" />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // width:'?%',
        padding: 2,
        // alignItems: 'center',
        marginTop: 20,
        backgroundColor: '#FFFF'
    },
    imageContainer: {
        alignSelf: 'center'
    },
    forgotPasswordHeadingText: {
        color: '#2196F3',
        fontSize: 24,
        // textAlign:'left',
        fontFamily: 'Poppins-Bold'
    },
    forgotPasswordHeading: {
        marginTop:20,
        alignSelf: "flex-start",
        marginLeft: 10,
        padding:2
    },
    arrow: {
        alignSelf: 'flex-start',
        marginLeft: 10

    }
})