import React from "react"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Swiper from 'react-native-swiper'
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { color } from "react-native-reanimated";

const SCREEM_WIDTH = Dimensions.get("window").width;

class NoticeScreenPresenter extends React.Component {
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Body style={{ marginLeft: '5%' }}>
                        <Text style={styles.Header_text}>알림</Text>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Icon color='white' name='trash-outline' size={25} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ alignSelf: 'center', width: '90%', height: '100%' }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MessengerDetail')}>
                        <View style={{ flexDirection: 'row',marginTop:'5%' }}>
                            <Image style={{ width: SCREEM_WIDTH * 0.14, height: SCREEM_WIDTH * 0.14 }} source={require("../image/user.png")}></Image>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>스타트허브 님의 메세지가 도착했습니다.</Text>
                        </View>
                    </TouchableOpacity>

                </ScrollView>
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
})
export default NoticeScreenPresenter;