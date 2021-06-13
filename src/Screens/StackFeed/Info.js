import React from "react";
import { ScrollView, View } from "react-native";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "./FeedStyles";
import { Header } from "../../Components/Header";
import { Presentation } from "../../Components/Info/Presentation";
import { Card } from "../../Components/Info/Card";
import { SeeMore } from "../../Components/Info/SeeMore";
export const Info = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    return (
        <ScrollView style={styles.flex}>
            <Header title="Information" />
            <Presentation />
            <View style={[styles.row, styles.separateTop]}>
                <Card icon="language-javascript" text="4 years" />
                <Card icon="language-csharp" text="5 years" />
            </View>
            <View style={styles.row}>
                <Card icon="graphql" text="2 years" />
                <Card icon="language-css3" text="4 years" />
            </View>
            <View style={styles.row}>
                <Card icon="react" text="2 years" />
                <Card icon="vuejs" text="2 years" />
            </View>
            <SeeMore />
        </ScrollView>
    );
};
