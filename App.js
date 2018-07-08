import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Screens from './Screens/Screens';
import NavigationService from './Components/NavigationService';


export default class App extends Component<Props> {
    render() {
        return (
            <Screens
                ref={navigator_ref => {
                    NavigationService.setTopLevelNavigator(navigator_ref)
                }}/>
        );
    }
}
