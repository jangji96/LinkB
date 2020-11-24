import React from "react"
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    StatusBar,
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get("window").width;

class MessengerScreenPresenter extends React.Component {
    state = {
        refreshing: false
    }
    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        setTimeout(()=>this.setState({
            refreshing: false
        }),1000)
        
    }
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Body style={{ marginLeft: '5%' }}>
                        <Text style={styles.Header_text}>메신저</Text>
                    </Body>
                    <Right >
                        <Button transparent>
                            <Icon color='white' name='search-sharp' size={25} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ alignSelf: 'center', marginTop: 20, width: '90%', height: '100%' }}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }
                >
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MessengerDetail')}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image style={{ width: SCREEN_WIDTH * 0.18, height: SCREEN_WIDTH * 0.18 }} source={require("../image/user.png")}></Image>
                            <View style={{ width: '57%' }}>
                                <Text style={{ fontSize: 16 }}>스타트허브</Text>
                                <Text numberOfLines={2} style={{ fontSize: 12 }}>안녕하세요 스타트허브입니다. 다음주 목요일 미팅 괜찮으신가요?</Text>
                            </View>
                            <View style={{}}>
                                <Text>오전 10:00</Text>
                            </View>
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
export default MessengerScreenPresenter;