import {Col, Grid, Row} from "react-native-easy-grid";
import {Dimensions, Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React,{Component} from "react";
import LinearGradient from 'react-native-linear-gradient'
import * as Progress from 'react-native-progress';
const Width = Dimensions.get('window').width;


class HeaderView extends Component{

    render()
    {
        return (
            <View style={styles.header}>
                <LinearGradient
                    colors={['#534AA230', '#534AA200' ]}
                    style={{...styles.linearGradient,height:70,width:Width*0.7,left:0}}
                    start={{ x: 0.44, y: 0 }}
                    locations={[0.5, 0.5]}
                />
                <LinearGradient
                    colors={['#534AA230', '#534AA200' ]}
                    style={styles.linearGradient}
                    start={{ x: 0.6, y: 0.3}}
                    locations={[0.5, 0.5]}
                />
        <Grid style={{flex: 1,zIndex: 300}}>

            <Col style={{justifyContent: 'center', padding: 5}}>
                <Image source={require('W:/React Native Project/QuikieApps/images/man.png')}
                       style={{width: 60, height: 60, borderRadius: 30, margin: 10}}
                       resizeMode="cover"/>
            </Col>
            <Col style={{justifyContent: 'center', padding: 2}}>
                <Text style={{
                    fontFamily: 'OpenSans',
                    alignSelf: 'flex-start',
                    color: 'white',
                    fontSize: 14,
                    marginBottom: 10
                }}>DavidW</Text>
            </Col>
            <Col style={{justifyContent: 'center', alignItems: 'flex-end', padding: 20}}>
                <Row><Text style={{
                    fontWeight: '100',
                    color: 'white',
                    alignSelf: 'flex-end'
                }}>Points</Text></Row>
                <Row><Text
                    style={{fontWeight: '600', fontSize: 18, marginRight: 7, color: 'white'}}>40</Text></Row>
            </Col>
            <Col style={{justifyContent: 'center', alignItems: 'center',paddingTop: 15}}>
                <ImageBackground source={require('../../QuikieApps/images/logoSmall.png')} style={{
                    flex: 1,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                }} imageStyle={{borderTopLeftRadius: 10, borderTopRightRadius: 10,width: 24, height: 24,margin:17}}
                                 defaultSource={require('../../QuikieApps/images/logoSmall.png')}>
                <Progress.Circle  size={60} progress={0.4}  color={'#36C7FF'} unfilledColor={'#00001F'} borderColor={'black'}/>
                </ImageBackground>
            </Col>
        </Grid>
    </View>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle:{
        flex: 1,
        backgroundColor:'#00001f'
    },
    header:{
        paddingTop:22,
        backgroundColor: '#0D0D25',
        height:110,width:Width,justifyContent:'center',alignItems:'center'
    },
    linearGradient: {
        width: Width,
        height:110,
        zIndex:100,top:0,
        position:'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
export default HeaderView
