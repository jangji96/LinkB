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
    TouchableOpacity,
    RefreshControl
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get("window").width;

class MessengerScreenPresenter extends React.Component {

    render() {
        let search = null;
        let loading = null;

        //돋보기 아이콘 눌렀을 시 검색창 생성
        if (this.props.searchState) {
            search = <TextInput
                style={styles.Header_textInput}
                placeholder="채팅방 이름을 입력하시오. "
                placeholderTextColor="#D5D5D5"
                maxLength={18}
                value={this.props.searchString}
                onChangeText={searchString => this.props.input_searchString(searchString)}
            />
        } else {
            search = <Text style={styles.Header_text}>메신저</Text>
        }

        //검색 시 로딩 gif 띄우기 and 데이터 값 없을 시 검색 데이터 없음 표시
        if (this.props.image) {
            loading = <Image source={require("../image/loading.gif")} style={styles.loading_img} />
        } else if (this.props.messenger_list.length == 0) {
            loading = <Text style={{ color: "gray", fontSize: 13, textAlign: 'center', textAlignVertical: "center", }}>{this.props.textValue}</Text>
        } else {
            loading =
                <View>
                    {this.props.messenger_list.map(messenger =>
                        <TouchableOpacity key={messenger.messenger_idx} onPress={() => this.props.navigation.navigate('MessengerDetail', { messenger_idx: messenger.messenger_idx })}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image style={{ width: SCREEN_WIDTH * 0.18, height: SCREEN_WIDTH * 0.18 }} source={require("../image/user.png")}></Image>
                                <View style={{ width: '57%' }}>
                                    <Text style={{ fontSize: 16 }}>{messenger.opponent}</Text>
                                    <Text numberOfLines={2} style={{ fontSize: 12 }}>{messenger.lastMessage}</Text>
                                </View>
                                <View style={{}}>
                                    <Text>{messenger.lastMessageTime}</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )}
                </View>
        }

        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Body style={{ marginLeft: '5%', flex: 8 }}>
                        {search}
                    </Body>
                    <Right style={{ flex: 2 }}>
                        <Button transparent onPress={() => { this.props.click_search() }}>
                            <Icon color='white' name='search-sharp' size={25} />
                        </Button>
                    </Right>
                </Header>
                {<ScrollView style={{ alignSelf: 'center', marginTop: 20, width: '90%', height: '100%' }}
                    refreshControl={
                        <RefreshControl refreshing={this.props.refreshing} onRefresh={this.props.onRefresh} />
                    }
                >
                    {loading}
                </ScrollView>}
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
    Header_textInput: {
        width: "100%",
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 15,
        borderBottomColor: "white",
        borderColor: "#311957",
        borderWidth: 1,
        paddingBottom: -5,
        marginBottom: 10
    },

})
export default MessengerScreenPresenter;