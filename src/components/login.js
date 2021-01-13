import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  Switch,
  Button,
  TouchableOpacity,
} from 'react-native';
import { Container, Content } from 'native-base';
import Logo from '../../assets/logo.png';
import { ScrollView } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SocialMeidaButton from '../common/socialMediaButton';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from "react-redux";
import {userLoginRequest} from '../redux/user/userActions'

const Login = ({updateTheUser,userData}) => {
  const [userName, setUserName] = useState('')
  const [password,setPassword] = useState('')
  const [isHidden, setIsHidden] = useState(true);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(!isEnabled);
  
  const signIn=()=>{
    console.log('onPressEvent-->',userName)
    let obj={email:userName,password}
    updateTheUser(obj)  
  }
console.log(userData,'TEST ABCBAB CAB')

  return (
    //    <Container>
    //        <Content style={{flex:1,backgroundColor:"red"}}>
    //            <View>
    //                <Image source={Logo} style={{width:100, height:100}}  />
    //                <Text>Find food you love</Text>
    //            </View>
    //        </Content>
    //    </Container>

    <ScrollView>
      <View style={{marginTop:50}}>
      <View style={styles.container}>
        <View style={{width:200, height:180}} />
        {/* <Image resizeMode="contain" source={Logo} style={{ width: 200, height: 180 }} /> */}
        <Text style={styles.logoText}>Find food you love</Text>
        <Text style={styles.description}>
          Discover the best food from over 1,000 resturants
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputs}>
          <AntIcon
            name="user"
            size={30}
            color="#9A9A9A"
            style={{ marginTop: 5 }}
          />
          <TextInput onChangeText={(value)=>setUserName(value)} style={styles.inputText} placeholder="UserName" placeholderTextColor="#9A9A9A" />
        </View>
        <View style={styles.inputs}>
          <AntIcon
            name="lock"
            size={30}
            color="#9A9A9A"
            style={{ marginTop: 5 }}
          />
          <TextInput
            secureTextEntry={isHidden ? true : false}
            style={styles.inputText}
            placeholder="Password"
            onChangeText={(value)=>setPassword(value)}
            placeholderTextColor="#9A9A9A"

          />
          {isHidden ? (
            <EntypoIcon
              Button
              onPress={() => setIsHidden(false)}
              name="eye-with-line"
              size={25}
              color="#9A9A9A"
            />
          ) : (
              <EntypoIcon
                Button
                onPress={() => setIsHidden(true)}
                name="eye"
                size={25}
                color="#9A9A9A"
              />
            )}
        </View>
      </View>
      <View style={styles.remberContainer}>
        <View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Switch onValueChange={toggleSwitch} value={isEnabled} />
        </View>
      </View>
      <TouchableOpacity onPress={signIn} style={styles.authBtnContainer}>
        <View style={styles.authButtonText}>
          <Text style={styles.authBtn}>Sign In</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
      </View>
      <View style={styles.borderLineContainer}>
        <View style={styles.borderLine}></View>
        <Text
          style={{
            paddingLeft: 15,
            paddingRight: 5,
            fontSize: 18,
            // fontWeight: 'bold',
            color: '#2196F3',
          }}>OR
        </Text>
        <View style={styles.borderLine}></View>
      </View>
      <View style={styles.socialMediaButtonContainer}>
        <SocialMeidaButton
          color="white"
          backgroundColor="#3b5998"
          title="connect with Facebook"
          icon={() => <Icon name="facebook" size={30} color="white" />}
        />
      </View>
      <View style={styles.socialMediaButtonContainer}>
        <SocialMeidaButton
          color="white"
          backgroundColor="#2196F3"
          title="connect with Google"
          icon={() => <Icon name="google" size={30} color="white" />}
        />
      </View>
      <View style={styles.haveAnAccountContainer}>
        <Text style={{ paddingLeft: 4 }}>Do You Have An Account?</Text>
        <Text
          style={{
            color: '#2196F3',
            textDecorationLine: 'underline',
            fontStyle: 'italic',
          }}>
          {' '}
          Sign Up
        </Text>
      </View>
      </View>
    </ScrollView>
  );
};
const mapDispatchToprops=(dispatch)=>{
  return {
    updateTheUser: (userObj) => dispatch(userLoginRequest(userObj))
}
}
function mapStateToProps(state, ownProps) {
  // const { visibilityFilter } = state
  const userData=state.userReducer.user?.data || {}
  // const { id } = ownProps
  // const todo = getTodoById(state, id)
  const{token, profile:{email},Message}=userData
console.log("token=>> ",token, "email==>",email)
  // // component receives additionally:
  return {userData  }
}export default connect(mapStateToProps,mapDispatchToprops) (Login)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    lineHeight: 300,
  },
  logoText: {
    color: '#2196F3',
    fontSize: 30,
    fontFamily:'Poppins',
    fontWeight: 'bold',
    marginTop: 6,
  },
  description: {
    color: '#9A9A9A',
    width: 205,
    fontWeight:'bold',
    textAlign: 'center',
    marginTop: 6,
    fontFamily:'Poppins'
  },
  inputContainer: {
    alignItems: 'center',
  },
  inputs: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderTopWidth: 1,
    borderColor: '#707070',
    borderRadius: 10,
    padding: 4,
    margin: 8,
    width: '95%',
  },

  inputText: {
    maxWidth: '80%',
    minWidth: '80%',
    textAlign: 'left',
  },
  remberContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
    marginBottom: 4,
    width: '95%',
  },
  rememberText: {
    fontSize: 18,
    color: '#9A9A9A'
    // textAlign:'center'
  },
  authBtnContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#2196F3',
    height: 50,
    borderRadius: 8,
  },
  authBtn: {
    textAlign: 'center',
    color: 'white',
    textAlignVertical: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  authButtonText: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetPasswordContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    margin: 8,
    width: '95%',
  },
  forgetPasswordText: {
    fontSize: 16,
    color: '#2196F3',
    textDecorationLine: 'underline',
  },
  borderLine: {
    marginLeft: 15,
    borderTopColor: '#2196F3',
    borderWidth: 1,
    borderStyle: 'solid',
    width: '38%',
    borderBottomWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    backgroundColor: '#2196F3',
  },
  borderLineContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 4
  },
  socialMediaButtonContainer: {
    // flex: 1,
    alignItems: 'center',
    margin: 10,
    width: '95%',
  },
  haveAnAccountContainer: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
