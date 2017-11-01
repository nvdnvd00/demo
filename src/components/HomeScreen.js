import React, { Component, PropTypes } from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Right,
  Button,
  Icon,
  Body,
  Title
} from "native-base";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import MenuHomeScreen from './MenuHomeScreen';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posx: null, posy:null } ;
  }


  componentWillMount(){
    
    /* this.refs.firstcircle.measure(function(x, y) {
      this.setState({ posx: x }), this.setState({ posy: y });
    }); */
    
  }

  render() {
    /* const posxy=this.state.posy ? {
      position: "relative", top: this.state.posy
    }:{} */
    return (
      <Container>
        {/* background */}
        <Image
          style={{
            position: "absolute",
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height
          }}
          source={require("../images/main_bg.jpg")}
        />
        <TouchableOpacity style={{position:'absolute', left:Dimensions.get("window").width - 55,top:10,borderWidth:2,borderColor:'white',borderRadius:40}} 
           
          onPress={() => {
            this.props.navigation.navigate("DrawerOpen");
          }}
        >
        <Image
          style={{
            
            width: 40,
            height: 40,
            borderRadius:40
          }}
          source={require("../images/menu_btn.png")}
        />
        </TouchableOpacity>
        

        <View style={styles.menu}>
         
          <View style={ styles.buttonmenu }>
            <TouchableOpacity style={{ flexDirection: 'row',backgroundColor:'grey',borderRadius:40 }} 
              onPress={() => { this.props.navigation.navigate("mainBookScreen") }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 40, borderColor: 'white', borderWidth: 5, backgroundColor: 'white' }}>
                <Image style={{
                  width: 40,
                  height: 40,
                }}
                  source={require("./sidebar/images/book_btn.png")}
                />
              </View>
              <View style={{ justifyContent: 'center',alignItems:'center' }}>
                <Text style={styles.text}>Cẩm nang</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={ styles.buttonmenu }>
          <TouchableOpacity style={{ flexDirection: 'row',backgroundColor:'grey',borderRadius:40 }} 
            onPress={() => { this.props.navigation.navigate("mainBookScreen") }}
            >
              <View style={{ justifyContent: 'center', alignItems: 'center', width: 60, height: 60, borderRadius: 40, borderColor: 'white', borderWidth: 5, backgroundColor: 'white' }}>
                <Image style={{
                  width: 40,
                  height: 40,
                }}
                  source={require("./sidebar/images/club_btn.png")}
                />
              </View>
              <View style={{ justifyContent: 'center',alignItems:'center' }}>
                <Text style={styles.text}>Hội nhóm</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  text: {
    fontFamily: "Crabmeal" ,
    color:'white',
    fontSize:25,
    left:30
  },
    menu: {
       
        position:'absolute',
        top: Dimensions.get("window").height /2-250,
        height: 530,
        width: Dimensions.get("window").width,
        backgroundColor: 'transparent',
    },
    buttonmenu:{
      paddingTop:40, left: 40, backgroundColor: 'transparent', width:300
    },
  header: {
    height: 40,
    backgroundColor: "transparent",
    borderRadius: 50,
    marginTop: 5,
    marginLeft: 5,
    marginRight: 5
  },
  tab: {
    height: 50,
    backgroundColor: "green"
  },
  circle: {
    width: 400,
    height: 400,
    borderRadius: 400,
    backgroundColor: "transparent",
    position: "absolute",
    left: -160,
    top: (Dimensions.get("window").height - 400) / 2,
    borderColor: "white",
    borderWidth: 3
  },
  circle2: {
    width: 300,
    height: 300,
    borderRadius: 300,
    backgroundColor: "transparent",
    position: "absolute",
    left: -110,
    top: (Dimensions.get("window").height - 300) / 2,
    borderColor: "white",
    borderWidth: 3
  },
  circle3: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "transparent",
    

    borderColor: "white",
    borderWidth: 2
  }
});
