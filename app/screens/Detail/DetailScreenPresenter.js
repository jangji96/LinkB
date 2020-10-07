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
import AntDesign from 'react-native-vector-icons/AntDesign';



class DetailScreenPresenter extends React.Component {
    
    render() {
        return (
            <ScrollView backgroundColor='#123123'>
                <View >
                    <Header style={{ backgroundColor: '#00000040',borderColor:'transparent' }}>
                        <Left style={{ flex: 1 }}>
                            <Button transparent onPress={() => this.props.navigation.goBack()}>
                                <AntDesign color='white' name='left' size={30} />
                            </Button>
                        </Left>
                        <Body style={{ flex: 6, alignItems: 'center' }}>
                            <Title>{this.props.event_detail.event[0].event_name}</Title>
                        </Body>
                        <Right style={{ flex: 1 }}>
                        </Right>
                    </Header>
                </View>
                
            </ScrollView>
        )
    }
}
export default DetailScreenPresenter;