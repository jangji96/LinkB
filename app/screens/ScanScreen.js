import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Dimensions,
    StatusBar,
    ToastAndroid,
} from 'react-native';
import { Container, Header, Left, Body, Button, Right, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import QRCodeScanner from 'react-native-qrcode-scanner';


const SCREEN_HEIGHT = Dimensions.get("window").height;

class ScanScreen extends React.Component {
    state = {
        result: null
    }

    onSuccess = async (elem) => {
        this.setState({
            result: elem
        })
        console.log(elem)
        await ToastAndroid.show('스캔완료', ToastAndroid.SHORT);
        this.props.navigation.navigate('Detail', { event_idx: 1 })
    };

    render() {
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
                <View>
                    <QRCodeScanner
                        reactivate={true}
                        reactivateTimeout={1000}
                        onRead={this.onSuccess}
                        showMarker={true}
                        checkAndroid6Permissions={true}
                        markerStyle={{ borderColor: "#311957" }}
                        cameraStyle={{ height: SCREEN_HEIGHT }}
                    />
                </View>
                <StatusBar
                    backgroundColor="#311957"
                    style={{ color: "white" }}></StatusBar>
            </View>
        )
    }
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
    // title_text: {
    //     fontFamily: "NotoSans-Bold",
    //     color: 'white',
    // },
    // JoinContainer1: {
    //     backgroundColor: '#311957',
    //     flex: 2,
    //     alignItems: "center"
    // },
    // JoinContainer2: {
    //     backgroundColor: '#311957',
    //     justifyContent: "center",
    //     flex: 9,
    //     alignItems: "center"
    // },
    // JoinContainer3: {
    //     backgroundColor: '#311957',
    //     justifyContent: "center",
    //     flex: 3,
    //     alignItems: "center"
    // },
    // welcome_text: {
    //     marginTop: SCREEN_HEIGHT * 0.07,
    //     color: 'white',
    //     fontFamily: "NotoSans-Light",
    //     textAlign: 'center',
    // },
    // ButtonStyle: {
    //     color: 'white',
    //     marginTop: SCREEN_HEIGHT * 0.16,
    //     width: '35%',
    //     height: SCREEN_HEIGHT * 0.05,
    //     borderColor: 'white',
    //     borderRadius: 100,
    //     borderWidth: 1,
    //     textAlign: 'center',
    //     fontFamily: "NotoSans-Regular",
    //     textAlignVertical: "center",
    // }
});

export default ScanScreen;