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
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import { GiftedChat } from 'react-native-gifted-chat'
import { TextInput } from "react-native-gesture-handler";
import { useValue } from "react-native-reanimated";

const SCREEN_WIDTH = Dimensions.get("window").width;
var hours = new Date().getHours(); //Current Hours
var min = new Date().getMinutes();
var ampm
if (hours > 11) {
    ampm = '오후';
    hours = hours - 12;

} else {
    ampm = '오전'
}
if (min < 10) {
    min = '0' + min
}
var keyNum = 3
class MessengerDetailScreenPresenter extends React.Component {
    state = {
        input: '',
        messages: [
            { idx: '1', name: '사용자', time: '오후 2:30', content: '안녕하세요 스타트허브입니다.\n다음주 목요일 미팅 괜찮으신가요?', color: '#f7f7f7', flex: 'flex-end', direction: 'row' },
            { idx: '2', name: '스타트허브', time: '오후 2:30', content: '네 괜찮습니다.', color: '#ebe6f3', flex: 'flex-start', direction: 'row-reverse' }
        ]

    };
    setInput = (input) => {
        this.setState({
            input: input
        })
    }
    chat = () => {
        var jsonArray = [{ idx: keyNum, name: '사용자', time: ampm + hours + ':' + min, content: this.state.input, color: '#f7f7f7', flex: 'flex-end', direction: 'row' }]
        keyNum += 1
        this.setState({
            messages: this.state.messages.concat(jsonArray)
        })
        console.log(this.state.messages);
        this.refs.TextInput.clear()
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%' }}>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
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
                <View style={{ flex: 1 }}>
                    <ScrollView
                        ref={ref => { this.scrollView = ref }}
                        onContentSizeChange={() => this.scrollView.scrollToEnd({ animated: false })}
                        style={{ paddingHorizontal: 15 }}>
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>----------------------  2020년 11월 04일 ----------------------</Text>
                        {this.state.messages.map(messages =>
                            <View key={messages.idx} style={{ flexDirection: messages.direction, alignSelf: messages.flex }}>
                                <View style={{ width: SCREEN_WIDTH * 0.3 }}></View>
                                <Text style={{ alignSelf: 'flex-end', fontSize: 12 }}>{messages.time}</Text>
                                <Text style={{ alignSelf: messages.flex, marginTop: 10, backgroundColor: messages.color, padding: 10, marginRight: 15 }}>{messages.content}</Text>
                            </View>
                        )}
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
                        <TextInput
                            ref='TextInput'
                            placeholder='메세지 보내기'
                            onChangeText={this.setInput}
                            style={{
                                backgroundColor: '#f8f8f8', marginLeft: 10, width: '85%'
                            }}></TextInput>
                        <TouchableOpacity onPress={() => this.chat()}>
                            <Icon color='#311954' name='send-sharp' size={30} />
                        </TouchableOpacity>
                    </View>
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
})

export default MessengerDetailScreenPresenter;