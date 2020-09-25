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
import { TextInput } from "react-native-gesture-handler";

const JoinSelectScreen = ({navigation,route}) => {
    return (
        <View style={styles.container}>
            <View style={styles.JoinContainer1}></View>
            <View style={styles.JoinContainer2}>
                <Text style={{marginTop:50, color:'white'}} onPress={() => navigation.navigate('Join1')}>선택하기</Text>
            </View>
            <View style={styles.JoinContainer3}></View>
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

export default JoinSelectScreen;