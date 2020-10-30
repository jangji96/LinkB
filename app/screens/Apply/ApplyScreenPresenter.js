import React from "react"
import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    TextInput,
    StatusBar,
    TouchableOpacity,
    ToastAndroid
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import DropDownPicker from 'react-native-dropdown-picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class ApplySceenPresenter extends React.Component {

    participate = () => {
        this.props.navigation.navigate('ApplyComplete')
    }

    term1 = () => {
        ToastAndroid.show('서비스 이용 약관', ToastAndroid.SHORT);
    }

    term2 = () => {
        ToastAndroid.show('개인정보 처리방침', ToastAndroid.SHORT);
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFFFFF' }}>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <AntDesign color='white' name='arrowleft' size={25} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 6, }}>
                        <Text style={styles.Header_text}>참가하기</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>

                    </Right>
                </Header>
                <View style={{ width: '100%', height: 80, backgroundColor: '#311957', justifyContent: 'center', }}>
                    <Text style={{ fontSize: 17, fontFamily: "NotoSans-Bold", color: 'white', textAlign: 'center', textAlignVertical: "center", }}>참가자 정보</Text>
                    <Text style={{ fontSize: 13, fontFamily: "NotoSans-Medium", color: 'white', textAlign: 'center', textAlignVertical: "center", marginBottom: 15 }}>행사 참가에 필요한 정보를 확인해 주세요!</Text>
                </View>
                <View>
                    <View>
                        <Text style={[styles.text, { marginTop: 30 }]}>이메일</Text>
                        <TextInput
                            style={[styles.text_input, { backgroundColor: '#F6F6F6' }]}
                            placeholder="이메일을 입력하세요"
                            value={this.props.email}
                            onChangeText={text => this.props.inputEmail(text)} />
                    </View>
                    <View>
                        <Text style={styles.text}>이름</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="이름을 입력하세요"
                            value={this.props.name}
                            onChangeText={text => this.props.inputName(text)} />
                    </View>
                    <View>
                        <Text style={styles.text}>전화번호</Text>
                        <View style={{ flexDirection: 'row', marginHorizontal: 15 }}>
                            <View style={[styles.phonenumber1_input, { flex: 1, marginHorizontal: 5, }]}>
                                <DropDownPicker
                                    items={[
                                        { label: '010', value: '010', },
                                        { label: '011', value: '011', },
                                        { label: '012', value: '012', },
                                        { label: '013', value: '013', },
                                        { label: '014', value: '014', },
                                        { label: '015', value: '015', },
                                        { label: '016', value: '016', },
                                        { label: '017', value: '017', },
                                        { label: '018', value: '018', },
                                        { label: '019', value: '019', },
                                    ]}
                                    defaultValue={this.props.phone_number1}
                                    containerStyle={{ height: 45 }}
                                    defaultValue={this.props.phone_number1}
                                    itemStyle={{
                                        justifyContent: 'flex-start'
                                    }}
                                    onChangeItem={item => this.props.inputPhoneNumber1(item.value)} />
                            </View>
                            <TextInput
                                style={[styles.text_input, { flex: 1, marginHorizontal: 5, }]}
                                value={this.props.phone_number2}
                                onChangeText={text => this.props.inputPhoneNumber2(text)} />
                            <TextInput
                                style={[styles.text_input, { flex: 1, marginHorizontal: 5, }]}
                                value={this.props.phone_number3}
                                onChangeText={text => this.props.inputPhoneNumber3(text)} />
                        </View>
                    </View>
                    <View>
                        <Text style={styles.text}>사전질문</Text>
                        <TextInput
                            style={styles.text_input}
                            placeholder="행사 관련해서 궁금한 점 편하게 물어봐주세요 ^^"
                            value={this.props.active_place}
                            onChangeText={text => this.props.inputPrequestion(text)} />
                    </View>
                    <View style={{ height: 120 }}></View>
                    <View>
                        <TouchableOpacity onPress={() => this.props.setTerm1()}>
                            <View style={styles.term_view_1}>
                                <View style={styles.term_view_2}>
                                    <FontAwesome color={this.props.color1} name='check' size={20} />
                                    <Text style={styles.term_text}>서비스 이용 약관 (필수)</Text>
                                </View>
                                <TouchableOpacity style={{ flex: 1, }} onPress={() => this.term1()}>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <AntDesign color='#A6A6A6' name='right' size={15} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.setTerm2()}>
                            <View style={styles.term_view_1}>
                                <View style={styles.term_view_2}>
                                    <FontAwesome color={this.props.color2} name='check' size={20} />
                                    <Text style={styles.term_text}>개인정보 처리방침 (필수)</Text>
                                </View>
                                <TouchableOpacity style={{ flex: 1, }} onPress={() => this.term2()}>
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <AntDesign color='#A6A6A6' name='right' size={15} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableOpacity onPress={() => this.participate()} style={{ marginTop: 50 }}>
                    <View backgroundColor='#311957' style={{ alignContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 15, fontWeight: 'bold' }}>완료</Text>
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
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 7,
        fontSize: 14,
        color: '#5D5D5D',
        fontFamily: "NotoSans-Bold",
    },
    text_input: {
        height: 45,
        marginHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#DDDDDD',
    },
    phonenumber1_input: {
        height: 45,
        marginHorizontal: 20,
    },
    term_view_1: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 10
    },
    term_view_2: {
        flexDirection: 'row',
        flex: 8,
        marginHorizontal: 10
    },
    term_text: {
        color: 'black',
        fontSize: 15,
        fontFamily: "NotoSans-Regular",
        textAlign: 'center',
        textAlignVertical: "center",
        marginLeft: 10
    },
})

export default ApplySceenPresenter;