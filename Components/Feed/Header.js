import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image } from "react-native";
import { Appbar, useTheme } from "react-native-paper";
import { FeedScreens } from "../../Helpers/Consts";
import { Resources } from "../../Helpers/Resources";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import { StatusBar } from "../StatusBar";
export const Header = ({ title = "Reddit", infoScreen = FeedScreens.Info }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const { navigate } = useNavigation();
    const GoToInfo = () => {
        navigate(infoScreen);
    };
    return (
        <>
            <StatusBar translucent backgroundColor={theme.colors.transparent} />
            <Appbar.Header style={styles.header}>
                <Image
                    style={styles.feedHeaderLogo}
                    source={{ uri: Resources.Logo }}
                />
                <Appbar.Content title={title} style={styles.fontTitle} />
                <Appbar.Action
                    icon="information-outline"
                    rippleColor={theme.colors.sutil}
                    size={theme.size.touchableIcons}
                    onPress={GoToInfo}
                    underlayColor={theme.colors.sutil}
                />
            </Appbar.Header>
        </>
    );
};
