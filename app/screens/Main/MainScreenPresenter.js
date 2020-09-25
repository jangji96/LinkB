import React from "react"

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Dimensions,
    Image,
    StatusBar
} from 'react-native';
import {
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { Container, Header, Left, Body, Right, Button, Title } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class MainScreenPresenter extends React.Component {

    render() {
        const { width } = Dimensions.get("window");
        const height = width * 0.6;
        return (
            <ScrollView style={{ flex: 1, flexDirection: 'column' }}>
                <View>
                    <Header style={{ backgroundColor: '#704591' }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.props.navigation.toggleDrawer()}>
                                <Icon color='white' name='menu' size={30} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 1, alignItems: 'center' }}>
                            <Title>LinkB</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                        </Right>
                    </Header>
                </View>
                <View backgroundColor='#704591' style={{ height, backgroundColor: '#704591' }}>
                    <ScrollView
                        pagingEnabled
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        onMomentumScrollEnd={
                            () => { console.log('Scrolling is End') }
                        }
                        style={{ width, height }}
                    >
                        {this.props.select_cover_list.map(cover_image =>
                            <View key={cover_image.cover_idx} style={{ width, height, resizMode: 'cover' }}>
                                <Image source={{ uri: cover_image.cover_mobile }} style={{ width: "100%", height: 200, resizeMode: 'contain', borderRadius: 30 }}></Image>
                            </View>
                        )}
                    </ScrollView>

                </View>
                <View style={{ height: '100%' }}>
                    <Text># 당신에게 꼭 맞는 추천행사!</Text>
                    <ScrollView
                    style={{height:120}}
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        onMomentumScrollEnd={
                            () => { console.log('Scrolling is End') }
                        }
                    >
                        {this.props.recommend_event_list.map(recommend_event =>
                            
                            <View key={recommend_event.event_idx} style={{ width: 150, height: 220 }}>
                                <Image source={{ uri: recommend_event.event_image }} style={{ width: "100%", height: 200 }} />
                                <Text style={{ width: "100%", height: 20 }}>{recommend_event.event_name}</Text>
                            </View>
                        )}
                    </ScrollView>
                    <Text># 다양한 행사들을 확인하세요</Text>
                    <ScrollView
                        style={{marginBottom:'40%'}}
                        showsHorizontalScrollIndicator={true}
                        onMomentumScrollEnd={
                            () => { console.log('Scrolling is End') }
                        }
                    >
                        {this.props.event_list.map(event =>
                            <View key={event.event_idx} style={{ width: 150, height: 220 }}>
                                <Image source={{ uri: event.event_image }} style={{ width: "100%", height: 200 }} />
                                <Text style={{ width: "100%", height: 20 }}>{event.event_name}</Text>
                            </View>
                        )}
                    </ScrollView>
                </View>
            </ScrollView>
        )
    }
}

export default MainScreenPresenter;