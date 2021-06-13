import React from "react";
import { StatusBar as OriginStatusBar, StatusBarProps } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import { useTheme } from "react-native-paper";
/**
 * @param {StatusBarProps} props
 */
export const StatusBar = props => {
    const isFocused = useIsFocused();
    const theme = useTheme();
    return isFocused ? (
        <OriginStatusBar
            animated
            barStyle={!theme.dark ? "dark-content" : "light-content"}
            {...props}
        />
    ) : null;
};
