/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Login from './screens/Login';
import Register from './screens/Register';
import WebViewDemo from './screens/WebViewDemo';
import AppStateDemo from './screens/AppStateDemo';
import CameraDemo from './screens/CameraDemo';
import AsyncStorageDemo from './screens/AsyncStorageDemo';
import NetworkRequest from './screens/NetworkRequest';
import GeolocationDemo from './screens/GeolocationDemo';
import PieChartBasic from './screens/PieChartBasic';
import VolumeDemo from './screens/VolumeDemo';

AppRegistry.registerComponent(appName, () => Register);
