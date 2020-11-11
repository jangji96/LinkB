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
if(hours>11){
    ampm='오후';
    hours=hours-12;
    
}else{
    ampm='오전'
}
if(min<10){
    min='0'+min
}

class MessengerDetailScreenPresenter extends React.Component {
    state = {
        input: '',
        messages: []
    };
    setInput = (input) => {
        this.setState({
            input: input
        })
    }
    chat = () => {
        this.setState({
            messages: this.state.messages.concat(this.state.input)
        })
        console.log(this.state.messages);
        this.refs.scrollView.scrollToEnd({})
    }
    
    render() {
        return (
            <View style={{ backgroundColor: 'white', height: '100%' }}>
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
                <View style={{ flex: 1 }}>
                    <ScrollView ref="scrollView">
                        <Text style={{ alignSelf: 'center', marginTop: 10 }}>-------------------------  2020년 11월 04일 -------------------------</Text>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <View style={{ width: SCREEN_WIDTH * 0.3 }}></View>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 10, fontSize: 12 }}>오후 2:00</Text>
                            <Text style={{ alignSelf: 'flex-end', marginTop: 10, backgroundColor: '#f7f7f7', padding: 10, marginRight: 15 }}>안녕하세요 스타트허브입니다.{"\n"}다음주 목요일 미팅 괜찮으신가요?</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}>
                            <Text style={{ alignSelf: 'flex-end', marginLeft: 10, fontSize: 12 }}>오후 2:15</Text>
                            <Text style={{ alignSelf: 'flex-start', marginTop: 10, backgroundColor: '#ebe6f3', padding: 10, marginLeft: 15 }}>네 괜찮습니다~</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                            <Text style={{ alignSelf: 'flex-end', marginRight: 10, fontSize: 12 }}>오후 2:45</Text>
                            <Text style={{ alignSelf: 'flex-end', marginTop: 10, backgroundColor: '#f7f7f7', padding: 10, marginRight: 15 }}>네 내일 뵙겠습니다!</Text>
                        </View>
                        <View style={{ flexDirection: 'row-reverse', alignSelf: 'flex-start' }}>
                            <Text style={{ alignSelf: 'flex-end', marginLeft: 10, fontSize: 12 }}>오후 3:23</Text>
                            <Text style={{ alignSelf: 'flex-start', marginTop: 10, backgroundColor: '#ebe6f3', padding: 10, marginLeft: 15 }}>네~</Text>
                        </View>
                        {this.state.messages.map(messages =>
                            <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                                <View style={{ width: SCREEN_WIDTH * 0.3 }}></View>
                                <Text style={{ alignSelf: 'flex-end', marginRight: 10, fontSize: 12 }}>{ampm +' '+ hours + ':' + min }</Text>
                                <Text style={{ alignSelf: 'flex-end', marginTop: 10, backgroundColor: '#f7f7f7', padding: 10, marginRight: 15 }}>{messages}</Text>
                            </View>
                        )}
                    </ScrollView>
                    <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
                        <TextInput
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