import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, ActivityIndicator, Image} from 'react-native';
const Pokedex = require('pokedex-promise-v2');

import SearchIcon from '../Components/SearchIcon';


export default class SearchPokemonScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name_pokemon: '',
            searching: false,
            sprite: '',
            pokeon_name: '',
        }
    }

    componentDidMount() {
        this.props.navigation.setParams({
            _alter_name_pokemon: this.alter_name_pokemon.bind(this),
            _search_pokemon: this.search_pokemon.bind(this),
        })
    }

    static navigationOptions = ({ navigation }) => ({
        headerTitle: <TextInput
                        placeholder="Nome do Pokémon"
                        autoFocus={true}
                        autoCapitalize={'none'}
                        style={{flex: 1, fontSize: 18}}
                        onChangeText={(name_pokemon) => navigation.state.params._alter_name_pokemon(name_pokemon)}
                        />,

        headerRight: (
            <SearchIcon func={navigation.state.params._search_pokemon}/>
        )
    });

    alter_name_pokemon = (name_pokemon) => {
        this.setState({name_pokemon: name_pokemon})
    };

    search_pokemon = () => {
        if(!this.state.name_pokemon){
            return alert('Escreva o nome do Pokemon!')
        }

        this.setState({ searching: true })

        let p = new Pokedex();

        p.getPokemonByName(this.state.name_pokemon)
            .then((resp) => {
                this.setState({
                    searching: false,
                    sprite: resp.sprites.front_default,
                    pokeon_name: resp.name,
                })
            })
            .catch((error) => {
                this.setState({ searching: false })
                alert(error)
            })
    }

    display_spinner() {
        return this.state.searching && <ActivityIndicator size="large" color="#00ff00"/>
    }

    render() {
        return(
            <View style={styles.container}>
                {this.display_spinner()}
                <Text style={styles.name}> { this.state.pokeon_name }</Text>
                <Image source={{uri: this.state.sprite}} style={styles.sprite}/>
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

    sprite: {
        width: 150,
        height: 150,
        marginBottom: 0,
    },

    name: {
        fontSize: 20,
        fontWeight: 'bold',

    }
})
