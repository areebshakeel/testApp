import React from 'react';
import Burger from '../../../assets/burger.png';
import ThankYou from '../../../assets/thankYou.png'
import {View, StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
function OrderCompleteView() {
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Image
          source={Burger}
          resizeMode="contain"
          style={{width: 300, height: 250, marginTop: 8}}
        />
        <Image
          resizeMode="contain"
          source={ThankYou}
          style={{width: 230, height: 150, marginTop: 8}}
        />
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#464951',
            textAlign: 'center',
            //   marginTop: 10,
            width: 250,
          }}>
          Enjoy your meal
        </Text>
        <TouchableOpacity
          // onPress={() => props.orderDone()}
          style={styles.receiveButton}>
          <Text style={{textAlign: 'center', color: 'white'}}>
            Continue Shopping
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default OrderCompleteView;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    // lineHeight: 300,
    // flexDirection: 'column',
  },
  receiveButton: {
    // width: 350,
    backgroundColor: '#2196F3',
    // padding: 18,
    paddingVertical: 20,
    paddingHorizontal: 130,
    borderRadius: 8,
    marginTop: 80,
  },
});
