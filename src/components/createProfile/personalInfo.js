import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Logo from '../../../assets/welcome.png';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';
import CheckBox from '@react-native-community/checkbox';

export default function PersonalInfo(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={Logo}
          resizeMode="contain"
          style={{width: 200, height: 120}}
        />
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>First name*</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs} />
          </View>
        </View>
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>Last name*</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs} />
          </View>
        </View>
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>Email Address*</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.inputs} />
          </View>
        </View>
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>Password*</Text>

          <View style={styles.passwordInputContainer}>
            <View style={{flexDirection: 'row'}}>
              <AntIcon
                name="lock"
                size={30}
                color="#9A9A9A"
                style={{marginTop: 10, marginRight: 30}}
              />
              <TextInput style={styles.inputs} />
              <EntypoIcon
                name="eye-with-line"
                size={30}
                color="#9A9A9A"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View style={styles.allInputsContainer}>
          <Text style={styles.label}>Re-Enter Password*</Text>

          <View style={styles.passwordInputContainer}>
            <View style={{flexDirection: 'row'}}>
              <AntIcon
                name="lock"
                size={30}
                color="#9A9A9A"
                style={{marginTop: 10, marginRight: 30}}
              />
              <TextInput style={styles.inputs} />
              <EntypoIcon
                name="eye-with-line"
                size={30}
                color="#9A9A9A"
                style={{marginTop: 10}}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            // width:'90%',
            marginRight: 60,
          }}>
          <CheckBox
            style={{backgroundColor: 'white'}}
            disabled={false}
            value={toggleCheckBox}
            onValueChange={(newValue) => setToggleCheckBox(newValue)}
          />
          <Text
            style={{
              color: '#9A9A9A',
              fontSize: 15,
              fontFamily: 'Poppins-Regular',
            }}>
            I agree Terms & Conditions & Privacy Policy
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => props.flagFalse()}
          style={styles.nextButton}>
          <Text
            style={{
              color: 'white',
              fontFamily: 'Poppins-SemiBold',
              fontSize: 15,
            }}>
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    backgroundColor: 'white',
    
  },
  inputs: {
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderRightWidth: 1,
    maxWidth: 200,
    minWidth: 250,
    // borderColor: '#707070',
  },
  inputContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#707070',
    paddingHorizontal: 65,
    borderRadius: 8,
    backgroundColor: '#F8F8F8',
    // flexDirection:'row',
    // justifyContent:'space-between'
  },
  passwordInputContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#707070',
    backgroundColor: '#F8F8F8',

    paddingHorizontal: 20,
    borderRadius: 8,
    flexDirection: 'row',
    // padding:2,
    justifyContent: 'space-between',
    // marginRight:20
  },
  label: {
    color: '#9A9A9A',
  },
  allInputsContainer: {
    padding: 6,
  },
  nextButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 180,
    borderRadius: 8,
  },
});
