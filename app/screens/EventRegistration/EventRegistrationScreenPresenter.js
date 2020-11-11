import React from "react"
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Dimensions,
  StatusBar,
  TouchableOpacity,
  Modal,
  ToastAndroid
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import { TextInput } from "react-native-gesture-handler";
import Icon from 'react-native-vector-icons/Ionicons';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-datepicker'
import DateTimePicker from '@react-native-community/datetimepicker';
import ApplySceenPresenter from "../Apply/ApplyScreenPresenter";

const SCREEN_HEIGHT = Dimensions.get("window").height;

class EventRegistrationScreenPresenter extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      today: '2020-10-29',
      startDate: '',
      startDate2: '2020-10-29',
      endDate: '', date: '',
      dropDownPicker1: 'select',
      dropDownPicker2: 'select'
    }
  }
  participate = () => {
    if (!this.props.isAllCheck) {
        ToastAndroid.show('약관에 동의해주세요. ', ToastAndroid.SHORT);
    } else {
        this.props.apply()
        this.props.navigation.navigate('OpenComplete')
    }
}
  render() {
    return (
      <ScrollView backgroundColor='white'>
        <Header style={{ backgroundColor: '#311957' }}>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.goBack(this.setState({ today: '2020-10-28', startDate: '', startDate2: '2020-10-28', endDate: '', date: '', dropDownPicker1: '', dropDownPicker2: '' }))}>
              <Icon color='white' name='arrow-back-outline' size={30} />
              <Text style={styles.Header_text}>행사개설하기</Text>
            </Button>
          </Left>
        </Header>
        <View>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', marginBottom: 8, fontSize: 17 }}>분야/유형</Text>
          <View style={{ flexDirection: 'row', flex: 2 }}>
            <View style={{ flex: 1, paddingLeft: '7.5%', paddingRight: '0.6%' }}>
              <DropDownPicker
                items={[
                  { label: '분야선택', value: 'select' },
                  { label: 'Item 1', value: 'item1' },
                  { label: 'Item 2', value: 'item2' },
                ]}
                defaultValue='select'
                containerStyle={{ height: 55 }}
                style={{ backgroundColor: 'transparent', flex: 1 }}
                dropDownStyle={{ backgroundColor: 'white' }}
                onChangeItem={(item) => this.setState({ dropDownPicker1: item })} />
            </View>
            <View style={{ flex: 1, paddingRight: '7.5%', paddingLeft: '0.6%' }}><DropDownPicker
              items={[
                { label: '유형선택', value: 'select' },
                { label: 'Item 1', value: 'item1' },
                { label: 'Item 2', value: 'item2' },
              ]}
              defaultValue='select'
              placeholderTextColor='gray'
              containerStyle={{ height: 55 }}
              style={{ backgroundColor: 'transparent' }}
              dropDownStyle={{ backgroundColor: 'white', flex: 1 }}
              onChangeItem={(item) => this.setState({ dropDownPicker2: item })} />
            </View>
          </View>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>행사명</Text>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle1}
            placeholder='텍스트를 입력하세요'
            placeholderTextColor='gray'
            color='black'></TextInput>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', marginBottom: 8, fontSize: 17 }}>날짜</Text>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: '7.5%', paddingRight: '2.5%' }}>
              <DatePicker
                style={{ width: '80%', marginRight: '3%' }}
                showIcon={false}
                date={this.state.startDate}
                mode="date"
                minDate={this.state.today}
                placeholder="시작 날짜 선택"
                format="YYYY-MM-DD"
                onDateChange={(date) => { this.setState({ startDate: date, startDate2: date }) }}
              />
              <Icon color='black' name='calendar-outline' size={30} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingRight: '7.5%', paddingLeft: '2.5%' }}>
              <DatePicker
                style={{ width: '80%', marginRight: '3%' }}
                showIcon={false}
                date={this.state.endDate}
                mode="date"
                minDate={this.state.today}
                placeholder="시작 날짜 선택"
                format="YYYY-MM-DD"
                onDateChange={(date) => { this.setState({ endDate: date }) }}
              />
              <Icon color='black' name='calendar-outline' size={30} />
            </View>
          </View>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', marginBottom: 8, fontSize: 17 }}>시간</Text>
          <View style={{ flexDirection: 'row', }}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: '7.5%', paddingRight: '2.5%' }}>
              <DatePicker
                style={{ width: '80%', marginRight: '3%' }}
                showIcon={false}
                mode="date"
                minDate={this.state.startDate2}
                placeholder="시작 시간 선택"
                format="YYYY-MM-DD"
              />
              <Icon color='black' name='time-outline' size={30} />
            </View>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', paddingRight: '7.5%', paddingLeft: '2.5%' }}>
              <DatePicker
                style={{ width: '80%', marginRight: '3%' }}
                showIcon={false}
                mode="date"
                minDate={this.state.startDate2}
                placeholder="종료 시간 선택"
                format="YYYY-MM-DD"
              />
              <Icon color='black' name='time-outline' size={30} />
            </View>
          </View>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>대표 이미지</Text>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle1}
            placeholder='이미지를 선택하세요'
            placeholderTextColor='gray'
            color='black'></TextInput>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>소개</Text>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle1}
            placeholder='텍스트를 입력하세요'
            placeholderTextColor='gray'
            color='black'></TextInput>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>장소</Text>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle1}
            placeholder='지번,도로명 주소를 입력해 주세요'
            placeholderTextColor='gray'
            color='black'></TextInput>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle1}
            placeholder='상세주소를 입력하세요'
            placeholderTextColor='gray'
            color='black'></TextInput>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>참가인원</Text>
            <Text style={{ marginTop: 27 }}>(선착순 모집은 칸을 비워주세요)</Text>
          </View>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle2}
            placeholderTextColor='gray'
            color='black'>명</TextInput>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>가격</Text>
          <TextInput
            textContentType='password'
            style={styles.TextInputStyle2}
            placeholderTextColor='gray'
            color='black'>무료</TextInput>
          <Text style={{ marginTop: 20, marginLeft: '7.5%', fontSize: 17 }}>공개여부</Text>
          <View style={{ flex: 1, paddingLeft: '7.5%', paddingRight: '7.5%', marginTop: 10 }}>
            <DropDownPicker
              items={[
                { label: '전체 공개 [ 모든 사용자에게 공개 ]', value: 'select' },
                { label: '비공개', value: 'item1' },
                { label: '일부공개', value: 'item2' },
              ]}
              defaultValue='select'
              containerStyle={{ height: 55 }}
              style={{ backgroundColor: 'transparent', flex: 1 }}
              dropDownStyle={{ backgroundColor: 'white' }}
              onChangeItem={(item) => this.setState({ dropDownPicker1: item })} />
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={this.props.modalVisible}
            onRequestClose={() => {
              this.props.setModalVisible()
            }}
          >
            <View style={{ height: '100%', width: '100%', backgroundColor: '#00000080' }}>
              <View style={{ width: '100%', height: SCREEN_HEIGHT * 0.28, marginTop: SCREEN_HEIGHT * 0.6, backgroundColor: 'white', alignSelf: 'center', borderColor: '#311954', borderWidth: 2, borderRadius: 10 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                  <Icon onPress={() => this.props.allCheck()} color={this.props.allCheckColor} name='checkmark-circle-outline' size={30} style={{ marginLeft: 15, marginRight: 15, fontSize: 25 }} />
                  <Text style={{ width: '100%', height: '100%', fontSize: 20, marginTop: 10, fontSize: 16 }}>약관에 모두 동의합니다.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>
                  <Icon onPress={() => this.props.isCheck1()} color={this.props.checkColor1} name='checkmark-outline' size={30} style={{ marginLeft: 15, marginRight: 15, fontSize: 25 }} />
                  <Text style={{ width: '100%', height: '100%', fontSize: 20, marginTop: 10, fontSize: 14 }}>서비스 이용 약관 (필수)</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                  <Icon onPress={() => this.props.isCheck2()} color={this.props.checkColor2} name='checkmark-outline' size={30} style={{ marginLeft: 15, marginRight: 15, fontSize: 25,marginBottom:SCREEN_HEIGHT*0.03 }} />
                  <Text style={{ width: '100%', height: '100%', fontSize: 20, marginTop: 10, fontSize: 14 }}>개인정보 처리방침 (필수)</Text>
                </View>
                <Text onPress={() => this.participate()} style={{ backgroundColor:'#311957',color: 'white', textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 15, fontWeight: 'bold',borderBottomLeftRadius: 9, borderBottomRightRadius: 9,width:'100%' , borderWidth: 2 }}>동의합니다</Text>
                  
              </View>
            </View>
          </Modal>
          <TouchableOpacity onPress={() => this.props.setTerm()}>
            <View backgroundColor='#311957' style={{ alignContent: 'center', marginTop: 50 }}>
              <Text style={{ color: 'white', textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 20, fontWeight: 'bold' }}>참가하기</Text>
            </View>
          </TouchableOpacity>
        </View>
        <StatusBar
          backgroundColor="#311957"
          style={{ color: "white" }}></StatusBar>
      </ScrollView>
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
  },
  TextInputStyle2: {
    height: 55,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginLeft: '7.5%',
    marginTop: 10,
    width: '40%',
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    fontFamily: "NotoSans-Regular",
    paddingLeft: 10,
    alignContent: 'center'
  }
})

export default EventRegistrationScreenPresenter;