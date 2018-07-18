import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';


export default class SearchPokemonScreen extends Component {
    static navigationOptions = {
        headerTitle: <TextInput
                        placeholder="Nome do Pokémon"
                        autoFocus={true}
                        style={{flex: 1, fontSize: 18}}/>

    };

    render() {
        return(
            <View>

            </View>
        );
    }
}
