import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    Button,
    StatusBar
  } from 'react-native';
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  }from 'react-native/Libraries/NewAppScreen';

const Join4Screen = ({navigation,route}) => {
    return (
        <View>
            <Text>회원가입4</Text>
            
            <Text onPress={() => navigation.navigate('Login')}>다음</Text>
        </View>
    )        
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      flexDirection:'column'
    },
    JoinContainer1:{
      backgroundColor:'#704591',
      flex:2,
      alignItems:"center"
    },
    JoinContainer2:{
      backgroundColor:'#704591',
      justifyContent: "center",
      flex:8,
      alignItems:"center"
    },
    JoinContainer3:{
        backgroundColor:'#704591',
        justifyContent: "center",
        flex:3,
        alignItems:"center"
    }
});
export default Join4Screen;