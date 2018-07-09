import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';


export default class SearchIcon extends Component {
    render() {
        return(
            <TouchableOpacity>
                <Image
                    source={require('../assets/imgs/search.png')}
                    style={styles.icon}/>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    }
})
