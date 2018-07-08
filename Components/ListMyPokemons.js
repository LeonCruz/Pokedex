import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';


export default class ListMyPokemons extends Component<Props> {
    _keyExtractor = (item, index) => item.id.toString();

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
                        pokemon_name={item.name}
                        pokemon_sprite={item.sprite} />
                }
            />
        );
    }
}


class ListItem extends Component {
    render() {
        return(
            <TouchableOpacity onPress={() => {}}>
                <View style={styles.item}>
                    <Image source={{ uri: this.props.pokemon_sprite}} style={[styles.img, styles.items]} />
                    <Text style={styles.items}>{ this.props.pokemon_name }</Text>
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
})
