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
import axios from 'axios';

import EvilIcons from 'react-native-vector-icons/EvilIcons';

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
                <ScrollView
                    refreshControl={
                        <RefreshControl refreshing={this.props.refreshing} onRefresh={this.props.onRefresh} />
                    }
                    style={{ alignSelf: 'center', width: '100%', height: '100%' }} showsVerticalScrollIndicator={false}>
                    <View style={{ flexDirection: 'row', padiingTop: '5%', backgroundColor: '#311957' }}>
                        <EvilIcons style={styles.user_icon} color='white' name='user' size={90}></EvilIcons>
                        <View style={{ alignItems: 'center', alignSelf: 'center', paddingLeft: '3%' }}>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%', color: 'white' }}>김이름</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%', color: 'white' }}>tset@test.com</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%', color: 'white' }}>010-1234-5678</Text>
                            <Text numberOfLines={1} style={{ marginLeft: 10, fontSize: 14, textAlignVertical: 'center', width: '100%', color: 'white' }}>스타트허브</Text>
                        </View>
                    </View>
                    <ScrollView
                        style={{paddingHorizontal:'2%'}}
                        showsHorizontalScrollIndicator={false}>
                        <Text style={styles.small_title}># 참가했던 행사</Text>
                        <View style={styles.event}>
                            {this.props.event_list.map(event =>
                                <View key={event.event_idx} style={styles.event_view}>
                                    <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => this.props.navigation.navigate('Detail', { event_idx: event.event_idx })}>
                                        <Image source={{ uri: event.event_image }} style={styles.event_image} />
                                        <View style={styles.event_text_view}>
                                            <Text style={{
                                                textAlignVertical: "center", fontSize: 14, fontFamily: "NotoSans-Bold", color: 'black', marginLeft: 5,
                                            }} numberOfLines={1}>{event.event_name}</Text>
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
        marginBottom: 70,
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
        marginTop: ((SCREEN_WIDTH - 10) * 0.47) - ((SCREEN_WIDTH - 10) * 0.15 - 10)
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
    }, user_icon: {
        paddingVertical: '10%',
        marginLeft: '5%',
        alignSelf: 'center',
        justifyContent: 'center'
    },
})

export default MyInfoScreenPresenter;