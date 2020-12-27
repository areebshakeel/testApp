import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from '../assets/logo.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {set} from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Zocial';

export default function PaymentConfirm(){
    return(
        <View style={{alignItems: 'center'}}>
        <MaterialIcon
          name="arrow-back"
          size={30}
          style={{marginRight: 360, marginTop: 20}}
        />
        <Text style={styles.logoText}>Payment confirmed</Text>
        <View>
          <Image
          resizeMode="contain"
            source={Logo}
            style={{width: 250, height: 230, marginTop: 8}}
          />
        </View>
        <View style={styles.orderText}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3D3D3D',
              width: 200,
              textAlign: 'center',
            }}>
            Your order{' '}
            <Text
              style={{
                color: '#2196F3',
                fontStyle: 'italic',
                textDecorationLine: 'underline',
              }}>
              #004333
            </Text>{' '}
            has been placed
          </Text>
        </View>
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 1,
      lineHeight: 300,
      flexDirection: 'column',
    },
    logoText: {
      color: '#2196F3',
      fontSize: 30,
      fontWeight: 'bold',
      marginTop: 8,
    },
    imageContainer: {
      borderWidth: 2,
      borderStyle: 'solid',
  
      borderColor: 'blue',
      height: '100%',
      width: '100%',
    },
    orderText: {
      alignItems: 'center',
      marginTop: 20,
    },
    reach: {
      backgroundColor: '#989898',
      width: 330,
      padding: 15,
      borderRadius: 10,
    },
    noButton: {
      width: 180,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderColor: '#464951',
      padding: 18,
      borderRadius: 8,
      alignItems: 'center',
    },
    yesButton: {
      width: 180,
      borderColor: '#464951',
      backgroundColor: '#2196F3',
      padding: 18,
      borderRadius: 8,
      alignItems: 'center',
    },
    yesNoContainer: {
      // flex: 0.1,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 400,
      marginTop: 20,
    },
    waitText: {
      textAlign: 'center',
      color: '#3D3D3D',
      width: 310,
      marginTop: 20,
      fontWeight: 'bold',
    },
    contact: {
      // flex:0.1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: 300,
      marginTop: 25,
    },
    contactText: {
      color: '#2196F3',
      fontSize: 30,
      fontWeight: 'bold',
    },
    disputeText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#3D3D3D',
      textAlign: 'center',
      marginTop: 10,
    },
    disputeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: 350,
    },
  
    disputeButton: {
      width: 170,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderRightWidth: 1,
      borderLeftWidth: 1,
      borderColor: '#464951',
      borderRadius: 8,
      padding: 18,
    },
    waitButton: {
      width: 170,
      backgroundColor: '#2196F3',
      padding: 18,
      borderRadius: 8,
    },
    receiveButton: {
      width: 350,
      backgroundColor: '#2196F3',
      padding: 18,
      borderRadius: 8,
      marginTop: 10,
    },
  });