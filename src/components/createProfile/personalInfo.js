import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Logo from '../../../assets/logo.png';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign'
import AntIcon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';
import Input from '../Input'
import SecurityInput from '../securityInput'
import Button from '../Button'
import { set } from 'react-native-reanimated';

export default function PersonalInfo(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isHidden, setIsHidden]= useState(true)

  function changeIsHidden() {
    setIsHidden(!isHidden)
  }

  return (
    <ScrollView style={{ backgroundColor: '#FFFF' }} >
      <View style={styles.container} >
        <View style={styles.arrow} >
          <Icon name="arrowleft" size={30} />
        </View>
        <View style={styles.imageContainer} >
          <Image resizeMode="contain" source={Logo} style={{ height: 150 }} />
        </View>
        <View>
          <Input label="First Name*" />
        </View>
        <View>
          <Input label="Last Name*" />
        </View>
        <View>
          <Input label="Email Address*" />
        </View>
        <View>
          <SecurityInput changeIsHidden={changeIsHidden}  isHidden={isHidden} label="Password*" />
        </View>
        <View>
          <SecurityInput changeIsHidden={changeIsHidden}  isHidden={isHidden} label="Re-Enter Password*" />
        </View>
        <View style={styles.checkboxContainer} >
          <CheckBox
            style={{ backgroundColor: 'white' }}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              color: '#9A9A9A',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>     I agree Terms & Conditions & Privacy Policy
          </Text>
        </View>
        <View style={{marginTop:10}} >
          <Button  title="Next" backgroundColor="#2196F3" color="#FFFF" />
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    padding: 10
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 10
  },
  arrow: {
    alignSelf: 'flex-start',

  },
  checkboxContainer:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:10
    // justifyContent:'space-between',
    // padding:5
  }
});
