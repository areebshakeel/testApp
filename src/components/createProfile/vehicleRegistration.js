import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import VehicleImage from '../../../assets/vehicle-registration-img.png';
export default function VehicleRegistration(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.vehicleRegisterText}>Vehicle Registration</Text>
        <Image
          resizeMode="contain"
          source={VehicleImage}
          style={{width: 300, height: 170, marginTop:40}}
        />
        <View style={{marginTop:20}}>
          <View style={styles.allInputsContainer}>
            <Text style={styles.label}>License Plate Number*</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs} />
            </View>
          </View>
          <View style={styles.allInputsContainer}>
            <Text style={styles.label}>Make*</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs} />
            </View>
          </View>
          <View style={styles.allInputsContainer}>
            <Text style={styles.label}>Model*</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs} />
            </View>
          </View>
          <View style={styles.allInputsContainer}>
            <Text style={styles.label}>Year*</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs} />
            </View>
          </View>
          <View style={styles.allInputsContainer}>
            <Text style={styles.label}>Color*</Text>
            <View style={styles.inputContainer}>
              <TextInput style={styles.inputs} />
            </View>
          </View>
          <View style={styles.allInputsContainer}>
            <TouchableOpacity
              onPress={() => props.badgeFalse()}
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
    backgroundColor: 'white',
  },
  vehicleRegisterText: {
    color: '#2196F3',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    textAlign: 'left',
    marginRight: 150,
    marginTop:40
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
  label: {
    color: '#9A9A9A',
    fontWeight: 'bold',
  },
  nextButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 130,
    borderRadius: 8,
    marginTop:8
  },
  allInputsContainer: {
    padding: 4,
  },
});
