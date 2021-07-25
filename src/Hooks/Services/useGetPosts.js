import { useState, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SortOptions } from "../../Helpers/Consts";
import { GetPosts } from "../../Services/Reddit";
import {
    GetPosts as GetDBPosts,
    SetPosts as SetDBPosts,
    AddPosts as AddDBPosts
} from "../../DBServices/PostService";
import { Post as PostType } from "../../Helpers/Types";
import { PostActions } from "../../Actions/PostActions";
import { useCallback } from "react";

export const useGetPosts = () => {
    const [loading, setLoading] = useState(false);
    const [sort, setSort] = useState(SortOptions.hot);

    const dispatch = useDispatch();
    /**@param {PostType[]} p*/
    const SetPosts = useCallback(
        p => dispatch(PostActions.SetPosts(p)),
        [dispatch]
    );
    /**@param {PostType[]} p*/
    const AddPosts = useCallback(
        p => dispatch(PostActions.AddPosts(p)),
        [dispatch]
    );
    /**@param {String} a*/
    const SetAfter = useCallback(
        a => dispatch(PostActions.SetAfterPost(a)),
        [dispatch]
    );
    /**@type {PostType[]}*/
    const posts = useSelector(state => state.PostReducer.posts);

    const isFromApi = useRef(false);
    /**
     * @param {PostType[]} val
     * @param {String} after
     * @param {boolean | string} next
     */
    const SetResult = useCallback(
        (val, after, next) => {
            if (next) AddPosts(val);
            else SetPosts(val);
            SetAfter(after);
        },
        [AddPosts, SetAfter, SetPosts]
    );
    /**
     * @param {import("../../Helpers/Types").SortOptions} sortVal
     * @param {string} next
     */
    const GetData = useCallback(
        async (sortVal, next) => {
            setLoading(true);
            try {
                await GetFromAPI(sortVal, next);
            } catch (e) {
                console.log(e, "useGetPosts->GetData");
                await GetFromDB();
            }
            setLoading(false);
        },
        [GetFromAPI, GetFromDB]
    );
    /**
     * @param {import("../../Helpers/Types").SortOptions} sortVal
     * @param {string} next
     */
    const GetFromAPI = useCallback(
        async (sortVal, next) => {
            const data = await GetPosts(sortVal, next, 15, posts.length);
            isFromApi.current = true;
            SetResult(data.items, data.after, next);
            try {
                if (next) await AddDBPosts(data.items, false);
                else await SetDBPosts(data.items, false);
            } catch (e) {
                console.log({ ...e });
                console.log(e, "GetFromAPI");
            }
        },
        [SetResult, posts.length]
    );
    const GetFromDB = useCallback(async () => {
        if (!isFromApi.current) {
            try {
                const data = await GetDBPosts(false, posts.length, 15);
                SetResult(data, null, posts.length > 0);
            } catch (err) {
                console.log(err, "useGetPosts->GetFromDB");
            }
        }
    }, [SetResult, posts.length]);
    const res = useMemo(
        () => ({ GetData, loading, sort, setSort, posts }),
        [GetData, loading, posts, sort]
    );
    return res;
};
