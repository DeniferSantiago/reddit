import React, { useMemo } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../Helpers/Types";

export const BottomSheetBackground = ({ style }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    const containerStyle = useMemo(
        () => [style, { backgroundColor: theme.colors.similar }],
        [style, theme.colors.similar]
    );
    return <View style={containerStyle} />;
};
