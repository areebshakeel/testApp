import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import VehicleImage from '../../../assets/vehicle-registration-img.png';
import Icon from 'react-native-vector-icons/AntDesign'
import Input from '../Input'
import Button from '../Button'
export default function VehicleRegistration(props) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.arrow} >
          <Icon name="arrowleft" size={30} />
          <Text style={styles.skip}>Skip</Text>
        </View>
        <View style={{ padding: 4, marginTop: 20 }}>
          <Text style={styles.vehicleRegisterText}>Vehicle Registration</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image
            resizeMode="contain"
            source={VehicleImage}
          />
        </View>
        <View style={styles.inputContainer} >
          <Input label="License Plate Number*" />
        </View>
        <View style={styles.inputContainer} >
          <Input label="Make*" />
        </View>
        <View style={styles.inputContainer} >
          <Input label="Model*" />
        </View>
        <View style={styles.inputContainer} >
          <Input label="Year*" />
        </View>
        <View style={styles.inputContainer} >
          <Input label="Color*" />
        </View>
        <View style={styles.inputContainer} >
          <Button title="Register Vehicle" backgroundColor="#2196F3" color="#FFFF" />
        </View>

      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FFFF',
  },
  vehicleRegisterText: {
    color: '#2196F3',
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
  },
  imageContainer: {
    alignSelf: 'center',
    marginTop: 20,
    marginBottom:20
  },
  arrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:10
  },
  
  inputContainer:{
    marginTop:5
  },
  skip:{
    fontSize:20,
    fontFamily:'Poppins-SemiBold',
    color:"#464951"
  }

});
