import React from "react";
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    StatusBar
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { TextInput } from "react-native-gesture-handler";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const ApplyCompleteScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Text style={styles.Header_text}>신청완료</Text>
                    </Left>
                </Header>
            </View>
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ alignItems: 'center', marginTop: '30%' }}>
                    <Text style={styles.Logo_text_1}>LINKB</Text>
                    <Text style={styles.Logo_text_2}>WE LINK BUSINESS</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '30%' }}>
                    <Text style={styles.Logo_text_1}>참가 신청이 완료되었습니다!</Text>
                </View>
                <View style={{ alignItems: 'center', marginTop: '30%' }}>
                    <Text style={{ width: '55%', height: 40, alignSelf: 'center', borderColor: '#311957', borderWidth: 1.5, backgroundColor: 'white', borderRadius: 100, textAlign: 'center', paddingStart: 5, textAlignVertical: "center", fontSize: 14,color: '#311957',fontSize: 17, fontFamily: "NotoSans-Bold", }}>참개내역 보러가기</Text>
                    <Text style={{ width: '55%', height: 40, alignSelf: 'center', borderColor: '#311957', borderWidth: 1.5, backgroundColor: '#311957', borderRadius: 100, textAlign: 'center', paddingStart: 5, textAlignVertical: "center", fontSize: 14, marginTop: 10,color: 'white',fontSize: 17, fontFamily: "NotoSans-Bold" }} onPress={() => navigation.navigate('Main')}>홈으로 가기</Text>
                </View>
            </View>

            <StatusBar
                backgroundColor="#311957"
                style={{ color: "white" }}></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    Header_text: {
        marginLeft: '5%',
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 17,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#311957'
    },
    title_text: {
        fontFamily: "NotoSans-Bold",
        color: 'white',
    },
    circle_text: {
        width: SCREEN_HEIGHT * 0.10,
        height: SCREEN_HEIGHT * 0.10,
        color: 'white',
        fontSize: 13,
        fontFamily: "NotoSans-Medium",
        backgroundColor: '#503B70',
        textAlign: 'center',
        textAlignVertical: "center",
        borderRadius: 45,
        margin: 5,
    },
    button: {
        width: '75%',
        height: SCREEN_HEIGHT * 0.08,
        backgroundColor: 'white',
        textAlign: 'center',
        textAlignVertical: "center",
        borderColor:'#311957',
        borderWidth:2,
        borderRadius: 20,
        margin: 7,
        flexDirection: 'row',
    },
    button_text: {
        color: '#311957',
        fontSize: 17,
        fontFamily: "NotoSans-Bold",
    },
    Logo_text_1: {
        fontFamily: "NotoSans-ExtraBold",
        color: '#311957',
        fontSize: 21,
    },
    Logo_text_2: {
        fontFamily: "NotoSans-Regular",
        color: '#311957',
        fontSize: 7,
        marginTop: -7,
    },
    button: {
      width: '75%',
      height: SCREEN_HEIGHT * 0.08,
      backgroundColor: 'white',
      textAlign: 'center',
      textAlignVertical: "center",
      borderRadius: 20,
      margin: 7,
      flexDirection: 'row',
    },
    button_text: {
      color: '#311957',
      fontSize: 17,
      fontFamily: "NotoSans-Bold",
    },
});

export default ApplyCompleteScreen;