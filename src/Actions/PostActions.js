import {
    addPosts,
    addSavedPosts,
    downVote,
    savePost,
    setAfterPost,
    setPosts,
    setSavedPosts,
    unSavePost,
    upVote
} from "./ActionsType";
/**@param {import("../Helpers/Types").Post[]} posts */
export const SetPosts = posts => {
    return { type: setPosts, posts };
};
/**@param {import("../Helpers/Types").Post[]} posts */
export const AddPosts = posts => {
    return { type: addPosts, posts };
};
/**@param {String} after */
export const SetAfterPost = after => {
    return { type: setAfterPost, after };
};
/**@param {import("../Helpers/Types").Post} post */
export const SavePost = post => {
    return { type: savePost, post };
};
/**@param {import("../Helpers/Types").Post[]} posts */
export const SetSavedPosts = posts => {
    return { type: setSavedPosts, posts };
};
/**@param {import("../Helpers/Types").Post[]} posts */
export const AddSavedPosts = posts => {
    return { type: addSavedPosts, posts };
};
export const ClearSavedPosts = () => {
    return { type: setSavedPosts, posts: [] };
};
/**@param {String} id*/
export const UnSavePost = id => {
    return { type: unSavePost, id };
};
/**@param {import("../Helpers/Types").Vote} vote*/
export const UpVote = vote => {
    return { type: upVote, vote };
};
/**@param {import("../Helpers/Types").Vote} vote*/
export const DownVote = vote => {
    return { type: downVote, vote };
};
export const PostActions = {
    SetPosts,
    AddPosts,
    SetAfterPost,
    SavePost,
    UnSavePost,
    SetSavedPosts,
    AddSavedPosts,
    ClearSavedPosts,
    DownVote,
    UpVote
};
