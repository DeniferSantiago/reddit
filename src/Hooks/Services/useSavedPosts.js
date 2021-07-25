import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
import { GetPosts } from "../../DBServices/PostService";

export const useSavedPosts = () => {
    const [loading, setLoading] = useState(false);

    /**@type {import("../../Helpers/Types").Post[]}*/
    const posts = useSelector(state => state.PostReducer.savedPosts);
    const dispatch = useDispatch();
    /**@param {import("../../Helpers/Types").Post[]} p*/
    const SetPosts = p => dispatch(PostActions.SetSavedPosts(p));
    /**@param {import("../../Helpers/Types").Post[]} p*/
    const AddPosts = p => dispatch(PostActions.AddSavedPosts(p));
    const ClearPosts = () => dispatch(PostActions.ClearSavedPosts());

    const isLast = useRef(false);
    const GetData = async (start = 0, limit = 15) => {
        if (isLast.current && start > 0) return;
        setLoading(true);
        try {
            const data = await GetPosts(true, start, limit);
            console.log(data);
            if (start > 0) AddPosts(data);
            else SetPosts(data);
            if (data.length < limit) isLast.current = true;
        } catch (e) {
            console.log(e, "useSavedPosts->GetData");
        }
        setLoading(false);
    };
    return { posts, GetData, loading, ClearPosts };
};
