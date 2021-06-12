/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useColorScheme } from "react-native";
import { darkTheme, theme } from "./Helpers/Theme";
import { Provider } from "react-redux";
import { store } from "./Store/store";
import { Provider as PaperProvider } from "react-native-paper";
import { TabRoot } from "./Screens/TabApp/TabRoot";
const App = () => {
    const isDark = useColorScheme() === "dark";
    return (
        <Provider store={store}>
            <PaperProvider theme={isDark ? darkTheme : theme}>
                <SafeAreaProvider>
                    <TabRoot />
                </SafeAreaProvider>
            </PaperProvider>
        </Provider>
    );
};
export default App;
