import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import  Screens from './Screens/Screens.js';


export default class App extends Component<Props> {
    render() {
        return (
            <View>
                <Screens />                
            </View>
        );
    }
}
