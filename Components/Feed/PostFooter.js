import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { DisplayCant } from "../../Helpers/Helpers";
import { CustomTheme, Post } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import { ActionButton } from "../ActionButton";
import { Vote } from "./Vote";
import Share from "react-native-share";
import { GetRedditPage } from "../../Helpers/Consts";
/**@param {({ post: Post, goToPost: () => void })} param0*/
export const PostFooter = ({ post, goToPost }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const onPressShare = () => {
        Share.open({
            title: `Sharing: ${post.title}`,
            url: GetRedditPage(post.link)
        })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                err && console.log(err);
            });
    };
    return (
        <View style={styles.rowSeparate}>
            <Vote score={post.score} id={post.id} />
            <ActionButton
                color={theme.colors.icon}
                icon="comment-outline"
                style={[styles.flex, styles.childMiddle]}
                size={theme.size.touchableIcons}
                onPress={goToPost}
                text={DisplayCant(post.numComments)}
            />
            <ActionButton
                color={theme.colors.icon}
                icon="share-variant"
                style={[styles.flex, styles.childMiddle]}
                size={theme.size.touchableIcons}
                text="Share"
                onPress={onPressShare}
            />
        </View>
    );
};
