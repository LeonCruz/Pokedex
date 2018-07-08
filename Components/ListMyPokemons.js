import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';


export default class ListMyPokemons extends Component<Props> {
    _keyExtractor = (item, index) => item.id.toString();

    render() {
        return(
            <FlatList
                data={this.props.my_pokemons}
                keyExtractor={this._keyExtractor}
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
                <View style={styles.container}>
                    <View style={styles.grid_layout}>
                        <Image source={{ uri: this.props.pokemon_sprite}} style={[styles.img, styles.items]} />
                        <Text style={styles.items}>{ this.props.pokemon_name }</Text>
                    </View>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    grid_layout: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    items: {
        // marginHorizontal: 30,
    },

    img: {
        width: 100,
        height: 100,
    },
})
