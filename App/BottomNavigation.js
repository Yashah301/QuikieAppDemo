import React, {Component} from 'react';
import IconIn from 'react-native-vector-icons/Ionicons';
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from "./HomeScreen";
import QrcodeScreen from "./QrcodeScreen";
import RankScreen from "./RankScreen";
import ShoppingScreen from "./ShoppingScreen";


const Tab = createBottomTabNavigator();

class BottomNavigation extends Component{
    render() {
        return (
            <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                    style:{backgroundColor:'#00001f',borderTopColor:'black'}
                }}
            >
                <Tab.Screen name="Home" component={HomeScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({ color, size }) => (
                                    <IconIn name="ios-grid-outline" color={color} size={size} />
                                ),
                            }}/>
                <Tab.Screen name="Splash" component={QrcodeScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({ color, size }) => (
                                    <IconMC name="qrcode-scan" color={color} size={size} />
                                ),
                            }}/>
                <Tab.Screen name="Hello" component={RankScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({ color, size }) => (
                                    <IconIn name="ios-trophy-outline" color={color} size={size} />
                                ),
                            }}/>
                <Tab.Screen name="Setting" component={ShoppingScreen}
                            options={{
                                tabBarLabel: '',
                                tabBarIcon: ({ color, size }) => (
                                    <IconIn name="ios-cart-outline" color={color} size={size} />
                                ),
                            }}/>
            </Tab.Navigator>
            </NavigationContainer>
        );
    }

}

export default BottomNavigation
