import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ListMyPokemons from '../Components/ListMyPokemons';


export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Pokedéx',
    };

    state = {
        my_pokemons : [
            {
                id: 1,
                nome: 'Pokémon 1',
                sprite: 'https://raw.githubuserco…er/sprites/pokemon/1.png',
            },
            {
                id: 2,
                nome: 'Pokémon 2',
                sprite: 'https://raw.githubuserco…er/sprites/pokemon/2.png',
            },
            {
                id: 3,
                nome: 'Pokémon 3',
                sprite: 'https://raw.githubuserco…er/sprites/pokemon/3.png',
            },
            {
                id: 4,
                nome: 'Pokémon 4',
                sprite: 'https://raw.githubuserco…er/sprites/pokemon/4.png',
            },
            {
                id: 5,
                nome: 'Pokémon 5',
                sprite: 'https://raw.githubuserco…er/sprites/pokemon/5.png',
            },
        ],
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Olá</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
