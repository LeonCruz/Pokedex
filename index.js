/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {YellowBox} from 'react-native';

YellowBox.ignoreWarnings([
    'source.uri should not be an empty string',
    'Setting a timer for a long period of time'
]);

AppRegistry.registerComponent(appName, () => App);
