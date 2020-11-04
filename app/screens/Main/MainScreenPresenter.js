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
    BackHandler,
    ToastAndroid,
} from 'react-native';
import Swiper from 'react-native-swiper'
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

const SCREEN_WIDTH = Dimensions.get("window").width;

class MainScreenPresenter extends React.Component {

    render() {
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}
                onMomentumScrollEnd={(e) => {
                    console.log("scrollend Event")
                    const scrollPosition = e.nativeEvent.contentOffset.y;
                    const scrollViewHeight = e.nativeEvent.layoutMeasurement.height;
                    const contentHeight = e.nativeEvent.contentSize.height;
                    const isScrolledToBottom = scrollViewHeight + scrollPosition;

                    if (isScrolledToBottom >= (contentHeight - 5)) {
                        this.props.scrollEvent()
                    }
                }}>
                <View style={styles.select_cover_layout}>
                    <View>
                        <Header style={{ backgroundColor: '#311957' }}>
                            <Left style={{ flex: 1 }}>
                                <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                                    <Icon color='white' name='menu' size={30} />
                                </Button>
                            </Left>
                            <Body style={{ flex: 1, alignItems: 'center' }}>
                                <Text style={styles.Logo_text_1}>LINKB</Text>
                                <Text style={styles.Logo_text_2}>WE LINK BUSINESS</Text>
                            </Body>
                            <Right style={{ flex: 1 }}>
                                <Button transparent>
                                    <Icon color='white' name='refresh' size={30} />
                                </Button>
                            </Right>
                        </Header>
                    </View>
                    <View style={{ flex: 1, width: SCREEN_WIDTH, backgroundColor: '#311957', }}>
                        <Swiper
                            key={this.props.select_cover_list.length}
                            autoplay={true}
                            autoplayTimeout={5}
                            dot={
                                <View style={styles.cover_swiper_dot} />
                            }
                            activeDot={
                                <View style={styles.cover_swiper_activeDot} />
                            }
                            paginationStyle={{
                                bottom: (SCREEN_WIDTH) * 0.76 * 0.07,
                                left: 1,
                                right: 1,
                            }}>
                            {this.props.select_cover_list.map(cover_image =>
                                <View key={cover_image.cover_idx} style={styles.select_cover_view}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', { event_idx: cover_image.cover_idx })}>
                                        <Image source={{ uri: cover_image.cover_mobile }} style={styles.select_cover_image}></Image>

                                    </TouchableOpacity>
                                </View>
                            )}
                        </Swiper>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
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
                                            <Text numberOfLines={1} style={{ fontSize: 14, fontFamily: "NotoSans-Bold", color: 'black', marginTop: 5 }}>{recommend_event.event_name}</Text>
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
                    <View style={{ height: "100%", margin: 5 }}>
                        <Text style={styles.small_title}># 다양한 행사들을 확인하세요</Text>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}>
                            <View style={[styles.event]}>
                                {this.props.event_list.map(event =>
                                    <View key={event.event_idx} style={styles.event_view}>
                                        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => this.props.navigation.navigate('Detail', { event_idx: event.event_idx })}>
                                            <Image source={{ uri: event.event_image }} style={styles.event_image} />
                                            <View style={styles.event_text_view}>
                                                <Text numberOfLines={1} style={{
                                                    textAlignVertical: "center", fontSize: 14, fontFamily: "NotoSans-Bold", color: 'black', marginLeft: 5,
                                                }}>{event.event_name}</Text>
                                                <Text
                                                    style={{
                                                        textAlignVertical: "center", fontSize: 11, fontFamily: "NotoSans-Light", color: 'gray', marginTop: -3, marginLeft: 5,
                                                    }}>
                                                    {(event.event_start_date.slice(0, -9)).replace(/-/gi, ".")}~{(event.event_end_date.slice(0, -9)).replace(/-/gi, ".")}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                                <View style={{ width: '100%', height: 40, justifyContent: 'center', }}>
                                    <Text style={{ color: "gray", fontSize: 13, textAlign: 'center', textAlignVertical: "center", }}>{this.props.textValue}</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <StatusBar
                    backgroundColor="#311957"
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
    select_cover_layout: {
        backgroundColor: '#311957',
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 0.76,
    },
    select_cover_view: {
        width: SCREEN_WIDTH,
        flex: 1,
        alignItems: "center",
        marginTop: 2,
    },
    select_cover_image: {
        width: SCREEN_WIDTH * 0.85,
        height: SCREEN_WIDTH * 0.45,
        resizeMode: 'cover',
        borderRadius: 15,
    },
    cover_swiper_dot: {
        backgroundColor: '#695884',
        width: 25,
        height: 3,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 3,
    },
    cover_swiper_activeDot: {
        backgroundColor: '#FFFFFF',
        width: 25,
        height: 3,
        marginLeft: 2,
        marginRight: 2,
        marginTop: 3,
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
    },
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
        height: (SCREEN_WIDTH - 10) * 0.15,
        backgroundColor: "white",
        position: 'absolute',
        justifyContent: 'center',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        marginTop: ((SCREEN_WIDTH - 10) * 0.47) - ((SCREEN_WIDTH - 10) * 0.15 + 5),
    },
    Logo_text_1: {
        fontFamily: "NotoSans-ExtraBold",
        color: 'white',
        fontSize: 21,
    },
    Logo_text_2: {
        fontFamily: "NotoSans-Regular",
        color: 'white',
        fontSize: 7,
        marginTop: -7,
    },
    small_title: {
        marginTop: 25,
        marginLeft: 5,
        marginRight: 5,
        fontSize: 16,
        color: 'black',
        fontFamily: 'NotoSans-Bold',
    }
});

export default MainScreenPresenter;