import React,{useEffect,useState} from 'react'
import { View, Text, Pressable } from 'react-native'
import i18n from 'i18n-js';
import en from "./strings/en.json"
import fn from "./strings/fn.json"

function Home (props){

    const [langyage, setLangyage] = useState("en");
    const navigation = props.navigation
    useEffect(()=>{
        i18n.fallbacks = true;
        i18n.translations = {
          en,
          fn,
        };
        i18n.locale=langyage 
    },[langyage])

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text onPress={() => navigation.jumpTo('Profile', { owner: 'Michaś' })}
            >{i18n.t('doorstap')}</Text>
              <Pressable
            style={({ pressed }) => [
                {
                  backgroundColor: pressed
                    ? "#777"
                    : "#dedede",
                },
                {paddingVertical:10,paddingHorizontal:5,borderRadius:10,marginTop:20}
              ]}
                onPress={()=>{setLangyage(langyage==="en"?"fn":"en")}}
            >
                <Text>
                    Change Language
                </Text>
            </Pressable>
          
            

        </View>
    )
}

export default Home