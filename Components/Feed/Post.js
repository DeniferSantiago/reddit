import React from "react";
import { View } from "react-native";
import { Surface, TouchableRipple, useTheme } from "react-native-paper";
import { CustomTheme, Post as PostType } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import { PostFooter } from "./PostFooter";
import { PostHeader } from "./PostHeader";
import { PostContent } from "./PostContent";
import { FeedScreens, GetRedditPage } from "../../Helpers/Consts";
import { useNavigation } from "@react-navigation/native";
export const Post = React.memo(
    /**@param {({ item: PostType })} param0 */
    ({ item }) => {
        /**@type {CustomTheme} */
        const theme = useTheme();
        var styles = getStyles(theme);
        const { navigate } = useNavigation();
        const onPostPress = () => {
            const url = GetRedditPage(item.link);
            navigate(FeedScreens.WebPost, { url });
        };
        return (
            <Surface style={styles.postContainer}>
                <TouchableRipple
                    onPress={onPostPress}
                    delayPressIn={40}
                    rippleColor={theme.colors.sutil}
                    underlayColor={theme.colors.sutil}>
                    <View style={styles.flex}>
                        <PostHeader post={item} />
                        <PostContent post={item} />
                        <PostFooter goToPost={onPostPress} post={item} />
                    </View>
                </TouchableRipple>
            </Surface>
        );
    }
);
