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
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const SCREEN_WIDTH = Dimensions.get("window").width;

class SearchScreenPresenter extends React.Component {
    state = {
        refreshing: false
    }
    onRefresh = () => {
        this.setState({
            refreshing: true
        })
        setTimeout(()=>this.setState({
            refreshing: false
        }),1000)
        
    }
    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={this.state.refreshing} onRefresh={this.onRefresh} />
                }
            >
                <View style={styles.background_layout}></View>
                <View style={{ width: '100%', alignItems: "center", justifyContent: 'center', }}>
                    <View style={{ width: '100%', height: 45, flexDirection: 'row', marginTop: 23 }}>
                        <View style={{ width: '100%', height: '100%', alignItems: "center", justifyContent: 'center', }}>
                            <TextInput
                                style={styles.search_bar}
                                placeholder="검색어를 입력하세요"
                                placeholderTextColor="white"
                                maxLength={20}
                                value={this.props.searchString}
                                onChangeText={searchString => this.props.input_searchString(searchString)}></TextInput>
                        </View>
                        <View style={{ width: '90%', height: '100%', position: 'absolute', alignItems: "flex-end", justifyContent: "center", }}>
                            <TouchableOpacity onPress={() => this.props.search()}><EvilIcons color='white' name='search' size={25}></EvilIcons></TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.main_layout}>
                        <Text style={styles.small_title}>{this.props.title_text}</Text>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}                            
                        >
                            <View style={styles.event}>
                                {this.props.event_list.map(event =>
                                    <View key={event.event_idx} style={styles.event_view}>
                                        <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => this.props.navigation.navigate('Detail', { event_idx: event.event_idx })}>
                                            <Image source={{ uri: event.event_image }} style={styles.event_image} />
                                            <View style={styles.event_text_view}>
                                                <Text numberOfLines={1} style={styles.event_text_1}>{event.event_name}</Text>
                                                <Text
                                                    style={styles.event_text_2}>
                                                    {(event.event_start_date.slice(0, -9)).replace(/-/gi, ".")}~{(event.event_end_date.slice(0, -9)).replace(/-/gi, ".")}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
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

const styles = StyleSheet.create({
    background_layout: {
        backgroundColor: '#311957',
        width: SCREEN_WIDTH,
        height: SCREEN_WIDTH * 0.76,
        position: 'absolute'
    },
    search_bar: {
        height: 45,
        width: '90%',
        borderRadius: 100,
        paddingLeft: 20,
        borderColor: 'white',
        color: 'white',
        borderWidth: 1
    },
    main_layout: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 15,
        marginTop: 20,
    },
    event: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 10
    },
    event_view: {
        width: "50%",
        height: 250,
        alignItems: "center",
        padding: 5,
        paddingBottom: 10
    },
    event_image: {
        width: "100%",
        height: 200,
        borderRadius: 12,
        resizeMode: 'cover',
    },
    event_text_view: {
        width: "100%",
        alignItems: "center",
        justifyContent: 'center',
    },
    event_text_1: {
        textAlignVertical: "center",
        fontSize: 14,
        fontFamily: "NotoSans-Bold",
        color: 'black',
        marginLeft: 5,
    },
    event_text_2: {
        textAlignVertical: "center",
        fontSize: 11,
        fontFamily: "NotoSans-Light",
        color: 'gray',
        marginTop: -3,
        marginLeft: 5,
    },
    small_title: {
        marginTop: 25,
        marginLeft: 15,
        marginRight: 5,
        fontSize: 16,
        color: 'black',
        fontFamily: 'NotoSans-Bold',
    }
});

export default SearchScreenPresenter;