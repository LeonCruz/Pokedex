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
                name: 'Pokémon 1',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
            },
            {
                id: 2,
                name: 'Pokémon 2',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
            },
            {
                id: 3,
                name: 'Pokémon 3',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
            },
            {
                id: 4,
                name: 'Pokémon 4',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
            },
            {
                id: 5,
                name: 'Pokémon 5',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
            },
            {
                id: 6,
                name: 'Pokémon 6',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
            },
        ],
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Meus Pokémons</Text>
                <ListMyPokemons my_pokemons={this.state.my_pokemons}/>
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
