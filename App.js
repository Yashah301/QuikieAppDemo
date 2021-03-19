import React,{Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,Image
} from 'react-native';
import BottomNavigation from "./App/BottomNavigation";

class App extends Component {

  constructor() {
    super();
    this.state = {
      timePassed:false
    };
  }

  render() {
    setTimeout(() => {this.setState({timePassed: true})}, 2500)
    if(!this.state.timePassed)
    return (
        <SafeAreaView style={styles.backgroundStyle}>
          <StatusBar barStyle='light-content' backgroundColor={'#00001f'}/>
          <View style={styles.container}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <View style={styles.box}>
                <View style={{
                  position: 'absolute', top: 40, right: 30, alignSelf: 'flex-end',
                  width: 17, height: 17, backgroundColor: '#1A97B9'
                }}/>
                <Image source={require('./images/logo.png')}
                       style={{width: 194, height: 155}}
                       resizeMode="contain"/>
              </View>
            </View>
          </View>
        </SafeAreaView>
    );
    else {
      return (<BottomNavigation/>)
    }
  }
}

const styles = StyleSheet.create({
  backgroundStyle:{
    flex: 1,
    backgroundColor:'#00001f'
  },
  container:{
    flex: 1,justifyContent:'center',alignItems:'center'
  },
  box:{
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
    margin: 10,
    borderColor: '#24244B',
    borderWidth: 1,
    borderRadius: 150
  }
});

export default App;
