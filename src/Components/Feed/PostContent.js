import React, { useCallback, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import { Paragraph, useTheme } from "react-native-paper";
import { FixImageUrl } from "../../Helpers/Helpers";
import { CustomTheme, Post as PostType } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import { CacheableImage } from "react-native-auto-cacheable-image";
/**@param {({ post: PostType })} param0 */
export const PostContent = ({ post }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const { width: totalWidth } = useWindowDimensions();
    const [numberOfLines, setNumberOfLines] = useState(3);
    const ToggleNumberOfLines = () =>
        setNumberOfLines(numberOfLines ? 3 : null);
    const textSize =
        post.preview.images?.length > 0 ? styles.fontNormal : styles.fontBig;
    const renderImage = useCallback(
        /**@param {({ item: import("../../Helpers/Types").Image})} param0*/
        ({ item }) => {
            const image =
                item.resolutions?.find(r => r.width === 960) ?? item.source;
            const url = FixImageUrl(image.url);
            const ratio = image.width / image.height;
            const height = totalWidth / ratio;
            return (
                <CacheableImage
                    source={{ uri: url }}
                    style={{ height, width: totalWidth }}
                />
            );
        },
        [styles.postContentImage]
    );
    return (
        <View>
            <Paragraph
                style={[styles.contentCentered, textSize]}
                numberOfLines={3}
                onPress={ToggleNumberOfLines}>
                {post.title}
            </Paragraph>
            {post.preview?.images ? (
                <FlatList
                    data={post.preview.images}
                    horizontal
                    renderItem={renderImage}
                    showsHorizontalScrollIndicator={false}
                />
            ) : null}
        </View>
    );
};
