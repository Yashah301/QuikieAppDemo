import React,{Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,Image,Dimensions
} from 'react-native';
import {Row, Col} from 'react-native-easy-grid';
import HeaderView from "./HeaderView";
import LinearGradient from "react-native-linear-gradient";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class ShoppingScreen extends Component{

    render() {
        return (
            <SafeAreaView style={styles.backgroundStyle}>
                <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
                <HeaderView/>
                <View>
                    <Text style={{color: 'white', fontSize: 14, marginTop: 15, marginLeft: 20}}>SHOP</Text>
                </View>
                <ScrollView style={{marginTop:20}}>
                    <View style={{flex: 1,flexDirection:'row',alignItems:'center'}}>
                        <Col style={{height: Height,width: Width*0.5,padding:10}}>
                            <View style={{marginLeft:8,width: 170,height: 170,borderRadius:10}}>
                                <LinearGradient
                                    colors={['#00643C', '#1A3C34' ]}
                                    style={{flex: 1,borderRadius:10}}
                                >
                                    <View style={{width:170,flexDirection:'row',justifyContent: 'space-between'}}>
                                    <View style={{margin:10}}>
                                        <Text style={{color:'white',fontSize:17,fontWeight:'600'}}>200</Text>
                                        <Text style={{color:'white',fontSize:9,fontWeight:'300'}}>POINTS</Text>
                                    </View>
                                        <Image source={require('../images/starbucks-logo.png')} style={{width: 40,height: 40,margin:10}}/>
                                    </View>
                                <View style={{width: 100,height: 120,position:'absolute',bottom:-3}}>
                                <Image source={require('../images/coffee.png')} style={{width: 100,height: 120,overflow:'hidden'}}/>
                                </View>
                                </LinearGradient>
                          </View>
                            <View style={{width: 170,height: 170,borderRadius:10}}>
                                <Image source={require('../images/adidas.png')} style={{width: 175,height: 175,marginTop:10,marginLeft:4}}/>
                            </View>
                            <View style={{marginLeft:8,width: 170,height: 170,borderRadius:10,marginTop:25,backgroundColor:'white'}}>
                                    <View style={{width:170,flexDirection:'row',justifyContent: 'space-between'}}>
                                        <View style={{margin:10}}>
                                            <Text style={{color:'grey',fontSize:17,fontWeight:'600'}}>200</Text>
                                            <Text style={{color:'grey',fontSize:9,fontWeight:'300'}}>POINTS</Text>
                                        </View>
                                        <Image source={require('../images/starbucks-logo.png')} style={{width: 40,height: 40,margin:10}}/>
                                    </View>
                                    <View style={{width: 100,height: 120,position:'absolute',bottom:-3}}>
                                        <Image source={require('../images/coffee.png')} style={{width: 100,height: 120,overflow:'hidden'}}/>
                                    </View>

                            </View>
                        </Col>
                        <Col style={{height: Height,width: Width*0.5,padding:10}}>
                            <View style={{width: 170,height: 250,borderRadius:10}}>
                                <Image source={require('../images/apple.png')} style={{width: 175,height: 250,marginLeft:4,borderRadius:10}}/>
                            </View>
                            <View style={{width: 170,height: 250,borderRadius:10,padding:3}}>
                                <Image source={require('../images/spotify.png')} style={{width: 175,height: 250,marginLeft:4,borderRadius:10}}/>
                            </View>
                        </Col>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    backgroundStyle:{
        flex: 1,
        backgroundColor:'#00001f'
    },
});

export default ShoppingScreen;
