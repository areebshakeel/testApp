import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from '../assets/logo.png';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Button from '../common/socialMediaButton';

function PaymentConfirmationPage(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <MaterialIcon name="arrow-back" size={30} style={{marginRight: 360}} />
        <Text style={styles.logoText}>Payment confirmed</Text>
        <View>
          <Image
            source={Logo}
            style={{width: 200, height: 250, marginTop: 8}}
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
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#3D3D3D',
              textAlign: 'center',
              marginTop: 10,
            }}>
            Your order will be ready in
          </Text>
          <Text
            style={{
              color: '#2196F3',
              fontSize: 30,
              fontWeight: 'bold',
              marginTop: 10,
            }}>
            23 Min...
          </Text>
        </View>
        <View>
          {/* <Button title="Reached destination" icon={() => ''} />i */}
        </View>
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
});
