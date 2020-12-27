import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from '../assets/logo.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {set} from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Zocial';
 
export default function ReachDestination(props){

    return(
<View style={{marginTop: 20, alignItems:'center'}}>
<Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: '#3D3D3D',
          textAlign: 'center',
          marginTop: 10,
          width: 250,
        }}>
        Your order will be ready in{' '}
        <Text
          style={{
            color: '#2196F3',
            fontSize: 30,
            fontWeight: 'bold',
          }}>
          23 Min...
        </Text>
      </Text>
      
  <TouchableOpacity onPress={() => props.flagFalse()} style={styles.reach}>
    <Text style={{color: '#C2C2C2', textAlign: 'center'}}>
      Reached destination
    </Text>
  </TouchableOpacity>
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
    // width: 330,
    paddingVertical: 20,
    paddingHorizontal:120,
    borderRadius: 10,
    marginTop:20
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
