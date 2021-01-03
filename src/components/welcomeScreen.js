import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import WelcomeImage from '../../assets/welcome.png'
import { ScrollView } from 'react-native-gesture-handler'
// import { Image } from 'native-base'

export default function Welcome() {
    return (
        <ScrollView style={{backgroundColor:'#FFFF'}}>
            <View style={{marginTop:60, backgroundColor:"#FFFF"}}>
            <View style={styles.headingContainer}>
                <Text style={styles.welcomeHeading} >Welcome to FoodApp</Text>
                <Text style={styles.description} >Food add satisfies your food craving with your favurite food and resturants,
                    where ever you are</Text>
            </View>
            <View style={{padding:20, width:'50%', marginLeft:38}}>
                <TouchableOpacity style={styles.getStartedButton}  >
                    <Text style={{color:'#FFFFFF', textAlign:'center', fontWeight:'bold'}}>Get Started</Text>
                </TouchableOpacity>
            </View>
            <View style={{alignItems:'center', marginTop:80}}>
                <Image resizeMode="contain" source={WelcomeImage} style={{width: 350, height: 250}} />
            </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    welcomeHeading: {
        color: '#2196F3',
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 8,
        textAlign: 'center'
    },
    headingContainer: {

        alignItems: 'center'
    },
    description: {
        color: '#9A9A9A',
        width: '65%',
        textAlign: 'left',
        marginTop: 6,
        marginRight:20
    },
    getStartedButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        // paddingHorizontal: 10,
        borderRadius: 8,
        marginTop: 10,
    }
})

