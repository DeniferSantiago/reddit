import { StyleSheet } from "react-native";
import { getStyles as getGlobalStyles } from "../GlobalStyles";
import { CustomTheme } from "../../Helpers/Types";

/**@param {CustomTheme} theme*/
export const getStyles = theme => {
    return StyleSheet.create({
        ...getGlobalStyles(theme)
    });
};
