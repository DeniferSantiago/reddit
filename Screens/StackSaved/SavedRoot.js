import React from "react";
import {
    CardStyleInterpolators,
    createStackNavigator
} from "@react-navigation/stack";
import { SavedScreens } from "../../Helpers/Consts";
import { WebPost } from "../StackFeed/WebPost";
import { Saved } from "./Saved";
import { Info } from "../StackFeed/Info";
var SavedStack = createStackNavigator();
export const SavedRoot = () => {
    return (
        <SavedStack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyleInterpolator:
                    CardStyleInterpolators.forScaleFromCenterAndroid,
                gestureEnabled: true,
                gestureDirection: "vertical"
            }}>
            <SavedStack.Screen component={Saved} name={SavedScreens.Saved} />
            <SavedStack.Screen component={Info} name={SavedScreens.Info} />
            <SavedStack.Screen
                component={WebPost}
                name={SavedScreens.WebPost}
            />
        </SavedStack.Navigator>
    );
};
