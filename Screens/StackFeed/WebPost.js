import React from "react";
import { ActivityIndicator, View } from "react-native";
import { useTheme } from "react-native-paper";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "./FeedStyles";
import { WebView } from "react-native-webview";
import { Header } from "../../Components/Header";
import { useRoute } from "@react-navigation/native";
export const WebPost = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const { params } = useRoute();
    const { url } = params;
    return (
        <View style={styles.container}>
            <Header title="Post" />
            <WebView
                source={{ uri: url }}
                javaScriptEnabled
                startInLoadingState
                domStorageEnabled
                renderLoading={() => (
                    <View style={styles.webPostLoadingContainer}>
                        <ActivityIndicator
                            color={theme.colors.primary}
                            size={theme.size.bigLoaders}
                            animating
                        />
                    </View>
                )}
            />
        </View>
    );
};
