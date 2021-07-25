import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
import { GetPost, RemovePost, SavePost } from "../../DBServices/PostService";
import { useRunAfterInteractions } from "../useRunAfterInteractions";
/**
 * @param {import("../../Helpers/Types").Post} post
 */
export const useSavedPost = post => {
    const [saved, setSaved] = useState(post.isSaved);
    const [loading, setLoading] = useState(true);

    const dispatch = useDispatch();
    const ToggleSaved = async () => {
        setLoading(true);
        if (saved) dispatch(PostActions.UnSavePost(post.id));
        else dispatch(PostActions.SavePost({ ...post, isSaved: true }));
        try {
            if (!saved) await SavePost(post, true);
            else await RemovePost(post.id, true);
        } catch (e) {
            console.log(e, "useSavedPost->ToggleSaved");
        }
        setLoading(false);
        setSaved(!saved);
    };
    const GetSavedPost = async () => {
        try {
            const dbPost = await GetPost(post.id, true);
            if (dbPost) {
                setSaved(true);
            }
        } catch (e) {
            console.log(e, "useSavedPost->GetSavedPost");
        }
        setLoading(false);
    };
    useRunAfterInteractions(GetSavedPost);
    return { saved, ToggleSaved, loading };
};
