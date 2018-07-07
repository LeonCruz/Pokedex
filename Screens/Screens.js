import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen.js';


export default createStackNavigator({
    Home: {
        screen: HomeScreen
    },
});
