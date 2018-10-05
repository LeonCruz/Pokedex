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
        my_pokemons : [],
    }

    async componentDidMount() {
        try {
            pokemon = await AsyncStorage.getItem('my_pokemons');
            this.setState({
                my_pokemons: [
                    ...this.state.my_pokemons,
                    JSON.parse(pokemon),
                ]
            });

        } catch (error) {
            await AsyncStorage.setItem('my_pokemons', '');
            alert(error);
        }
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
