import React,{Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,Image,Dimensions,ImageBackground
} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import LinearGradient from 'react-native-linear-gradient';
import Carousel from 'react-native-snap-carousel';
import HeaderView from "./HeaderView";
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class HomeScreen extends Component{

    constructor() {
        super();
        this.state={
            data: [
                {
                    name: "Nike JoyRider", desc:"Lorem ipsum dolor sit amet, consectetur",URL:"https://i.ibb.co/MCt64hG/nike.png"
                },
                {
                    name: "Nike JoyRider", desc:"Lorem ipsum dolor sit amet, consectetur",URL:"https://i.ibb.co/mDz38X2/nike2.png"
                },
                {
                    name: "Nike JoyRider", desc:"Lorem ipsum dolor sit amet, consectetur",URL:"https://i.ibb.co/mC9bgwX/nike3.png"
                }
            ]
        };
    }
    _renderItem = ({item}) => {
        return (
            <View style={{flex: 1,marginTop:15,marginVertical:15}}>
                <ImageBackground source={{uri: item.URL}} style={{
                    height: Height*0.5,
                    width: Width * 0.7,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    overflow: 'hidden'
                }} imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden'}}
                defaultSource={require('../../QuikieApps/images/nike3.png')}>
                </ImageBackground>
                <View style={{backgroundColor:'#171732',padding:25,borderBottomLeftRadius:10,borderBottomRightRadius:10}}>
                <Text style={{color:'white',fontWeight:'500',
                    fontFamily: 'lucida grande',
                    fontSize:15,marginBottom:10}}>
                    {item.name}</Text>
                <Text style={{color:'#DFDFDF',fontSize:12}}>{item.desc}</Text>
                </View>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.backgroundStyle}>
                <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
                <ScrollView>
                    <HeaderView/>
                        <View>
                        <Text style={{color: 'white', fontSize: 14, marginTop: 15, marginLeft: 20}}>NEWS</Text>
                    </View>
                    <View>
                        <Carousel
                            ref={(c) => {
                                this._carousel = c;
                            }}
                            data={this.state.data}
                            renderItem={this._renderItem}
                            sliderWidth={Width}
                            itemWidth={Width*0.7}
                            autoplay={true}
                            autoplayInterval={5000}
                            firstItem={0}
                            loop={true}
                            activeSlideOffset={2}
                            layoutCardOffset={18}
                        />
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

export default HomeScreen;
