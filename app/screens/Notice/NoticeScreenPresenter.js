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

class NoticeScreenPresenter extends React.Component {
    state = {
        dVisible:false,
        refreshing: false,
        messages: [{num:1, code : "1",content: "스타트허브님의 메세지가 도착했습니다."},{num:2,code : "2", content: "관심 행사가 새로 등록되었습니다."},{num:3,code : "1", content: "링크비님의 메세지가 도착했습니다."}]
    }
    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        setTimeout(()=>this.setState({
            refreshing: false
        }),1000)
        
    }
    navigate = (code) => {
        if(code==1){
            this.props.navigation.navigate('MessengerDetail')
        }else{
            this.props.navigation.navigate('Detail',{ event_idx: 1})
        }

    }
    delete = ()=>{
        this.setState({
            dVisible:true
        })
    }
    getDelete = () => {
        return <Text>sssssssssssssssssssssss</Text>
    }
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Body style={{ marginLeft: '5%' }}>
                        <Text style={styles.Header_text}>알림</Text>
                    </Body>
                    <Right >
                        <Button transparent onPress={() => this.delete}>
                            <Icon color='white' name='trash-outline' size={25} />
                        </Button>
                    </Right>
                </Header>
                <ScrollView style={{ alignSelf: 'center', width: '100%', height: '100%',paddingRight:'5%'}}
                    refreshControl={
                        <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                    }
                >
                    {this.state.messages.map(messages =>
                        <TouchableOpacity onPress={() => this.navigate(messages.code)}>
                            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                                {this.getDelete}
                                <Text style={{ fontSize: 14, textAlignVertical: 'center',backgroundColor:'red',width:'15%',textAlign:'center'}}>삭제</Text>
                                <Image style={{ width: SCREEN_WIDTH * 0.14, height: SCREEN_WIDTH * 0.14 }} source={require("../image/user.png")}></Image>
                                <Text style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>{messages.content}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
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