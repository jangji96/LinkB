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

class MessengerDetailScreenPresenter extends React.Component {
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate("Messenger")}>
                            <Icon color='white' name='chevron-back-outline' size={30} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.Header_text}>스타트허브</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        <Button transparent>
                            <Icon color='white' name='ellipsis-vertical' size={20} />
                        </Button>
                    </Right>

                </Header>
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

export default MessengerDetailScreenPresenter;