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
import { Container, Header, Left, Body, Button, Right, Title } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SCREEN_HEIGHT = Dimensions.get("window").height;

const ScanScreen = ({ navigation, route }) => {
    return (
        <View>
            <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AntDesign color='white' name='arrowleft' size={25} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 6, }}>
                        <Text style={styles.Header_text}>QR코드 스캔</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>

                    </Right>
                </Header>
            <StatusBar
                backgroundColor="#311957"
                style={{ color: "white" }}></StatusBar>
        </View>
    )
}

const styles = StyleSheet.create({
    Header_text: {
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 17,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#311957',
    },
    title_text: {
        fontFamily: "NotoSans-Bold",
        color: 'white',
    },
    JoinContainer1: {
        backgroundColor: '#311957',
        flex: 2,
        alignItems: "center"
    },
    JoinContainer2: {
        backgroundColor: '#311957',
        justifyContent: "center",
        flex: 9,
        alignItems: "center"
    },
    JoinContainer3: {
        backgroundColor: '#311957',
        justifyContent: "center",
        flex: 3,
        alignItems: "center"
    },
    welcome_text: {
        marginTop: SCREEN_HEIGHT * 0.07,
        color: 'white',
        fontFamily: "NotoSans-Light",
        textAlign: 'center',
    },
    ButtonStyle: {
        color: 'white',
        marginTop: SCREEN_HEIGHT * 0.16,
        width: '35%',
        height: SCREEN_HEIGHT * 0.05,
        borderColor: 'white',
        borderRadius: 100,
        borderWidth: 1,
        textAlign: 'center',
        fontFamily: "NotoSans-Regular",
        textAlignVertical: "center",
    }
});

export default ScanScreen;