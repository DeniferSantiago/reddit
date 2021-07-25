import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl, View } from "react-native";
import { useTheme, ProgressBar } from "react-native-paper";
import { Header } from "../../Components/Feed/Header";
import { Post } from "../../Components/Feed/Post";
import { PostLoading } from "../../Components/Feed/PostLoading";
import { CustomTheme } from "../../Helpers/Types";
import { useSavedPosts } from "../../Hooks/Services/useSavedPosts";
import { getStyles } from "./SavedStyles";

export const Saved = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);

    const { GetData, loading, posts, ClearPosts } = useSavedPosts();

    const renderItem = useCallback(({ item }) => <Post item={item} />, []);

    const loadingMore = posts.length > 0 && loading;
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        ClearPosts();
        await GetData(0, 15);
        setRefreshing(false);
    };
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
                onEndReached={() => GetData(posts.length, 15)}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        tintColor={theme.colors.secondary}
                        colors={[theme.colors.secondary]}
                        progressBackgroundColor={theme.colors.similar}
                        titleColor={theme.colors.text}
                        onRefresh={onRefresh}
                    />
                }
                ListEmptyComponent={
                    loading && <PostLoading loading={loading} />
                }
                ListFooterComponent={
                    <ProgressBar visible={loadingMore} indeterminate />
                }
            />
        </View>
    );
};
