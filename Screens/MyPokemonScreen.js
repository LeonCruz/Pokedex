import React, { Component } from 'react';
import {StyleSheet, Text, View} from 'react-native';


export default class MyPokemonScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('pokemon', 'Sem nome').name,
        }
    }

    render() {
        const { navigation } = this.props;
        const pokemon = navigation.getParam('pokemon', 'Sem Nome');

        return(
            <View>
                <Text>{pokemon.name}</Text>
                <Text>Olá</Text>
            </View>
        );
    }
}
