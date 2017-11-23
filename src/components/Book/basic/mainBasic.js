//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image,Dimensions } from 'react-native';
import {connect} from 'react-redux';


// create a component
class mainBasic extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text> Các bước thực hành những cách trượt patin cơ bản</Text>
                <Text>I. Cách đứng dậy và ngồi xuống</Text>
                <Text>1. Đứng dậy</Text>
                <Text>Bước 1: Từ tư thế quỳ, đặt 2 bàn tay xuống đất gần sát với đầu gối</Text>
                <Text>Bước 2: Sau khi thực hiện đúng bước 1, các bạn chống 1 chân lên (chân phải hay chân trái đều được) sao cho 4 bánh đều chạm đất và giày trượt vuông góc với mặt đất.</Text>
                <Text>Bước 3: Đẩy chân còn lại lên tạo thành hình chữ V và tạo sự cân bằng ở hai chiếc giày trượt. Trong khi đó tay bạn vẫn giữ nguyên như bước 1,2 hoặc đẩy các ngón tay và nhấc cao hơn một chút.</Text>
                <Text>Bước 4: Đặt 2 tay lên đầu gối và đứng lên từ từ, kết hợp với thân người hơi hướng về phía trước. Ở bước này các bạn không nên bỏ tay ra khỏi đầu gối và cố gắng giữ thằng bằng tạo thói quen ở bước này.</Text>
                <Image
                    source={require('./img/b1.jpg')}
                    style={{width: Dimensions.get('window').width, resizeMode: 'contain'}}
                />
            
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
        backgroundColor: 'white',
    },
});

function mapStateToProps(state) {
    return{
        myUser_id: state.user_id
    }
    
}

//make this component available to the app
export default connect(mapStateToProps)(mainBasic); //connect redux to component
