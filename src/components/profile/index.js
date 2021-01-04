import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import ProfileImage from '../../../assets/user-image.png'
import CameraIcon from '../../../assets/camera-icon.png'
import CLoseImage from 'react-native-vector-icons/AntDesign'
import ProfileDetails from './profileDetails'
import UserImage from '../../../assets/profile-avatar.png'
import OrdersImage from '../../../assets/my-order-icon.png'
import WalletImage from '../../../assets/wallet-icon-new.png'
import DisputeImage from '../../../assets/information.png'
import LogoutImage from '../../../assets/logout.png'

export default function Profile() {
    return (
        <View style={styles.container} >
            <View>
                <CLoseImage name="close" size={30} />
            </View>
            <View style={styles.imageContainer} >
                <Image source={ProfileImage} style={{ borderRadius: 100 }} />
                <Image source={CameraIcon} style={{ alignSelf: 'center', position: 'absolute', right: 1, top: 120 }} />
            </View>
            <View style={{marginTop:20,}}>
                <ProfileDetails text="Manage Your Profile" icon={UserImage} />
                <View style={styles.line} ></View>
                <ProfileDetails text="Orders" icon={OrdersImage} />
                <View style={styles.line} ></View>
                <ProfileDetails text="Favourites" icon={WalletImage} />
                <View style={styles.line} ></View>
                <ProfileDetails text="My Wallet" icon={DisputeImage} />
                <View style={styles.line} ></View>
                <ProfileDetails text="Disputes" icon={DisputeImage} />
                <View style={styles.line} ></View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    imageContainer: {
        alignSelf: 'center'
    },
    container: {
        padding: 10
    },
    line:{
        // borderTopWidth:1,
        borderColor:'#464951',
        // marginTop:5
        
    }
})