import React from 'react'
import { View, Text, Image, TextInput, StyleSheet } from 'react-native'
import { Container, Content } from 'native-base';
import Logo from '../assets/logo.png'
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons'
import AntIcon from 'react-native-vector-icons/AntDesign'
import FeatherIcon from 'react-native-vector-icons/Feather'
import EntypoIcon from 'react-native-vector-icons/Entypo'


const Login = () => {
    return (
        //    <Container>
        //        <Content style={{flex:1,backgroundColor:"red"}}>
        //            <View>
        //                <Image source={Logo} style={{width:100, height:100}}  />
        //                <Text>Find food you love</Text>
        //            </View>
        //        </Content>
        //    </Container>

        <View>
            <ScrollView>
                <View style={styles.container}>
                    <Image source={Logo} style={{ width: 100, height: 100 }} />
                    <Text style={styles.logoText}>Find food you love</Text>
                    <Text style={styles.description}>Discover the best food from over 1,000 resturants</Text>
                </View>

                <View style={styles.inputContainer} >
                    <View style={styles.inputs}>
                        <AntIcon name="user" size={30} color="#707070" style={{ marginTop: 5 }} />
                        <TextInput placeholder="UserName" />
                    </View>
                    <View style={styles.inputs}>
                        <AntIcon name="lock" size={30} color="#707070" style={{ marginTop: 5 }} />
                        <TextInput placeholder="Password" />
                        <EntypoIcon name="eye-with-line" size={30} color="#707070" style={{ marginTop: 5, marginLeft: 180 }} />

                    </View>
                    <View>
                        
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15,
        lineHeight: 300
    },
    logoText: {
        color: "#2196F3",
        fontSize: 30,
        fontWeight: 'bold',
        marginTop: 10
    },
    description: {
        color: "#9A9A9A",
        width: 205,
        textAlign: 'center',
        marginTop: 10
    },
    inputs: {
        flex: 1,
        flexDirection: "row",
        // justifyContent:"space-around",
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderLeftWidth: 1,
        borderTopWidth: 1,
        borderColor: "#707070",
        borderRadius: 10,
        padding: 3

    },
    inputContainer: {
        padding: 10, 
        flex: 1,
        flexDirection:'column',
        justifyContent:'center',
        borderTopWidth:1,
        borderBottomWidth:1,
         borderColor:'black'
    }

})
