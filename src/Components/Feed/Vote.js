import React from "react";
import { View } from "react-native";
import { IconButton, Text, useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
import { DisplayCant } from "../../Helpers/Helpers";
import { CustomTheme } from "../../Helpers/Types";
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
    /**@type {({ id:String, vote: -1 | 1 })[]}*/
    const votedPosts = useSelector(state => state.PostReducer.votedPosts);
    const val = votedPosts.find(v => v.id === id);
    const upVote = val?.vote === 1;
    const downVote = val?.vote === -1;
    const upColor = upVote ? theme.colors.primary : theme.colors.icon;
    const upIcon = upVote ? "arrow-up-bold" : "arrow-up-bold-outline";
    const downColor = downVote ? theme.colors.error : theme.colors.icon;
    const downIcon = downVote ? "arrow-down-bold" : "arrow-down-bold-outline";
    const dispatch = useDispatch();
    /**@param {-1 | 1} val*/
    const VotePress = v => {
        if (v === val?.vote) dispatch(PostActions.UnVotePost(id));
        else dispatch(PostActions.VotePost(id, v));
    };
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
                onPress={() => VotePress(1)}
                style={[styles.noMargin, styles.marginIconRight]}
            />
            <Text style={styles.fontBig} numberOfLines={1}>
                {DisplayCant(score)}
            </Text>
            <IconButton
                icon={downIcon}
                size={theme.size.touchableIcons}
                color={downColor}
                onPress={() => VotePress(-1)}
                style={[styles.noMargin, styles.marginIconLeft]}
            />
        </View>
    );
};
