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

const SCREEN_WIDTH = Dimensions.get("window").width;

class MyInfoScreenPresenter extends React.Component {
    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#311957' }}>
                    <Left style={{ flex: 1 }}>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon color='white' name='chevron-back-outline' size={30} />
                        </Button>
                    </Left>
                    <Body style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={styles.Header_text}>내 정보</Text>
                    </Body>
                    <Right style={{ flex: 1 }}>
                    </Right>

                </Header>
                <ScrollView style={{ alignSelf: 'center', width: '90%', height: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', marginTop: '5%' }}>
                        <Image style={{ width: SCREEN_WIDTH * 0.3, height: SCREEN_WIDTH * 0.3 }} source={require("../image/user.png")}></Image>
                        <View style={{ alignItems: 'center', alignSelf: 'center', marginLeft: '3%' }}>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>김이름</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>tset@test.com</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>010-1234-5678</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%' }}>스타트허브</Text>
                        </View>
                    </View>
                    <Text style={styles.small_title}># 참가했던 행사</Text>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}>
                        <View style={styles.event}>
                            {this.props.event_list.map(event =>
                                <View key={event.event_idx} style={styles.event_view}>
                                    <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => this.props.navigation.navigate('Detail', { event_idx: event.event_idx })}>
                                        <Image source={{ uri: event.event_image }} style={styles.event_image} />
                                        <View style={styles.event_text_view}>
                                            <Text style={{
                                                textAlignVertical: "center", fontSize: 14, fontFamily: "NotoSans-Bold", color: 'black', marginLeft: 5,
                                            }}>{event.event_name}</Text>

                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )}
                        </View>
                    </ScrollView>

                </ScrollView>

                <StatusBar
                    backgroundColor="#311957"
                    style={{ color: "white" }}></StatusBar>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    event: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    event_view: {
        width: "50%",
        height: ((SCREEN_WIDTH - 10) * 0.47) + 5,
        alignItems: "center",
        padding: 5,
        paddingBottom: 10
    },
    event_image: {
        width: "100%",
        height: "100%",
        borderRadius: 12,
        resizeMode: 'cover',
    },
    event_text_view: {
        width: "100%",
        height: (SCREEN_WIDTH - 10) * 0.1,
        backgroundColor: "white",
        position: 'absolute',
        justifyContent: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginTop: ((SCREEN_WIDTH - 10) * 0.47) - ((SCREEN_WIDTH - 10) * 0.15 - 8),
    },
    Header_text: {
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 17,
    },
    small_title: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 16,
        color: 'black',
        fontFamily: 'NotoSans-Bold',
    }
})

export default MyInfoScreenPresenter;