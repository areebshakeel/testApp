import React from 'react'
import MealImage from '../../assets/meal.png'
import ThankYou from '../../assets/thankYou.png'
import {View,StyleSheet,Text,Image} from 'react-native'
 function OrderCompleteView(){
     return(
     <View style={styles.container}>
         <View style={{alignItems:"center"}}>
          <Image
            source={MealImage}
            resizeMode="contain"
            style={{width:250, height: 250, marginTop: 8}}
          />
           <Image
           resizeMode="contain"
            source={ThankYou}
            style={{width: 230, height: 200, marginTop: 8}}
          />
          <Text  style={{
          fontSize: 20,
          fontWeight:'bold',
          color: '#464951',
          textAlign: 'center',
        //   marginTop: 10,
          width: 250,}} >Enjoy your meal</Text>
        </View>
     </View>)
 }
 export default OrderCompleteView
 const styles=StyleSheet.create({
    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50 ,
        // lineHeight: 300,
        // flexDirection: 'column',
      },
 })
 