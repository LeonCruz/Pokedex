import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class HomeScreen extends Component<Props> {
    render() {
        return (
            <View>
                <Text style={styles.text}>Olá</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    text: {
        flex: 1,
        fontSize: 100,
        color: 'red',
    }
})
