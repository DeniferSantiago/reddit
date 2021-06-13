import React from "react";
import { View } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { CustomTheme } from "../Helpers/Types";
import { Normalize, getStyles } from "../Screens/GlobalStyles";
import { StatusBar } from "./StatusBar";
import { useNavigation } from "@react-navigation/native";
/**@param {({ title: String, loading: Boolean })} param0 */
export const Header = ({ title, loading }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const { goBack } = useNavigation();
    return (
        <>
            <StatusBar backgroundColor="transparent" translucent />
            <Appbar.Header style={styles.header}>
                <Appbar.Action
                    icon="chevron-left"
                    size={theme.size.touchableIcons}
                    onPress={goBack}
                    disabled={loading}
                />
                <Appbar.Content
                    title={title}
                    titleStyle={[styles.fontTitle, styles.selfCenter]}
                />
                <View style={{ width: Normalize(60) }} />
            </Appbar.Header>
        </>
    );
};
