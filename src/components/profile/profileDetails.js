import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import UserIcon from 'react-native-vector-icons/AntDesign'
import UserImage from '../../../assets/profile-avatar.png'



export default function ProfileDetails(props) {
    return (
        <View style={styles.container} >
            <View style={styles.details}>
                <Image source={props.icon} />
                <Text style={styles.text} >{props.text}</Text>
            </View>
            <View>
                <UserIcon name="right" color="#464951" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderBottomWidth: 1,
        borderColor: '#464951',
    },
    details: {
        flexDirection: "row",
        justifyContent: 'space-around',
        width: '35%',
        alignSelf:'flex-start',
        alignItems:'flex-start'
        // alignItems: "center"
    },
    text: {
        color: '#464951',
        fontSize: 10,
        fontFamily: 'Poppins-Medium',
        textAlign:'center',
        alignSelf:'center'
    },

})