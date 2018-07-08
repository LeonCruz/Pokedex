import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';


export default class MyPokemonScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('pokemon', 'Sem nome').name,
        }
    }

    render() {
        const { navigation } = this.props;
        const pokemon = navigation.getParam('pokemon', 'Sem Nome');

        return(
            <View style={styles.container}>
                <Image
                    source={{uri: pokemon.sprite}}
                    style={styles.sprite}/>
                <Text style={styles.name}>{pokemon.name}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },

    sprite: {
        width: 150,
        height: 150,
    },

    name: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})
