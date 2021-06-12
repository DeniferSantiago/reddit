import React, { forwardRef, useMemo } from "react";
import { View } from "react-native";
import {
    Divider,
    Subheading,
    TouchableRipple,
    useTheme,
    Text
} from "react-native-paper";
import { CustomTheme, Meta } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import BottomSheet, { BottomSheetBackdrop } from "@gorhom/bottom-sheet";
import { Normalize } from "../../Screens/GlobalStyles";
import { SortOptions } from "../../Helpers/Consts";
import { BottomSheetBackground } from "../BottomSheetBackground";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const itemSize = Normalize(40);
const headerSize = Normalize(45);
/**@param {({ selected: Meta, onPress: (val: Meta) => void})} param0*/
const SortBottomSheetComponent = ({ selected, onPress }, ref) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const options = Object.keys(SortOptions);
    const itemSizes = options.length * itemSize;
    const size = itemSizes + headerSize;
    const snapPoints = useMemo(() => [0, size], [size]);
    const renderOption = key => {
        const meta = SortOptions[key];
        const isSelected = selected?.value === meta.value;
        const selectedStyles = isSelected
            ? { backgroundColor: theme.colors.secondary + "50" }
            : null;
        return (
            <TouchableRipple
                key={key}
                rippleColor={theme.colors.sutil}
                styles={{ height: itemSize }}
                onPress={() => onPress(meta)}
                underlayColor={theme.colors.sutil}>
                <View
                    style={[
                        styles.row,
                        styles.innerContent,
                        styles.childMiddle,
                        selectedStyles
                    ]}>
                    <MaterialCommunityIcons
                        size={theme.size.touchableIcons}
                        color={theme.colors.icon}
                        name={meta.icon}
                    />
                    <Text
                        style={[styles.fontBig, styles.separateLeft]}
                        numberOfLines={1}>
                        {meta.text}
                    </Text>
                </View>
            </TouchableRipple>
        );
    };
    return (
        <BottomSheet
            index={0}
            snapPoints={snapPoints}
            ref={ref}
            backdropComponent={props => (
                <BottomSheetBackdrop pressBehavior="close" {...props} />
            )}
            backgroundComponent={BottomSheetBackground}>
            <View style={styles.flex}>
                <Subheading style={[styles.alignCenter, styles.fontSubtitle]}>
                    Sort by:
                </Subheading>
                <Divider />
                {options.map(renderOption)}
            </View>
        </BottomSheet>
    );
};
export const SortBottomSheet = forwardRef(SortBottomSheetComponent);
