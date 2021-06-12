import { DefaultTheme, DarkTheme } from "react-native-paper";
import {
    DefaultTheme as NavigationDefaultTheme,
    DarkTheme as NavigationDarkTheme
} from "@react-navigation/native";
import { Normalize } from "../Screens/GlobalStyles";
/**@type {import("./Types").CustomSize} */
const size = {
    smallIcons: Normalize(14),
    icons: Normalize(18),
    chipsIcons: Normalize(18),
    touchableIcons: Normalize(23),
    bigIcons: Normalize(28),
    loaders: Normalize(48),
    bigLoaders: Normalize(70),
    sectionsRadius: Normalize(8),
    sheetsRadius: Normalize(18),
    extraRadius: Normalize(28),
    itemElevation: 2,
    objectElevation: 5,
    sectionsElevation: 10,
    sheetElevation: 20,
    bottomTabHeight: Normalize(50)
};
/**@type {import("./Types").FontSizes} */
const textSize = {
    small: Normalize(10),
    smallLine: Normalize(10) + 2,
    normal: Normalize(14),
    normalLine: Normalize(14) + 2,
    big: Normalize(16),
    bigLine: Normalize(16) + 2,
    subtitle: Normalize(20),
    subtitleLine: Normalize(20) + 2,
    title: Normalize(22),
    titleLine: Normalize(22) + 2,
    header: Normalize(26),
    headerLine: Normalize(26) + 2
};
/** @type {import("./Types").CustomTheme} */
export const theme = {
    ...NavigationDefaultTheme,
    ...DefaultTheme,
    colors: {
        ...NavigationDefaultTheme.colors,
        ...DefaultTheme.colors,
        primary: "#1079E3",
        secondary: "#00BEE6",
        success: "#00ca20",
        error: "#E84342",
        warning: "#FAB219",
        sutil: "#DADADA",
        white: "#FDFDFD",
        gray: "#444444",
        black: "#1C1C1B",
        shadow: "#252525",
        background: "#ECECEC",
        onBackground: "#151515",
        similar: "#FDFDFD",
        contrast: "#1C1C1B",
        icon: "#2B2B2B",
        transparentBack: "#fff4",
        transparent: "transparent"
    },
    size,
    textSize,
    roundness: Normalize(5),
    gradient: ["#00BE8B", "#0AEDC7", "#09B8DC", "#0C8BC9"]
};
/** @type {import("./Types").CustomTheme} */
export const darkTheme = {
    ...NavigationDarkTheme,
    ...DarkTheme,
    colors: {
        ...NavigationDarkTheme.colors,
        ...DarkTheme.colors,
        primary: "#2270BE",
        secondary: "#00ABFC",
        shadow: "#444444",
        success: "#00A818",
        error: "#E82322",
        warning: "#FFAA40",
        golden: "#FFa720",
        sutil: "#989898",
        gray: "#bbbbbb",
        contrast: "#FDFDFD",
        similar: "#1C1C1B",
        background: "#151515",
        onBackground: "#ECECEC",
        white: "#FDFDFD",
        black: "#1C1C1B",
        icon: "#e4e4e4",
        transparent: "transparent"
    },
    size,
    textSize,
    roundness: Normalize(5),
    gradient: ["#1BAE86", "#34E9CB", "#36B7D2", "#1089C0"]
};
