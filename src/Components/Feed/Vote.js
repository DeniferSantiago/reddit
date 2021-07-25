import React from "react";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { DisplayCant } from "../../Helpers/Helpers";
import { CustomTheme } from "../../Helpers/Types";
import { useVote } from "../../Hooks/Services/useVote";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
/**
 * @typedef {Object} VoteParams
 * @property {Number} score
 * @property {String} id
 */
/**
 * @param {VoteParams} param0
 */
export const Vote = ({ score, id }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);

    const { isUpVote, isDownVote, VotePress, loading, newScore } = useVote(
        id,
        score
    );

    const upColor = isUpVote ? theme.colors.primary : theme.colors.icon;
    const upIcon = isUpVote ? "arrow-up-bold" : "arrow-up-bold-outline";
    const downColor = isDownVote ? theme.colors.error : theme.colors.icon;
    const downIcon = isDownVote ? "arrow-down-bold" : "arrow-down-bold-outline";
    return (
        <View
            style={[
                styles.rowSeparate,
                styles.childMiddle,
                styles.flex,
                styles.innerContentCentered
            ]}>
            <IconButton
                icon={upIcon}
                size={theme.size.touchableIcons}
                color={upColor}
                disabled={loading}
                onPress={() => VotePress(1)}
                style={[styles.noMargin, styles.marginIconRight]}
            />
            <Text style={styles.fontBig} numberOfLines={1}>
                {DisplayCant(newScore)}
            </Text>
            <IconButton
                icon={downIcon}
                size={theme.size.touchableIcons}
                color={downColor}
                disabled={loading}
                onPress={() => VotePress(-1)}
                style={[styles.noMargin, styles.marginIconLeft]}
            />
        </View>
    );
};
