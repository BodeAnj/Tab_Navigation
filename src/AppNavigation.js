import  React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createAppContainer} from 'react-navigation';
import Home from './Components/Home/Home';
import Welcome from './Components/Welcome';
import Settings from './Components/Settings';
import Profile from './Components/Profile';
import List from './Components/Home/List'
import Item from './Components/Home/Item'

const HomeNavigator = createStackNavigator({
    Home:{screen:Home,
        navigationOptions: () => ({
            title: 'Home',
            headerStyle: {
            backgroundColor: 'green',
        },
    
        headerTitleStyle:{
            color:'white',
        },

        })
},
    List: {screen:List},
    Item:{ screen:Item }
})

 const Navigator = createBottomTabNavigator({
    //  Home :{ screen:HomeNavigator },
    Home:{screen:HomeNavigator},
     Welcome: {screen:Welcome},
     Settings: {screen:Settings},
     Profile: {screen:Profile},
})


export default createAppContainer(Navigator)

