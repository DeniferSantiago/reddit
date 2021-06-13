import React, { useCallback, useState } from "react";
import { FlatList, RefreshControl } from "react-native";
import { useTheme, ProgressBar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
import { CustomTheme, Post as PostType, Meta } from "../../Helpers/Types";
import { getStyles } from "../../Screens/StackFeed/FeedStyles";
import { Post } from "./Post";
import { PostLoading } from "./PostLoading";
import { SortHeader } from "./SortHeader";
/**
 * @typedef {Object} PostListParams
 * @property {({ sortVal: Meta, after: String}) => Promise<void>} GetData
 * @property {Boolean} loading
 * @property {Boolean} changingSort
 * @property {Meta} sort
 * @property {() => void} OpenSortSheet
 */
/**
 * @param {PostListParams} param0
 */
export const PostList = ({
    GetData,
    loading,
    changingSort,
    sort,
    OpenSortSheet
}) => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const dispatch = useDispatch();
    const ClearPosts = () => dispatch(PostActions.SetPosts([]));
    /**@param {String} a*/
    const SetAfter = a => dispatch(PostActions.SetAfterPost(a));
    /**@type {PostType[]}*/
    const posts = useSelector(state => state.PostReducer.posts);
    /**@type {String}*/
    const after = useSelector(state => state.PostReducer.after);
    const renderItem = useCallback(({ item }) => <Post item={item} />, []);
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = async () => {
        setRefreshing(true);
        ClearPosts();
        SetAfter(null);
        await GetData(sort.value);
        setRefreshing(false);
    };
    const showProgressBar = posts.length > 0 && loading;
    return (
        <FlatList
            style={styles.flex}
            onEndReachedThreshold={0.5}
            contentContainerStyle={styles.separateBottom}
            keyExtractor={p => p.id}
            onEndReached={() => GetData(sort.value, after)}
            initialNumToRender={2}
            maxToRenderPerBatch={4}
            windowSize={13}
            bouncesZoom={false}
            ListEmptyComponent={<PostLoading loading={loading} />}
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
            ListHeaderComponent={
                <SortHeader
                    sort={sort}
                    onPress={OpenSortSheet}
                    loading={changingSort}
                />
            }
            ListFooterComponent={
                <ProgressBar visible={showProgressBar} indeterminate />
            }
            data={posts}
            renderItem={renderItem}
        />
    );
};
