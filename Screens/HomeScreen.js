import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Pokedéx',
    };

    state = {
        my_pokemons : [],
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={styles.text}>Olá, Mundo</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
