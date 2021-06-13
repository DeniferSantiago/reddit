import React from "react";
import { View } from "react-native";
import { useTheme, Text, Caption } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import LinearGradient from "react-native-linear-gradient";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
export const Card = ({ icon, text }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    return (
        <LinearGradient
            style={styles.cardGradient}
            colors={theme.gradient}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}>
            <View style={styles.card}>
                <MaterialCommunityIcons
                    size={theme.size.loaders}
                    color={theme.colors.icon}
                    name={icon}
                />
                <Caption style={styles.fontNormal} numberOfLines={1}>
                    {text}
                </Caption>
            </View>
        </LinearGradient>
    );
};
