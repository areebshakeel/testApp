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
import Logo from '../assets/logo.png';
import { ScrollView } from 'react-native-gesture-handler';
import AntIcon from 'react-native-vector-icons/AntDesign';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SocialMeidaButton from '../common/socialMediaButton';
import Icon from 'react-native-vector-icons/AntDesign';

const Login = () => {
  const [isHidden, setIsHidden] = useState(true)
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    //    <Container>
    //        <Content style={{flex:1,backgroundColor:"red"}}>
    //            <View>
    //                <Image source={Logo} style={{width:100, height:100}}  />
    //                <Text>Find food you love</Text>
    //            </View>
    //        </Content>
    //    </Container>

    <ScrollView >
      <View style={styles.container}>
        <Image source={Logo} style={{ width: 100, height: 100 }} />
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
            color="#707070"
            style={{ marginTop: 5 }}
          />
          <TextInput style={styles.inputText} placeholder="UserName" />
        </View>
        <View style={styles.inputs}>
          <AntIcon
            name="lock"
            size={30}
            color="#707070"
            style={{ marginTop: 5 }}
          />
          <TextInput secureTextEntry={isHidden ? true : false} style={styles.inputText} placeholder="Password" />
          {isHidden ? <EntypoIcon Button onPress={() => setIsHidden(false)} name="eye-with-line" size={25} color="#707070" /> :
            <EntypoIcon Button onPress={()=>setIsHidden(true)} name="eye" size={25} color="#707070" />
          }
        </View>
      </View>
      <View style={styles.remberContainer}>
        <View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </View>
        <View>
          <Switch onValueChange={toggleSwitch}
        value={isEnabled} />
        </View>
      </View>
      <TouchableOpacity style={styles.authBtnContainer}>
        <View style={styles.authButtonText}>
          <Text style={styles.authBtn}>Login</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.forgetPasswordContainer}>
        <Text style={styles.forgetPasswordText}>Forgot Password?</Text>
      </View>
      <View style={styles.borderLineContainer}>
        <View style={styles.borderLine}></View>
        <Text
          style={{
            paddingLeft: 10,
            paddingRight: 10,
            fontSize: 18,
            color: '#2196F3',
          }}>
          OR
          </Text>
        <View style={styles.borderLine}></View>
      </View>
      <View style={styles.socialMediaButtonContainer}>
        <SocialMeidaButton
          color="white"
          backgroundColor="#3b5998"
          title="Facebook"
          icon={() => <Icon name="facebook-square" size={30} color="white" />}
        />
      </View>
      <View style={styles.socialMediaButtonContainer}>
        <SocialMeidaButton
          color="white"
          backgroundColor="#2196F3"
          title="Google"
          icon={() => <Icon name="mail" size={30} color="white" />}
        />
      </View>
      <View style={styles.haveAnAccountContainer}>
        <Text style={{ paddingLeft: 4 }}>Do You Have An Account?</Text>
        <Text style={{ color: "#2196F3", textDecorationLine: 'underline', fontStyle: 'italic' }}> Sign Up</Text>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    lineHeight: 300,
  },
  logoText: {
    color: '#2196F3',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    color: '#9A9A9A',
    width: 205,
    textAlign: 'center',
    marginTop: 10,
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
    margin: 10,
  },

  inputText: {
    maxWidth: 250,
    minWidth: 300,

    textAlign: 'left',
  },
  remberContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    marginBottom: 10,
  },
  rememberText: {
    fontSize: 18,
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
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 10,
  },
  forgetPasswordText: {
    fontSize: 16,
    color: '#0000EE',
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
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialMediaButtonContainer: {
    flex: 1,
    margin: 10,
  },
  haveAnAccountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
