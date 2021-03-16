import React,{Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View, Dimensions, Image,
} from 'react-native';
import HeaderView from "./HeaderView";
import {Col} from "react-native-easy-grid";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class QrcodeScreen extends Component{

    render() {
        return (
            <SafeAreaView style={styles.backgroundStyle}>
                <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
                <View style={{flex: 1}}>
                    <HeaderView/>
                    <View>
                        <Text style={{color: 'white', fontSize: 14, marginTop: 15, marginLeft: 20}}>DIGITAL MEMBER CARD</Text>
                    </View>
                    <View style={{flex: 1,justifyContent:'center',alignItems:'center'}}>
                        <View style={{backgroundColor: 'white',borderRadius:3,margin: 10,marginBottom:50,borderWidth:5,borderColor:'grey',padding:10}}>
                        <Image source={require('W:/React Native Project/QuikieApps/images/qr-code.png')}
                               style={{width: 210, height: 210,borderRadius: 3}}
                               resizeMode="cover"/>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    backgroundStyle:{
        flex: 1,
        backgroundColor:'#00001f'
    }
});

export default QrcodeScreen;
