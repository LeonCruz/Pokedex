import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


export default class SearchIcon extends Component {
    render() {
        return(
            <TouchableOpacity style={{marginRight: 10}}>
                <Icon name="search" size={30}
                    color="#000" backgroundColor="#fff"/>
            </TouchableOpacity>
        );
    }
}
