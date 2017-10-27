//import liraries
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Title,Container, Header, Button, Icon, Text,Tabs,Tab,TabHeading,Left,Right,Body } from 'native-base';
import { connect } from 'react-redux';
import MySkill from './mySkill';

// create a component
class mainPersonal extends Component {
    render() {
        return (
            <Container>

                <Header>
                    <Left>
                        <Button transparent onPress={() => { this.props.navigation.goBack() }}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>{this.props.myUser_name}</Title>
                    </Body>
                    {/* <Right>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right> */}
                </Header>

                <Tabs>
                    <Tab heading={<TabHeading><Icon name="pulse" /><Text>Tiến độ</Text></TabHeading>}>
                        <MySkill />
                    </Tab>
                    <Tab heading={<TabHeading><Text>Chưa có</Text></TabHeading>}>

                    </Tab>
                    <Tab heading={<TabHeading><Icon name="apps" /><Text>Chưa có</Text></TabHeading>}>

                    </Tab>
                </Tabs>


            </Container>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});
function mapStateToProps(state) {
    return {
    myUser_name: state.user_name}
}

//make this component available to the app
export default connect(mapStateToProps)(mainPersonal);
