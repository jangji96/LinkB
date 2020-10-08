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
    ImageBackground,
    Linking
} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/Ionicons';
const SCREEM_WIDTH = Dimensions.get("window").width;
const SCREEM_HEIGHT = Dimensions.get("window").height;

class DetailScreenPresenter extends React.Component {
    handleClick = () => {
        Linking.canOpenURL(this.props.event_map).then(supported => {
            if (supported) {
                Linking.openURL(this.props.event_map);
            } else {
                console.log("Don't know how to open URI: " + this.props.event_map);
            }
        })
    };

    render() {
        return (
            <ScrollView backgroundColor='white'>
                <View>
                    <ImageBackground source={{ uri: this.props.event_image }} style={styles.event_image_layout}>
                        <Header transparent style={{ backgroundColor: '#00000040' }}>
                            <Left style={{ flex: 1 }}>
                                <Button transparent onPress={() => this.props.navigation.goBack()}>
                                    <AntDesign color='white' name='left' size={25} />
                                </Button>
                            </Left>
                            <Body style={{ flex: 6, alignItems: 'center' }}>
                                <Title>{this.props.event_name}</Title>
                            </Body>
                            <Right style={{ flex: 1 }}>
                            </Right>
                        </Header>
                    </ImageBackground>
                    <View style={{ backgroundColor: 'white', width: '100%', height: '100%' }}>
                        <Icon name='calendar-outline' size={20} style={{ marginTop: 25, marginLeft: '10%' }}>  {this.props.event_start_date.substr(0, 10)} ~ {this.props.event_end_date.substr(0, 10)}</Icon>
                        <Icon name='time-outline' size={20} style={{ marginTop: 20, marginLeft: '10%' }}>  {this.props.event_start_date.substr(11)} ~ {this.props.event_end_date.substr(11)}</Icon>
                        <Icon name='person-outline' size={20} style={{ marginTop: 20, marginLeft: '10%' }}>  {this.props.cnt}명 / 150명</Icon>
                        <Icon name='location-outline' size={20} style={{ marginTop: 20, marginLeft: '10%' }}>  {this.props.event_host}</Icon>
                        <Text style={{ width: '80%', height: 50, alignSelf: 'center', borderColor: 'black', borderWidth: 1.5, backgroundColor: 'white', borderRadius: 12, textAlign: 'center', paddingStart: 5, textAlignVertical: "center", fontSize: 18, marginTop: 20, marginBottom: 20 }} onPress={this.handleClick}>지도보기</Text>
                        <View style={{ borderTopWidth: 1, paddingTop: 40, paddingBottom: 40, borderTopColor: '#dddddd' }}>
                            <Text style={{ marginLeft: '10%' }}>{this.props.event_introduce.substr(5, 7)}</Text>
                        </View>
                        <View backgroundColor='#dddddd' style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ height: 70, backgroundColor: 'white', textAlignVertical: "center", paddingLeft: '10%' }}>{this.props.company_name}</Text>
                        </View>
                        <View>
                            <View style={{ height: 300, margin: 5 }}>
                                <Text style={styles.small_title}># 당신에게 꼭 맞는 추천행사!</Text>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}>
                                    {this.props.recommend_event_list.map(recommend_event =>
                                        <View key={recommend_event.event_idx} style={styles.recommend_event_view}>
                                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { event_idx: recommend_event.event_idx })}>
                                                <View style={{ width: "100%", height: "100%", alignItems: "center" }}>
                                                    <Image source={{ uri: recommend_event.event_image }} style={styles.recommend_event_image} />
                                                    <Text style={{ fontSize: 14, fontFamily: "NotoSans-Bold", color: 'black', marginTop: 5 }}>{recommend_event.event_name}</Text>
                                                    <Text
                                                        style={{ fontSize: 11, fontFamily: "NotoSans-Light", color: 'gray', marginTop: -3 }}>
                                                        {(recommend_event.event_start_date.slice(0, -9)).replace(/-/gi, ".")}~{(recommend_event.event_end_date.slice(0, -9)).replace(/-/gi, ".")}
                                                    </Text>
                                                </View>
                                                <Text style={styles.recommend_event_Dday_text}>
                                                    D{Dday((recommend_event.event_start_date.slice(0, -9)).replace(/-/gi, "."))}
                                                </Text>
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                </ScrollView>
                            </View>
                        </View>
                        <View backgroundColor='#311957' style={{ alignContent: 'center' }}>
                            <Text style={{ color: 'white', textAlign: 'center', paddingTop: 15, paddingBottom: 15, fontSize: 20, fontWeight: 'bold' }}>참가하기</Text>
                        </View>
                    </View>
                </View>
                <StatusBar
                    backgroundColor="black"
                    style={{ color: "white" }}></StatusBar>
            </ScrollView>
        )
    }
}
const Dday = (start) => {
    var s = start.split('.');
    var today = new Date();
    var start_day = new Date(s[0], s[1] - 1, s[2]);
    var num = today.getTime() - start_day.getTime();
    var dday = Math.floor(num / (1000 * 60 * 60 * 24));

    return dday;
}
const styles = StyleSheet.create({
    event_image_layout: {
        width: SCREEM_WIDTH,
        height: SCREEM_HEIGHT * 0.6,
    },
    small_title: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 16,
        color: 'black',
        fontFamily: 'NotoSans-Bold',
    },
    recommend_event_view: {
        width: 170,
        height: 250,
        margin: 5,
    },
    recommend_event_image: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    recommend_event_Dday_text: {
        width: 60,
        height: 36,
        backgroundColor: "black",
        color: "white",
        fontFamily: "NotoSans-Medium",
        fontSize: 14,
        textAlign: 'center',
        textAlignVertical: "center",
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        position: 'absolute',
    }
})

export default DetailScreenPresenter;