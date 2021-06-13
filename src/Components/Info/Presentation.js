import React from "react";
import { Image, View } from "react-native";
import { Caption, Title, useTheme } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import LinearGradient from "react-native-linear-gradient";
import { Resources } from "../../Helpers/Resources";

export const Presentation = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    return (
        <>
            <LinearGradient
                style={styles.infoGradient}
                colors={theme.gradient}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}>
                <Image
                    source={{ uri: Resources.Me }}
                    style={styles.infoProfile}
                />
            </LinearGradient>
            <View style={styles.childMiddle}>
                <Title numberOfLines={1} style={styles.fontHeader}>
                    Denifer Santiago
                </Title>
                <Caption numberOfLines={1} style={styles.fontNormal}>
                    FullStack Developer
                </Caption>
            </View>
        </>
    );
};
