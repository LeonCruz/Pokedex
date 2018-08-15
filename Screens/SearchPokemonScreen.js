import React, { Component } from 'react';
import {StyleSheet, Text, View, TextInput, ActivityIndicator, Image, Button} from 'react-native';
const Pokedex = require('pokedex-promise-v2');

import SearchIcon from '../Components/SearchIcon';


export default class SearchPokemonScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name_pokemon: '',
            searching: false,
            resp: false,
            sprite: '',
            pokemon_name: '',
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
                    resp: true,
                    sprite: resp.sprites.front_default,
                    pokemon_name: resp.name,
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

    show_pokemon = () => {
        if(this.state.resp && !this.state.searching){
            return <PokemonSearched name={this.state.pokemon_name} sprite={this.state.sprite}/>
        }

    }

    render() {
        return(
            <View style={styles.container}>
                {this.display_spinner()}
                {this.show_pokemon()}
            </View>
        );
    }
}


class PokemonSearched extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.name}> {this.props.name} </Text>
                <Image source={{uri: this.props.sprite}} style={styles.sprite}/>
                <Button title="Adicionar" onPress={() => {}}/>
            </View>
        )
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
    },

    btn_add: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 10,
    },

    text_btn: {
        fontSize: 20,
        color: 'white'
    }
})
