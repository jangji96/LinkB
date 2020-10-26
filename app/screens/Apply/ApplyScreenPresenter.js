import React from "react"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    TextInput,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage'

const SCREEM_WIDTH = Dimensions.get("window").width;

class ApplySceenPresenter extends React.Component {
    state = {
        name: "",
        phone_number: "",
        email: "",
        active_place: "",
        company: "",
        department: "",
        com_position: "",
    }

    componentDidMount = () => {
        AsyncStorage.getItem('token').then((result) => {
            const UserInfo = JSON.parse(result);
            this.setState({
                email: UserInfo.email,
            })
            console.log("getItem");
        }).catch(function (error) {
            console.log('get Error ' + error);
        });;
    }

    participate = () => {
        this.props.navigation.goBack()
    }

    render() {
        return (
            <ScrollView>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon color='white' name='chevron-back-outline' size={30} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.Header_text}>참가하기</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                        
                    </Right>
                </Header>
                <View>
                    <View>
                        <Text style={[styles.text, { marginTop: 30 }]}>이름</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="이름을 입력하세요"
                            value={this.state.name}
                            onChangeText={text => this.setState({
                                name: text
                            })} />
                    </View>
                    <View>
                        <Text style={styles.text}>전화번호</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="전화번호를 입력하세요"
                            value={this.state.phone_number}
                            onChangeText={text => this.setState({
                                phone_number: text
                            })} />
                    </View>
                    <View>
                        <Text style={styles.text}>이메일</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="이메일을 입력하세요"
                            value={this.state.email}
                            onChangeText={text => this.setState({
                                email: text
                            })} />
                    </View>
                    <View style={styles.line_style_1}></View>
                    <View>
                        <Text style={styles.text}>활동장소</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="활동장소를 입력하세요"
                            value={this.state.active_place}
                            onChangeText={text => this.setState({
                                active_place: text
                            })} />
                    </View>
                    <View style={styles.line_style_1}></View>
                    <View>
                        <Text style={styles.text}>근무회사</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="근무회사를 입력하세요"
                            value={this.state.company}
                            onChangeText={text => this.setState({
                                company: text
                            })} />
                    </View>
                    <View>
                        <Text style={styles.text}>근무부서</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="근무부서를 입력하세요"
                            value={this.state.department}
                            onChangeText={text => this.setState({
                                department: text
                            })} />
                    </View>
                    <View>
                        <Text style={styles.text}>직급</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="직급을 입력하세요"
                            value={this.state.com_position}
                            onChangeText={text => this.setState({
                                com_position: text
                            })} />
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.participate()} style={{ marginTop: 50 }}>
                    <View backgroundColor='#311957' style={{ alignContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 20, fontWeight: 'bold' }}>참가하기</Text>
                    </View>
                </TouchableOpacity>
                <StatusBar
                    backgroundColor="#311957"
                    style={{ color: "white" }}></StatusBar>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    Header_text: {
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 17,
    },
    text: {
        marginHorizontal: 25,
        marginTop: 20,
        marginBottom: 7,
        fontSize: 14,
        color: '#5D5D5D',
        fontFamily: "NotoSans-Bold",
    },
    text_input: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#EEEEEE',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    line_style_1: {
        backgroundColor: '#BDBDBD',
        height: 1,
        marginHorizontal: 13,
        marginTop: 35,
        marginBottom: 10,
    },
})

export default ApplySceenPresenter;