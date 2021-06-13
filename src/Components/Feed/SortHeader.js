import React from "react";
import { TouchableRipple, useTheme, Surface, Text } from "react-native-paper";
import { CustomTheme, Meta } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { ActivityIndicator, View } from "react-native";
/**@param {({ sort: Meta, onPress: () => void, loading: Boolean })} param0*/
export const SortHeader = ({ sort, onPress, loading }) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    return (
        <Surface style={styles.listHeader}>
            <TouchableRipple
                style={styles.sortButton}
                onPress={onPress}
                rippleColor={theme.colors.sutil}
                underlayColor={theme.colors.sutil}>
                <View style={styles.row}>
                    <MaterialCommunityIcons
                        name={sort.icon}
                        size={theme.size.icons}
                        color={theme.colors.icon}
                        style={styles.marginIconRight}
                    />
                    <Text style={styles.fontBig}>{sort.text}</Text>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={theme.size.icons}
                        color={theme.colors.icon}
                        style={styles.marginIconLeft}
                    />
                </View>
            </TouchableRipple>
            <ActivityIndicator
                color={theme.colors.primary}
                animating={loading}
                style={styles.separateRight}
                size={theme.size.bigIcons}
            />
        </Surface>
    );
};
