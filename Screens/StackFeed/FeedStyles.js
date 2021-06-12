import { Dimensions, StyleSheet } from "react-native";
import { getStyles as getGlobalStyles, Normalize } from "../GlobalStyles";
import { CustomTheme } from "../../Helpers/Types";
import { overlay } from "react-native-paper";

/**@param {CustomTheme} theme*/
export const getStyles = theme => {
    const { width, height } = Dimensions.get("window");
    return StyleSheet.create({
        ...getGlobalStyles(theme),
        feedHeaderLogo: {
            width: Normalize(35),
            height: Normalize(35)
        },
        listLoading: {
            flex: 1,
            height: (height - Normalize(100)) * 0.75,
            backgroundColor: overlay(
                theme.size.itemElevation,
                theme.colors.surface
            )
        },
        listHeader: {
            elevation: theme.size.sectionsElevation,
            zIndex: 10,
            marginBottom: Normalize(10),
            flexDirection: "row",
            justifyContent: "space-between"
        },
        sortButton: {
            paddingHorizontal: Normalize(20),
            paddingVertical: Normalize(15)
        },
        postContainer: {
            elevation: theme.size.itemElevation,
            marginBottom: Normalize(10)
        },
        postHeaderProfile: {
            height: Normalize(50),
            width: Normalize(50),
            borderRadius: Normalize(50) / 2
        },
        postContentImage: {
            width,
            height: 400
        },
        bottomSheetContainer: {
            elevation: theme.size.objectElevation,
            ...StyleSheet.absoluteFillObject
        },
        webPostLoadingContainer: {
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: theme.colors.background,
            justifyContent: "center",
            alignItems: "center"
        },
        infoGradient: {
            width: Normalize(180),
            height: Normalize(180),
            borderRadius: Normalize(180) / 2,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            marginVertical: Normalize(10)
        },
        infoProfile: {
            width: Normalize(theme.dark ? 178 : 177),
            height: Normalize(theme.dark ? 178 : 177),
            borderRadius: Normalize(theme.dark ? 178 : 177) / 2
        },
        cardGradient: {
            flex: 1,
            marginVertical: Normalize(10),
            marginHorizontal: Normalize(15),
            padding: theme.dark ? 0.5 : 0.8,
            height: Normalize(100),
            borderRadius: theme.size.sectionsRadius
        },
        card: {
            flex: 1,
            backgroundColor: theme.colors.surface,
            borderRadius: theme.size.sectionsRadius,
            justifyContent: "center",
            alignItems: "center"
        },
        seeMoreGradient: {
            marginVertical: Normalize(10),
            height: Normalize(60),
            borderRadius: Normalize(10),
            alignSelf: "center",
            padding: theme.dark ? 0.5 : 0.8
        },
        seeMoreButton: {
            borderRadius: Normalize(10)
        },
        seeMoreButtonContent: {
            paddingVertical: Normalize(15),
            paddingHorizontal: Normalize(20),
            backgroundColor: theme.colors.surface,
            flex: 1,
            flexDirection: "row"
        }
    });
};
