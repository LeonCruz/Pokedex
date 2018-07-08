import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';
import MyPokemonScreen from './MyPokemonScreen';


const Screens = createStackNavigator(
    {
        Home: HomeScreen,
        MyPokemon: MyPokemonScreen,
    },
    {
        initialRoute: Home,
    }
);

export default Screens;
