
import React,{useEffect,useState} from 'react';
import {
  
  View,
  Text,
  
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import AnimatedTabBar from '@gorhom/animated-tabbar';
import Icon from 'react-native-vector-icons/Ionicons'
// import HomeScreen from './Home'
// import Profile from './Profile'
import Login from './src/components/login';
import PaymentScreen from './src/components/index'
// import OrderCompleteView from './android/app/src/components/orderComplete/index.js'
import WelcomeScreen from './src/components/welcomeScreen'
import CreateProfile from './src/components/createProfile'
import PaymentMethod from './src/components/payment method'
import ForgotPasswordScreen from './src/components/forgotPassword'
import Wallet from './src/components/Wallet'
import ActiveOrder from './src/components/activeOrder'
import AddReview from './src/components/addReview'

// const tabs = {
//   HomeScreen: { // < Screen name
//     labelStyle: {
//       color: '#5B37B7',
//     },
//     icon: {
//       component:()=> <Icon name="home" size={30} color="black"/>,
//       activeColor: 'rgba(91,55,183,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(223,215,243,1)',
//       inactiveColor: 'rgba(223,215,243,0)',
//     },
//   },
//   Profile: { // < Screen name
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component:()=> <Icon name="table" size={30} color="black"/>,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
//   ProfileName : { // < Screen name
//     labelStyle: {
//       color: '#1194AA',
//     },
//     icon: {
//       component:()=> <Icon name="table" size={30} color="black"/>,
//       activeColor: 'rgba(17,148,170,1)',
//       inactiveColor: 'rgba(0,0,0,1)',
//     },
//     background: {
//       activeColor: 'rgba(207,235,239,1)',
//       inactiveColor: 'rgba(207,235,239,0)',
//     },
//   },
// };
// const Tabs = AnimatedTabBarNavigator()
function App(){
  
  
  return (
    <View>
      
      {/* <WelcomeScreen/> */}
      {/* <PaymentScreen/> */}
<<<<<<< HEAD
      <Login/>
      {/* <CreateProfile/> */}
=======
      {/* <Login/> */}
      <CreateProfile/>
      {/* <PaymentMethod/> */}
      {/* <ForgotPasswordScreen/> */}
      {/* <Wallet/> */}
      {/* <ActiveOrder/> */}
      {/* <AddReview/> */}


>>>>>>> 7b9892b2b51b661ba64fad65d3302fa811b60d24
    </View>
  )

}
  
  //   <NavigationContainer>
  //   <Tabs.Navigator
  //   // default configuration from React Navigation
  //   tabBarOptions={{
  //     activeTintColor: "#5290fa",
  //     inactiveTintColor: "#fff",
  //     activeTabBackgrounds:"#be0000",
  //     tabStyle:{backgroundColor:"#5290fa"}
  //   }}
  //   appearence={{
  //     activeTabBackgrounds:"#fff",
  //     dotCornerRadius:15,
  //     dotSize:"small"
  //   }}
  // >
        
  //     <Tabs.Screen
      
  //       name="HomeScreen"
  //       component={HomeScreen}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //             <Icon
  //                 name="home"
  //                 size={size ? size : 30}
  //                 color={focused ? color : "#222222"}
  //                 focused={focused}
  //                 color={color}
  //             />
  //         ),
  //         title:"Home"
  //       }}
  //     />
  //       <Tabs.Screen
  //       name="Profile"
  //       component={Profile}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //             <Icon
  //                 name="md-locate"
  //                 size={size ? size : 30}
  //                 color={focused ? color : "#222222"}
  //                 focused={focused}
  //                 color={color}
  //             />
  //         )
  //       }}
  //     />
  //       <Tabs.Screen
  //       name="ProfileName"
  //       component={Profile}
  //       options={{
  //         tabBarIcon: ({ focused, color, size }) => (
  //             <Icon
  //                 name="ios-person"
  //                 size={size ? size : 30}
  //                 color={focused ? color : "#222222"}
  //                 focused={focused}
  //                 color={color}
  //             />
  //         ),
  //         title:"User"
  //       }}
  //     />
  
  //   </Tabs.Navigator>
  // </NavigationContainer>
    
  



export default App;
