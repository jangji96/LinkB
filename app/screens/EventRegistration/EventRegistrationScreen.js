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
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import DropDownPicker from 'react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Ionicons';
import { TextInput } from "react-native-gesture-handler";
import DatePicker from 'react-native-datepicker'

const SCREEM_WIDTH = Dimensions.get("window").width;

class EventRegistrationScreenPresenter extends React.Component {

    constructor(props) {
        super(props)
        this.state = { startDate: "", endDate:'' }
    }
    render() {
        return (
            <View backgroundColor='white'>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon color='white' name='arrow-back-outline' size={30} />
                            <Text style={styles.Header_text}>행사개설하기</Text>
                        </Button>
                    </Left>
                </Header>
                <ScrollView>
                    <Text style={{ marginTop: 20, marginLeft: '7.5%', marginBottom: 8 }}>분야/유형</Text>
                    <View style={{ flexDirection: 'row', flex: 2 }}>
                        <View style={{ flex: 1, paddingLeft: '7.5%', paddingRight: '0.6%' }}>
                            <DropDownPicker
                                items={[
                                    { label: 'Item 1', value: 'item1' },
                                    { label: 'Item 2', value: 'item2' },
                                ]}
                                placeholder='분야선택'
                                containerStyle={{ height: 55 }}
                                style={{ backgroundColor: 'transparent', flex: 1 }}
                                dropDownStyle={{ backgroundColor: 'white' }}
                                onChangeItem={item => console.log(item.label, item.value)} />
                        </View>
                        <View style={{ flex: 1, paddingRight: '7.5%', paddingLeft: '0.6%' }}><DropDownPicker
                            items={[
                                { label: 'Item 1', value: 'item1' },
                                { label: 'Item 2', value: 'item2' },
                            ]}
                            placeholder='유형선택'
                            placeholderTextColor='gray'
                            containerStyle={{ height: 55 }}
                            style={{ backgroundColor: 'transparent' }}
                            dropDownStyle={{ backgroundColor: 'white', flex: 1 }}
                            onChangeItem={item => console.log(item.label, item.value)} />
                        </View>
                    </View>
                    <Text style={{ marginTop: 20, marginLeft: '7.5%' }}>행사명</Text>
                    <TextInput
                        style={styles.TextInputStyle1}
                        placeholder='ID(이메일주소)를 입력하세요'
                        placeholderTextColor='gray'
                        color='white'></TextInput>
                    <Text style={{ marginTop: 20, marginLeft: '7.5%', marginBottom: 8 }}>날짜</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                            <DatePicker
                                showIcon={false}
                                date={this.state.startDate}
                                mode="date"
                                placeholder="시작 날짜 선택"
                                format="YYYY-MM-DD"
                                onDateChange={(date) => { this.setState({ startDate: date }) }}
                            />
                            <Icon color='black' name='calendar-outline' size={30} />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row',alignItems:'center' }}>
                            <DatePicker
                                showIcon={false}
                                date={this.state.endDate}
                                mode="date"
                                minDate={this.state.startDate}
                                placeholder="종료 날짜 선택"
                                format="YYYY-MM-DD"
                                onDateChange={(date) => { this.setState({ endDate: date }) }}
                            />
                            <Icon color='black' name='calendar-outline' size={30} />
                        </View>


                    </View>
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
        marginLeft: '5%',
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 17,
    },
    TextInputStyle1: {
        height: 55,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: 10,
        width: '85%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        fontFamily: "NotoSans-Regular",
        paddingLeft: 10
    }
})

export default EventRegistrationScreenPresenter;