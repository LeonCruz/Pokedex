import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';


const Screens = createStackNavigator(
    {
        Home: HomeScreen,
    },
);

export default Screens;
