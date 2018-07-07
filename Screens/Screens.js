import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';


const Screens = createStackNavigator(
    {
        Home: HomeScreen,
    },
);

export default Screens;
