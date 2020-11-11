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
import AntDesign from 'react-native-vector-icons/AntDesign';

const SCREEN_HEIGHT = Dimensions.get("window").height;

class CodeApplyScreenPresenter extends React.Component {
    chat = (str) => {

    }
    state = {
        messages: []
    };
    render() {
        return (
            <View>
                <View style={{height: SCREEN_HEIGHT*0.89 }}>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.navigate('Main')}>
                            <AntDesign color='white' name='arrowleft' size={25} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 6, }}>
                        <Text style={styles.Header_text}>행사코드</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>

                    </Right>
                </Header>
                    <View style={{ alignSelf: 'center', marginTop: '10%',width:'90%' }}>
                        <Text style={{textAlignVertical: 'center', padding: 10 }} >행사코드를 입력해 주세요.</Text>
                        <TextInput keyboardType='number-pad'
                            style={styles.TextInputStyle1}></TextInput>
                    </View>
                </View>
                <Text style={{height:SCREEN_HEIGHT*0.08,backgroundColor:'#311957',color:'white',textAlign:'center',textAlignVertical:'center',fontSize:18}} onPress={() => this.props.navigation.navigate('Detail', { event_idx: 1 })}>완료</Text>
                
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
    TextInputStyle1: {
        marginTop: 10,
        borderBottomColor: '#dddee2',
        borderBottomWidth: 1,
        fontFamily: "NotoSans-Regular",
        paddingLeft: 10
    },
})

export default CodeApplyScreenPresenter;