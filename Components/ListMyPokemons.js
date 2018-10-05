import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import NavigationService from '../Components/NavigationService';


export default class ListMyPokemons extends Component<Props> {
    _keyExtractor = (item, index) => '';

    _onPressItem = (pokemon) => {
        NavigationService.navigate('MyPokemon', {pokemon: pokemon});
    };

    render() {
        return(
            <FlatList
                data={this.props.my_pokemons}
                keyExtractor={this._keyExtractor}
                horizontal={false}
                numColumns={3}
                renderItem={ ({ item }) =>
                    <ListItem
                        id={item.id}
                        onPressItem={this._onPressItem}
                        pokemon_name={item.name}
                        pokemon_sprite={item.sprite}
                        pokemon={item}/>
                }
            />
        );
    }
}


class ListItem extends Component {
    _onPress = () => {

        this.props.onPressItem(this.props.pokemon);
    }

    render() {
        return(
            <TouchableOpacity onPress={this._onPress}>
                <View style={styles.item}>
                    <Image source={{ uri: this.props.pokemon.sprite}} style={[styles.img, styles.items]} />
                    <Text style={styles.name}>{ this.props.pokemon.name }</Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    item: {
        alignItems: 'center',
        margin: 10,
    },

    img: {
        width: 100,
        height: 100,
    },

    name: {
        fontWeight: 'bold',
        fontSize: 20,
    }
})
