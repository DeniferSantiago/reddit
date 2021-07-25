import React, { useMemo } from "react";
import { Image, View } from "react-native";
import { Caption, IconButton, Subheading, useTheme } from "react-native-paper";
import { Resources } from "../../Helpers/Resources";
import { CustomTheme, Post } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import moment from "moment";
import { TimeFormat } from "../../Helpers/TimeFormatter";
import { useSavedPost } from "../../Hooks/Services/useSavedPost";
/**@param {({ post: Post })} param0*/
export const PostHeader = ({ post }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const created = useMemo(
        () => moment(post.created).utc(true),
        [post.created]
    );
    const { saved, ToggleSaved, loading } = useSavedPost(post);

    const icon = saved ? "bookmark" : "bookmark-outline";
    const color = saved ? theme.colors.primary : theme.colors.icon;
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
                disabled={loading}
                onPress={ToggleSaved}
            />
        </View>
    );
};
