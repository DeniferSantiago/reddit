import React, { useMemo } from "react";
import { Image, View } from "react-native";
import { Caption, IconButton, Subheading, useTheme } from "react-native-paper";
import { Resources } from "../../Helpers/Resources";
import { CustomTheme, Post } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import moment from "moment";
import { TimeFormat } from "../../Helpers/TimeFormatter";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
/**@param {({ post: Post })} param0*/
export const PostHeader = ({ post }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const created = useMemo(
        () => moment(post.created).utc(true),
        [post.created]
    );
    /**@type {Post[]} */
    const savedPosts = useSelector(state => state.PostReducer.savedPosts);
    const saved = useMemo(
        () => savedPosts.some(s => s.id === post.id),
        [post.id, savedPosts]
    );
    const icon = saved ? "bookmark" : "bookmark-outline";
    const color = saved ? theme.colors.primary : theme.colors.icon;
    const dispatch = useDispatch();
    const ToggleSaved = () => {
        if (saved) dispatch(PostActions.UnSavePost(post.id));
        else dispatch(PostActions.SavePost(post));
    };
    return (
        <View style={[styles.innerContent, styles.rowSeparate]}>
            <View style={[styles.row, styles.childMiddle]}>
                <Image
                    source={{ uri: Resources.defaults.Profile }}
                    style={styles.postHeaderProfile}
                />
                <View style={styles.separateLeft}>
                    <Subheading style={styles.fontSubtitle} numberOfLines={1}>
                        {post.author}
                    </Subheading>
                    <Caption style={styles.fontNormal} numberOfLines={1}>
                        {post.subreddit} • {TimeFormat(created)}
                    </Caption>
                </View>
            </View>
            <IconButton
                icon={icon}
                style={styles.noMargin}
                color={color}
                onPress={ToggleSaved}
            />
        </View>
    );
};
