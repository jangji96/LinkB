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


class CodeApplyScreenPresenter extends React.Component {
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
                        <Text style={styles.Header_text}>참여하기</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>
                </Header>
                <View style={{flexDirection:'row',alignSelf:'center',marginTop:'50%'}}>
                    <TextInput style={{backgroundColor:'#f8f8f8',marginLeft:15,width:'55%'}} placeholder='참가코드를 입력하세요'></TextInput>
                    <Text style={{backgroundColor:'#ebe6f3',textAlignVertical:'center',padding:10,marginLeft:10}} onPress={() => this.props.navigation.navigate('Detail', { event_idx: 1 })}>참가</Text>
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

export default CodeApplyScreenPresenter;