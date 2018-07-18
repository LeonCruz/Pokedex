import { createStackNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import MyPokemonScreen from './MyPokemonScreen';
import SearchPokemonScreen from './SearchPokemonScreen';


const Screens = createStackNavigator(
    {
        Home: HomeScreen,
        MyPokemon: MyPokemonScreen,
        SearchPokemon: SearchPokemonScreen,
    },
    {
        initialRoute: 'Home',
    }
);

export default Screens;
