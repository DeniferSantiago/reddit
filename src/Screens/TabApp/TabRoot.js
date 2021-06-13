import React, { useEffect } from "react";
import Entypo from "react-native-vector-icons/Entypo";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabScreens } from "../../Helpers/Consts";
import { useTheme } from "react-native-paper";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FeedRoot } from "../StackFeed/FeedRoot";
import { NavigationContainer } from "@react-navigation/native";
import { CustomTheme } from "../../Helpers/Types";
import { useDispatch } from "react-redux";
import { AppActions } from "../../Actions/AppActions";
import { SavedRoot } from "../StackSaved/SavedRoot";
import SplashScreen from "react-native-splash-screen";
const Tab = createBottomTabNavigator();
export const TabRoot = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    const insets = useSafeAreaInsets();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(AppActions.LoadCache());
    }, [dispatch]);
    return (
        <NavigationContainer theme={theme} onReady={() => SplashScreen.hide()}>
            <Tab.Navigator
                initialRouteName={TabScreens.Feed}
                backBehavior="history"
                tabBarOptions={{
                    inactiveTintColor: theme.dark
                        ? theme.colors.gray
                        : theme.colors.placeholder,
                    tabStyle: {
                        backgroundColor: theme.colors.surface
                    },
                    showLabel: false,
                    activeTintColor: theme.colors.primary,
                    keyboardHidesTabBar: true,
                    style: {
                        height: theme.size.bottomTabHeight + insets.bottom,
                        paddingBottom: insets.bottom ? insets.bottom + 1 : 0
                    },
                    iconStyle: {
                        height: theme.size.touchableIcons,
                        width: theme.size.touchableIcons
                    }
                }}>
                <Tab.Screen
                    name={TabScreens.Feed}
                    component={FeedRoot}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <Entypo
                                size={
                                    theme.size.touchableIcons +
                                    (focused ? 2 : 0)
                                }
                                color={color}
                                name="home"
                            />
                        )
                    }}
                />
                <Tab.Screen
                    name={TabScreens.Home}
                    component={SavedRoot}
                    options={{
                        tabBarIcon: ({ color, focused }) => (
                            <MaterialCommunityIcons
                                size={
                                    theme.size.touchableIcons +
                                    (focused ? 2 : 0)
                                }
                                color={color}
                                name="bookmark-multiple-outline"
                            />
                        )
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};
