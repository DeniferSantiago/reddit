import React, { useRef, useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Header } from "../../Components/Feed/Header";
import { CustomTheme, Post as PostType } from "../../Helpers/Types";
import { getStyles } from "./FeedStyles";
import { SortBottomSheet } from "../../Components/Feed/SortBottomSheet";
import { useRunAfterInteractions } from "../../Hooks/useRunAfterInteractions";
import { PostList } from "../../Components/Feed/PostList";
import { useGetPosts } from "../../Hooks/Services/useGetPosts";

export const Feed = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);

    const { setSort, GetData, loading, sort } = useGetPosts();

    const [changingSort, setChangingSort] = useState(false);
    const sortSheet = useRef();
    /**@param {import("../../Helpers/Types").Meta} m*/
    const onChangeSort = async m => {
        setChangingSort(true);
        setSort(m);
        sortSheet.current?.collapse();
        await GetData(m.value);
        setChangingSort(false);
    };
    const OpenSortSheet = () => sortSheet.current?.expand();
    useRunAfterInteractions(() => GetData(sort.value));
    return (
        <View style={styles.container}>
            <Header />
            <PostList
                GetData={GetData}
                OpenSortSheet={OpenSortSheet}
                changingSort={changingSort}
                loading={loading}
                sort={sort}
            />
            <View pointerEvents="box-none" style={styles.bottomSheetContainer}>
                <SortBottomSheet
                    ref={sortSheet}
                    selected={sort}
                    onPress={onChangeSort}
                />
            </View>
        </View>
    );
};
