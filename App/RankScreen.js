import React,{Component} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,Switch,
    View,Image,Dimensions,FlatList
} from 'react-native';
import {Grid, Row, Col} from 'react-native-easy-grid';
import HeaderView from "./HeaderView";
import IconAn from 'react-native-vector-icons/AntDesign';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

class RankScreen extends Component{

    constructor() {
        super();
        this.state={
            DATA :[
                {
                    id: '1',
                    title: 'First Item',
                    image:'https://masterclass.pk/wp-content/uploads/2019/07/Diploma-in-Culinary-Artistry.jpg',
                    ranking:15210,
                    bagde:'https://i.ibb.co/cFrWps1/list1.png'
                },
                {
                    id: '2',
                    title: 'Second Item',
                    image:'https://images.unsplash.com/photo-1589785148112-83debe32a7ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    ranking:12710,
                    bagde:'https://i.ibb.co/82q64VX/list2.png'
                },
                {
                    id: '3',
                    title: 'Third Item',
                    image:'https://www.wallpapertip.com/wmimgs/11-111591_beautiful-lady-good-night.jpg',
                    ranking:10980,
                    bagde:'https://i.ibb.co/XjckC5J/list3.png'
                },
                {
                    id: '4',
                    title: 'Fourth Item',
                    image:'https://masterclass.pk/wp-content/uploads/2019/07/Diploma-in-Culinary-Artistry.jpg',
                    ranking:15210,
                    bagde:'https://i.ibb.co/3yd8qyT/list4.png'
                },
                {
                    id: '5',
                    title: 'Fifth Item',
                    image:'https://images.unsplash.com/photo-1589785148112-83debe32a7ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    ranking:12710,
                    bagde:'https://i.ibb.co/82q64VX/list2.png'
                },
                {
                    id: '6',
                    title: 'First Item',
                    image:'https://masterclass.pk/wp-content/uploads/2019/07/Diploma-in-Culinary-Artistry.jpg',
                    ranking:15210,
                    bagde:'https://i.ibb.co/cFrWps1/list1.png'
                },
                {
                    id: '7',
                    title: 'Second Item',
                    image:'https://images.unsplash.com/photo-1589785148112-83debe32a7ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    ranking:12710,
                    bagde:'https://i.ibb.co/82q64VX/list2.png'
                },
                {
                    id: '8',
                    title: 'Third Item',
                    image:'https://www.wallpapertip.com/wmimgs/11-111591_beautiful-lady-good-night.jpg',
                    ranking:10980,
                    bagde:'https://i.ibb.co/XjckC5J/list3.png'
                },
                {
                    id: '9',
                    title: 'Fourth Item',
                    image:'https://masterclass.pk/wp-content/uploads/2019/07/Diploma-in-Culinary-Artistry.jpg',
                    ranking:15210,
                    bagde:'https://i.ibb.co/3yd8qyT/list4.png'
                },
                {
                    id: '10',
                    title: 'Fifth Item',
                    image:'https://images.unsplash.com/photo-1589785148112-83debe32a7ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhdXRpZnVsJTIwbGFkeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
                    ranking:12710,
                    bagde:'https://i.ibb.co/82q64VX/list2.png'
                },
            ],
            switchValue:true,
        };
    }
    renderItem = ({item}) => {
        return (
            <View style={{flex: 1,marginTop:15,marginVertical:15}}>
                <Row style={{flex: 1,borderRadius:15,borderColor:'#212143',borderBottomWidth:1,paddingBottom:15}}>
                    <Col size={0.5} style={{justifyContent: 'center',alignItems: 'center'}}>
                        <Text style={{color: 'white'}}>{item.id}</Text>
                    </Col>
                    <Col size={0.7} style={{height: 50, margin: 1, shadowColor: "#000"}}>
                        <Image
                            style={{flex: 1,height: 50,width:50, borderRadius: 25, shadowColor: "#000"}}
                            source={{uri: item.image}}
                        />
                    </Col>
                    <Col>
                        <Row><Text style={{color: 'white',fontSize:15,marginBottom:5}}>{item.title}</Text></Row>
                        <Row>
                            <IconAn name="star" color={'white'} size={12} style={{marginRight:5,marginTop:2}} />
                            <Text style={{color: 'lightgrey',fontSize:12,}}>{item.ranking}</Text>
                        </Row>
                    </Col>
                    <Col style={{alignItems: 'flex-end'}}>
                        <Image
                            style={{flex: 1,height: 50,width:50, borderRadius: 25,marginRight:20, shadowColor: "#000"}}
                            source={{uri: item.bagde}}
                        />
                    </Col>
                </Row>
            </View>
        );
    }

    render() {
        return (
            <SafeAreaView style={styles.backgroundStyle}>
                <StatusBar barStyle='light-content' translucent backgroundColor="transparent"/>
                    <HeaderView/>
                <View style={{width: Width,flexDirection:'row',justifyContent: 'space-between'}}>
                    <View>
                    <Text style={{color: 'white', fontSize: 14, marginTop: 15, marginLeft: 20}}>RANKING</Text>
                </View>
                    <View style={{flexDirection:'row',alignSelf:'flex-end'}}>
                        <Text style={{color: 'white', fontSize: 15, marginHorizontal: 7, marginVertical: 15}}>Monthly</Text>
                        <Switch
                            trackColor={{ false: "#212143", true: "#212143" }}
                            thumbColor={"#36C7FF"}
                            ios_backgroundColor="#3e3e3e"
                            onValueChange={()=>this.setState({switchValue:!this.state.switchValue})}
                            value={this.state.switchValue}
                        />
                        <Text style={{color: 'white', fontSize: 15, marginHorizontal: 10, marginVertical: 15,alignSelf:'flex-end'}}>Yearly</Text>
                    </View>
                </View>
                    <View style={{marginTop:20}}>
                        <FlatList
                            data={this.state.DATA}
                            renderItem={this.renderItem}
                            style={{backgroundColor:'#00001f'}}
                            keyExtractor={item => item.id}
                            contentContainerStyle={{
                                backgroundColor: '#00001f', //list background color
                                marginBottom: 60,
                            }}
                        />
                    </View>
            </SafeAreaView>
        );
    }
};

const styles = StyleSheet.create({
    backgroundStyle:{
        flex: 1,
        backgroundColor:'#00001f'
    },
    header:{
        paddingTop:22,
        backgroundColor: '#0D0D25',
        height:120,width:Width,justifyContent:'center',alignItems:'center'
    },
});

export default RankScreen;
