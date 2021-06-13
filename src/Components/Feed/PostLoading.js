import React from "react";
import { useWindowDimensions } from "react-native";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import { Normalize } from "../../Screens/GlobalStyles";

export const PostLoading = ({ loading }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const { width, height } = useWindowDimensions();
    const skeletonHeight = (height - Normalize(100)) * 0.75;
    return (
        <SkeletonContent
            containerStyle={styles.listLoading}
            isLoading={loading}
            layout={[
                {
                    key: "profile",
                    width: Normalize(50),
                    height: Normalize(50),
                    borderRadius: Normalize(50) / 2,
                    position: "absolute",
                    top: Normalize(10),
                    left: Normalize(10)
                },
                {
                    key: "title_section",
                    width: width - Normalize(130),
                    height: Normalize(50),
                    position: "absolute",
                    top: Normalize(10),
                    left: Normalize(70)
                },
                {
                    key: "save_button",
                    width: theme.size.bigIcons,
                    height: theme.size.bigIcons,
                    borderRadius: theme.roundness,
                    position: "absolute",
                    top: Normalize(10),
                    right: Normalize(10)
                },
                {
                    key: "description",
                    position: "absolute",
                    top: Normalize(70),
                    left: Normalize(10),
                    height: Normalize(50),
                    width: width - Normalize(20)
                },
                {
                    key: "image",
                    position: "absolute",
                    top: Normalize(130),
                    height: skeletonHeight - Normalize(130) - Normalize(60),
                    width: width
                },
                {
                    key: "buttons",
                    position: "absolute",
                    bottom: 0,
                    width,
                    height: Normalize(50)
                }
            ]}
            boneColor={theme.colors.surface}
            highlightColor={theme.colors.sutil}
        />
    );
};
