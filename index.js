/**
 * @format
 */
import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import { enableScreens } from "react-native-screens";
enableScreens();
import "react-native-gesture-handler";
import Moment from "moment";
Moment.locale("es-do");
AppRegistry.registerComponent(appName, () => App);
