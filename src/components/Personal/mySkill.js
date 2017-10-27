//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import { connect } from 'react-redux';
import CONFIG from './config';

// create a component
class MySkill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            
        }
    }
    componentWillMount() {
        fetch(CONFIG.API_URL + "/user/get_my_list_skill/" + this.props.myUser_id)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                })

            })
            .catch((error) => {
                console.error(error);
            });
    }
    /*  _getname(id){
         fetch(CONFIG.API_URL + "/skill/find_skill_name/" + id)    
                                             
                                             .then((res) => {
                                                 this.setState({
                                                 skillname:res})
                                             
                                             })
     } */
    render() {
        return (
            
            <View >
                <ScrollView style={{ backgroundColor: 'transparent', marginLeft: 10, marginRight: 10 }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item }) =>
                            <View>
                                <View style={{ height: 10 }} ></View>

                                <View style={{ borderWidth: 2, borderRadius: 20, borderColor: 'white', backgroundColor: '#4775d1' }} >
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: "Crabmeal", left: 20 }}>
                                        {item.name}
                                    </Text>
                                    <Text style={{ color: 'white', fontSize: 20, fontFamily: "Crabmeal", textAlign: 'right', right: 20 }}>
                                        {item.statusskill}
                                    </Text>
                                </View>
                            </View>
                        }
                        keyExtractor={item => item.skill}
                    />
                </ScrollView>
            </View>
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
        myUser_id: state.user_id
    }

}
//make this component available to the app
export default connect(mapStateToProps)(MySkill);

