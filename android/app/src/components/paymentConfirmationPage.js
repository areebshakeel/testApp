import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../assets/logo.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { set } from 'react-native-reanimated';
import IonIcon from 'react-native-vector-icons/Zocial'
// import { white } from 'react-native-paper/lib/typescript/styles/colors';
function PaymentConfirmationPage(props) {
  const [flag, setFlag] = useState(true)
  const [badge, setBadge] = useState(true)
  const [tag, setTag] = useState(true)
  return (
    <ScrollView>
      <View style={styles.container}>
        {tag ?
          <View style={{ alignItems: 'center' }}>
            <MaterialIcon name="arrow-back" size={30} style={{ marginRight: 360, marginTop: 20 }} />
            <Text style={styles.logoText}>Payment confirmed</Text>
            <View>
              <Image
                source={Logo}
                style={{ width: 200, height: 250, marginTop: 8 }}
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
          :
          <View style={{alignItems:'center', marginTop:20}}>
            <Image source={Logo} style={{ width: 200, height: 250, marginTop: 8 }} />
            <View>
              <Text style={styles.disputeText} >Do you want to wait 5 more minutes</Text>
              <Text style={styles.disputeText} >or</Text>
              <Text style={styles.disputeText} >start a dispute</Text>
            </View>
            <View style={{marginTop:150}}>
                  <View style={styles.disputeContainer} >
                    <TouchableOpacity style={styles.disputeButton} >
                      <Text style={{textAlign:'center'}} >Dispute</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.waitButton} >
                      <Text style={{textAlign:'center', color:'white'}} >Wait</Text>
                    </TouchableOpacity>
                  </View>
                    <TouchableOpacity style={styles.receiveButton}>
                      <Text style={{textAlign:'center', color:'white'}} >Order received</Text>
                    </TouchableOpacity>
            </View>
          </View>
        }


        {flag && badge ?
          <View style={{ marginTop: 20 }}>
            <TouchableOpacity onPress={() => setFlag(false)} style={styles.reach}>
              <Text style={{ color: '#C2C2C2', textAlign: 'center' }}>Reached destination</Text>
            </TouchableOpacity>
          </View>

          :
          (!flag && badge ?
            <View style={{ alignItems: 'center' }}>
              <Text style={{
                fontSize: 20,
                fontWeight: 'bold',
                color: '#3D3D3D',
                textAlign: 'center',
                marginTop: 10,
                width: 250

              }} >Your order will be ready in <Text style={{
                color: '#2196F3',
                fontSize: 30,
                fontWeight: 'bold',
              }}>00 Min...</Text></Text>
              <Text style={{
                color: '#2196F3',
                fontSize: 20,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 35
              }}>
                Order received?
            </Text>
              <View style={styles.yesNoContainer} >
                <TouchableOpacity onPress={() => setBadge(false)} style={styles.noButton}>
                  <Text style={{ color: '#464951' }}>
                    NO
                </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.yesButton}>
                  <Text style={{ color: 'white' }}>
                    Yes
                </Text>
                </TouchableOpacity>
              </View>
            </View>
            : (!flag && !badge && tag ?
              <View style={{ alignItems: 'center' }}>
                <Text style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#3D3D3D',
                  textAlign: 'center',
                  marginTop: 10,
                  width: 250

                }} >Your order will be ready in <Text style={{
                  color: '#2196F3',
                  fontSize: 30,
                  fontWeight: 'bold',
                }}>5 Mins...</Text></Text>
                <Text style={styles.waitText} >
                  We have sent a notification to your resturant.
                  Lets Wait 5 more minutes to compelete
                  or call the resturant
            </Text>

                <TouchableOpacity onPress={() => setTag(false)} style={styles.contact} >

                  <IonIcon name="call" size={25} color="white"
                    style={{ backgroundColor: '#EF5261', borderRadius: 20, padding: 7 }} />
                  <Text style={styles.contactText}>+71123 568 7980</Text>
                </TouchableOpacity>

              </View>
              :
              <Text>

              </Text>
            )
          )

        }
      </View>
    </ScrollView>
  );
}
export default PaymentConfirmationPage;
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
    borderRadius: 10
  },
  noButton: {
    width: 180,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#464951',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  yesButton: {
    width: 180,
    borderColor: '#464951',
    backgroundColor: "#2196F3",
    padding: 15,
    borderRadius: 8,
    alignItems: 'center'
  },
  yesNoContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: 400,
    marginTop: 20

  },
  waitText: {
    textAlign: 'center',
    color: '#3D3D3D',
    width: 310,
    marginTop: 20,
    fontWeight: 'bold'
  },
  contact: {
    // flex:0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 300,
    marginTop: 25
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
  disputeContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:350
  },
  
  disputeButton:{
    width:170,
    borderTopWidth:1,
    borderBottomWidth:1,
    borderRightWidth:1,
    borderLeftWidth:1,
    borderColor:"#464951",
    borderRadius:8,
    padding:18,

  },
  waitButton:{
    width:170,
    backgroundColor:'#2196F3',
    padding:18,
    borderRadius:8

  },
  receiveButton:{
    width:350,
    backgroundColor:"#2196F3",
    padding:18,
    borderRadius:8,
    marginTop:10

  }

});
