import React from 'react';
import {View, Text, Image, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import MobileVerifyImage from '../../../assets/Authentication-bro.png';
import PhoneInput from "react-native-phone-input";


export default function VehicleRegistration() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.headingContainer}>
          <Text style={styles.mobileVerifyHeading}>Mobile Verification</Text>
          <Text style={styles.verifyDescription}>
            A verification code has been sent to your mobile phone.
          </Text>
        </View>
        <Image source={MobileVerifyImage} />
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>Phone Number*</Text>
          <View style={styles.inputContainer}>
            <PhoneInput style={{ padding:15}} useRef='phone' />
            <TextInput style={styles.inputs} />
          </View>
        </View>
        <View style={styles.otpContainer}>
          <Text style={styles.otpHeading}>OTP Verification</Text>
          <Text style={styles.otpDescription}>
            A verification code has been sent to your email address
          </Text>
          <View style={styles.otpInputContainer}>
            <TextInput style={styles.otpInput} />
            <TextInput style={styles.otpInput} />
            <TextInput style={styles.otpInput} />
            <TextInput style={styles.otpInput} />
          </View>
          <View style={styles.allInputsContainer}>
            <TouchableOpacity
            //   onPress={}
              style={styles.nextButton}>
              <Text
                style={{
                  color: 'white',
                  fontFamily: 'Poppins-SemiBold',
                  fontSize: 15,
                }}>
                Register Vehicle
              </Text>
            </TouchableOpacity>
            </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor:'white'
  },
  mobileVerifyHeading: {
    // alignItems:'flex-start',
    // textAlign:'left',
    color: '#2196F3',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
  },
  headingContainer: {
    alignSelf: 'flex-start',
    padding: 20,
    marginTop: 20,
  },
  verifyDescription: {
    color: '#3D3D3D',
    // fontWeight:'Semibold',
    width: 240,
    fontSize: 15,
  },
  inputContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#707070',
    // paddingHorizontal: 50,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    // alignItems:'flex-start',
    flexDirection:'row'
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  allInputsContainer: {
    // padding: 4,
  },
  inputs: {
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    maxWidth: 300,
    minWidth: 300,
    // borderColor: '#707070',
  },
  label: {
    color: '#9A9A9A',
    fontWeight: 'bold',
  },
  otpHeading: {
    color: '#2196F3',
    fontSize: 24,
    fontFamily: 'Poppins-Bold',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  otpContainer: {
    alignSelf: 'center',
  },
  otpDescription: {
    textAlign: 'center',
    width: 230,
    marginLeft:80,
    color: '#3D3D3D',
    
  },
  otpInput: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#3D3D3D',
    width: 50,
    borderRadius: 8,
    // margin:2,
  },
  otpInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 15,
  },
  nextButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 8,
    marginTop:6
  },
});
