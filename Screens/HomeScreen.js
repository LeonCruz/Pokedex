import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import ListMyPokemons from '../Components/ListMyPokemons';
import SearchIcon from '../Components/SearchIcon';
import NavigationService from '../Components/NavigationService';


export default class HomeScreen extends Component<Props> {
    static navigationOptions = {
        title: 'Pokedéx',

        headerRight: (
            <SearchIcon func={() => {NavigationService.navigate('SearchPokemon', {})} }/>
        )
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
            {
                id: 7,
                name: 'Pokémon 7',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
            },
            {
                id: 8,
                name: 'Pokémon 8',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
            },
            {
                id: 9,
                name: 'Pokémon 9',
                sprite: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
            },
        ],
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>

                </Text>
                <Text style={styles.title}>Meus Pokémons</Text>
                <ListMyPokemons my_pokemons={this.state.my_pokemons}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    icon: {
        marginRight: 10,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
