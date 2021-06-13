import React from "react";
import {
    CardStyleInterpolators,
    createStackNavigator
} from "@react-navigation/stack";
import { Feed } from "./Feed";
import { FeedScreens } from "../../Helpers/Consts";
import { WebPost } from "./WebPost";
import { Info } from "./Info";
var FeedStack = createStackNavigator();
export const FeedRoot = () => {
    return (
        <FeedStack.Navigator
            headerMode="none"
            screenOptions={{
                cardStyleInterpolator:
                    CardStyleInterpolators.forScaleFromCenterAndroid,
                gestureEnabled: true,
                gestureDirection: "vertical"
            }}>
            <FeedStack.Screen component={Feed} name={FeedScreens.Feed} />
            <FeedStack.Screen component={WebPost} name={FeedScreens.WebPost} />
            <FeedStack.Screen component={Info} name={FeedScreens.Info} />
        </FeedStack.Navigator>
    );
};
