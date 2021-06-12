import React from "react";
import { View, ViewStyle } from "react-native";
import { Text, TouchableRipple, useTheme } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { CustomTheme } from "../Helpers/Types";
import { getStyles } from "../Screens/GlobalStyles";
/**
 * @typedef {Object} ActionButtonParams
 * @property {String} icon
 * @property {ViewStyle} style
 * @property {String} color
 * @property {String} text
 * @property {() => void} onPress
 * @property {Number} size
 */
/**
 * @param {ActionButtonParams} param0
 */
export const ActionButton = ({ icon, size, color, text, onPress, style }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    return (
        <TouchableRipple
            style={style}
            onPress={onPress}
            rippleColor={theme.colors.sutil}
            underlayColor={theme.colors.sutil}>
            <View style={[styles.row, styles.childMiddle, styles.innerContent]}>
                <MaterialCommunityIcons
                    size={size}
                    name={icon}
                    color={color}
                    style={styles.marginIconRight}
                />
                <Text style={{ ...styles.fontBig, color }}>{text}</Text>
            </View>
        </TouchableRipple>
    );
};
