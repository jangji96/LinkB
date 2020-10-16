import React from 'react';
import { StyleSheet, Text, View, ImageBackground, StatusBar } from "react-native";

export default class Loading extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: '#311258', width: '100%', height: '100%' }}>
                <Text style={styles.Logo_text_1}>LINKB</Text>
                <Text style={styles.Logo_text_2}>WE LINK BUSINESS</Text>
                <StatusBar
                    backgroundColor="#311957"
                    style={{ color: "white" }}></StatusBar>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Logo_text_1: {
        marginTop:'90%',
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 21,
        alignSelf:'center'
    },
    Logo_text_2: {
        fontFamily: "NotoSans-Regular",
        color: 'white',
        fontSize: 7,
        marginTop: -7,
        alignSelf:'center'
    }
})