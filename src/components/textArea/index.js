import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default function TextArea(props) {
    return (
        <View>
            <Text style={styles.labelText} >{props.label}</Text>
            <View style={styles.inputContainer}>
                <TextInput multiline={true} numberOfLines={5} style={styles.inputText}
                    placeholder={props.placeholder} />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({

    inputContainer: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#707070',
        // paddingHorizontal: 100,
        borderRadius: 10,
        backgroundColor: '#F8F8F8'
        // minWidth:'50%'
    },
    inputText: {
        minWidth: '100%',
        maxWidth: '100%',
        alignSelf:'flex-start',
        
    },
    labelText: {
        fontSize: 15,
        fontFamily: 'Poppins-Regular',
        color: '#464951',
        padding: 2
    }
})