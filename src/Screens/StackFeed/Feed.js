import React, { useRef, useState } from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";
import { Header } from "../../Components/Feed/Header";
import { CustomTheme, Post as PostType } from "../../Helpers/Types";
import { getStyles } from "./FeedStyles";
import { SortOptions } from "../../Helpers/Consts";
import { SortBottomSheet } from "../../Components/Feed/SortBottomSheet";
import { GetHots } from "../../Services/Reddit";
import { useRunAfterInteractions } from "../../Hooks/useRunAfterInteractions";
import { PostList } from "../../Components/Feed/PostList";
import { PostActions } from "../../Actions/PostActions";
import { useDispatch, useSelector } from "react-redux";
export const Feed = () => {
    /**@type {CustomTheme} */
    const theme = useTheme();
    var styles = getStyles(theme);
    const [sort, setSort] = useState(SortOptions.hot);
    const dispatch = useDispatch();
    /**@type {PostType[]}*/
    const posts = useSelector(state => state.PostReducer.posts);
    /**@param {String} a*/
    const SetAfter = a => dispatch(PostActions.SetAfterPost(a));
    /**@param {PostType[]} p*/
    const SetPosts = p => dispatch(PostActions.SetPosts(p));
    /**@param {PostType[]} p*/
    const AddPosts = p => dispatch(PostActions.AddPosts(p));

    const [loading, setLoading] = useState(false);
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
    const GetData = async (sortVal, next) => {
        setLoading(true);
        try {
            const data = await GetHots(sortVal, next, 15, posts.length);
            if (next) AddPosts(data.items);
            else SetPosts(data.items);
            SetAfter(data.after);
        } catch (e) {
            console.log(e, "Feed->GetData");
        }
        setLoading(false);
    };
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
