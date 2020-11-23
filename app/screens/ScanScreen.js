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
                        cameraStyle={{ height: SCREEN_HEIGHT}}
                    >
                    </QRCodeScanner>
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
});

export default ScanScreen;