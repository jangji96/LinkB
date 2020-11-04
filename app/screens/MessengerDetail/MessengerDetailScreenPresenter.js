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


class MessengerDetailScreenPresenter extends React.Component {
    chat = (str) => {

      }
    state = {
        messages: []
    };
    render() {
        return (
            <View style={{backgroundColor:'white', height:'100%'}}>
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
                <ScrollView>

                <Text style={{alignSelf:'center',marginTop:10}}>-------------------------  2020년 11월 04일 -------------------------</Text>
                <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                    <Text style={{alignSelf:'flex-end',marginRight:10,fontSize:12}}>오후 2:00</Text>
                    <Text style={{alignSelf:'flex-end',marginTop:10,backgroundColor:'#f7f7f7',padding:10,marginRight:15}}>안녕하세요 스타트허브입니다.{"\n"}다음주 목요일 미팅 괜찮으신가요?</Text>
                </View>
                <View style={{flexDirection:'row-reverse',alignSelf:'flex-start'}}>
                    <Text style={{alignSelf:'flex-end',marginLeft:10,fontSize:12}}>오후 2:15</Text>
                    <Text style={{alignSelf:'flex-start',marginTop:10,backgroundColor:'#ebe6f3',padding:10,marginLeft:15}}>네 괜찮습니다~</Text>
                </View>
                <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                    <Text style={{alignSelf:'flex-end',marginRight:10,fontSize:12}}>오후 2:45</Text>
                    <Text style={{alignSelf:'flex-end',marginTop:10,backgroundColor:'#f7f7f7',padding:10,marginRight:15}}>네 내일 뵙겠습니다!</Text>                
                </View>
                <View style={{flexDirection:'row-reverse',alignSelf:'flex-start'}}>
                    <Text style={{alignSelf:'flex-end',marginLeft:10,fontSize:12}}>오후 3:23</Text>
                    <Text style={{alignSelf:'flex-start',marginTop:10,backgroundColor:'#ebe6f3',padding:10,marginLeft:15}}>네~</Text>
                </View>
                
                <TextInput placeholder='메세지 보내기' style={{backgroundColor:'#f8f8f8', marginTop:'100%',marginLeft:10}}></TextInput>
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

export default MessengerDetailScreenPresenter;