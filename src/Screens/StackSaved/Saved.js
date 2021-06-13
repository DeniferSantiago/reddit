import React, { useCallback } from "react";
import { FlatList, View } from "react-native";
import { useTheme } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { Header } from "../../Components/Feed/Header";
import { Post } from "../../Components/Feed/Post";
import { CustomTheme } from "../../Helpers/Types";
import { getStyles } from "./SavedStyles";

export const Saved = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    /**@type {import("../../Helpers/Types").Post}*/
    const posts = useSelector(state => state.PostReducer.savedPosts);
    const renderItem = useCallback(({ item }) => <Post item={item} />, []);
    return (
        <View style={styles.flex}>
            <Header title="Saved Posts" />
            <FlatList
                keyExtractor={p => p.id}
                data={posts}
                styles={styles.flex}
                contentContainerStyle={styles.separateTop}
                renderItem={renderItem}
                initialNumToRender={2}
                maxToRenderPerBatch={4}
                windowSize={13}
                bouncesZoom={false}
            />
        </View>
    );
};
