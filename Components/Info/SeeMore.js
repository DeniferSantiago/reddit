import React from "react";
import { Linking, View } from "react-native";
import { Title, TouchableRipple, useTheme } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export const SeeMore = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const SeeMore = () => {
        Linking.openURL("https://github.com/DeniferSantiago");
    };
    return (
        <LinearGradient
            style={styles.seeMoreGradient}
            colors={theme.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <TouchableRipple
                style={styles.seeMoreButton}
                rippleColor={theme.colors.sutil}
                borderless
                underlayColor={theme.colors.sutil}
                onPress={SeeMore}>
                <View style={styles.seeMoreButtonContent}>
                    <Title numberOfLines={1} style={styles.fontSubtitle}>
                        See More
                    </Title>
                    <MaterialCommunityIcons
                        size={theme.size.bigIcons}
                        color={theme.colors.icon}
                        name="github"
                        style={styles.marginIconLeft}
                    />
                </View>
            </TouchableRipple>
        </LinearGradient>
    );
};
