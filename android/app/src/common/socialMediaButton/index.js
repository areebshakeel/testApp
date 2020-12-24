import {View} from 'native-base';
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

function SocialMediaButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.backgroundColor
          ? props.backgroundColor
          : '#2196F3',
        height: 50,
        borderRadius: 8,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        {props.icon() ? props.icon() : null}

      <Text
        style={{
          color: props.color ? props.color : 'white',
          textAlign: 'center',
          color: 'white',
          textAlignVertical: 'center',
          fontSize: 20,
          fontWeight: 'bold',
          paddingLeft:20
        }}>
        {props.title || 'Dummy Text'}
      </Text>
            </View>

    </TouchableOpacity>
  );
}
export default SocialMediaButton;
