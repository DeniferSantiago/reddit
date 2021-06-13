import { Dimensions, PixelRatio, Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
export const getStyles = theme => {
    return StyleSheet.create({
        container: {
            flex: 1
        },
        flex: {
            flex: 1
        },
        selfCenter: {
            alignSelf: "center"
        },
        alignCenter: {
            textAlign: "center"
        },
        alignRight: {
            textAlign: "right"
        },
        selfEnd: {
            alignSelf: "flex-end"
        },
        selfStart: {
            alignSelf: "flex-start"
        },
        row: {
            flexDirection: "row"
        },
        childMiddle: {
            alignItems: "center"
        },
        childCenter: {
            alignContent: "center"
        },
        childMiddleRow: {
            justifyContent: "center"
        },
        rowSeparate: {
            flexDirection: "row",
            justifyContent: "space-between"
        },
        rowEnd: {
            flexDirection: "row",
            justifyContent: "flex-end"
        },
        rowEvenly: {
            flexDirection: "row",
            justifyContent: "space-evenly"
        },
        fontSmall: {
            fontSize: theme.textSize.small,
            lineHeight: theme.textSize.smallLine
        },
        fontNormal: {
            fontSize: theme.textSize.normal,
            lineHeight: theme.textSize.normalLine
        },
        upperCase: {
            textTransform: "uppercase"
        },
        fontBig: {
            fontSize: theme.textSize.big,
            lineHeight: theme.textSize.bigLine
        },
        fontSubtitle: {
            fontSize: theme.textSize.subtitle,
            lineHeight: theme.textSize.subtitleLine
        },
        fontTitle: {
            fontSize: theme.textSize.title,
            lineHeight: theme.textSize.titleLine
        },
        fontHeader: {
            fontSize: theme.textSize.header,
            lineHeight: theme.textSize.headerLine
        },
        fontBold: {
            fontWeight: "bold"
        },
        separateTop: {
            marginTop: Normalize(10)
        },
        separateBottom: {
            marginBottom: Normalize(10)
        },
        separateLeft: {
            marginLeft: Normalize(10)
        },
        separateRight: {
            marginRight: Normalize(10)
        },
        marginMinLeft: {
            marginLeft: Normalize(2)
        },
        marginMinRight: {
            marginRight: Normalize(2)
        },
        marginMinTop: {
            marginTop: Normalize(2)
        },
        marginMinBottom: {
            marginBottom: Normalize(2)
        },
        marginIconRight: {
            marginRight: Normalize(5)
        },
        marginIconLeft: {
            marginLeft: Normalize(5)
        },
        marginIconTop: {
            marginTop: Normalize(5)
        },
        marginIconBottom: {
            marginBottom: Normalize(5)
        },
        contentCentered: {
            marginHorizontal: Normalize(10)
        },
        itemsCentered: {
            marginVertical: Normalize(10)
        },
        innerContentCentered: {
            paddingHorizontal: Normalize(10)
        },
        innerContent: {
            padding: Normalize(10)
        },
        contentMargin: {
            margin: Normalize(10)
        },
        header: {
            marginTop: Platform.OS === "ios" ? 0 : getStatusBarHeight(),
            backgroundColor: theme.colors.similar,
            height: Normalize(50),
            zIndex: 4
        },
        noMargin: {
            margin: 0
        }
    });
};
/**
 * @returns {Number}
 */
export const GetHeightScale = () => {
    const { height: SCREEN_HEIGHT } = Dimensions.get("window");
    // based on LG v50 scale
    const scale = SCREEN_HEIGHT / 849.7142857142857;
    return scale;
};
/**
 * @returns {Number}
 */
export const GetScale = () => {
    const { width: SCREEN_WIDTH } = Dimensions.get("window");
    // based on LG v50 scale
    const scale = SCREEN_WIDTH / 411.42857142857144;
    return scale;
};
/**
 * @param {Number} size
 * @returns {Number}
 */
export const Normalize = size => {
    const newSize = size * GetScale();
    const sizeRatio = Math.round(PixelRatio.roundToNearestPixel(newSize));
    return sizeRatio;
};
/**
 * @param {Number} size
 * @returns {Number}
 */
export const NormalizeHeight = size => {
    const scale = GetHeightScale();
    const factor = scale > 1 ? scale : Math.max(scale, 0.85);
    const newSize = size * factor;
    const sizeRatio = Math.round(PixelRatio.roundToNearestPixel(newSize));
    return sizeRatio;
};
export const NormalizeSize = (size, max = false) => {
    const normalized = max
        ? Math.max(Normalize(size), NormalizeHeight(size))
        : Math.min(Normalize(size), NormalizeHeight(size));
    return {
        width: normalized,
        height: normalized
    };
};
