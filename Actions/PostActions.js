import {
    addPosts,
    savePost,
    setAfterPost,
    setPosts,
    unSavePost,
    unVotePost,
    votePost
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
/**
 * @param {String} id
 * @param {-1 | 1} vote
 */
export const VotePost = (id, vote) => {
    return { type: votePost, vote: { id, vote } };
};
/**
 * @param {String} id
 */
export const UnVotePost = id => {
    return { type: unVotePost, id };
};
/**@param {import("../Helpers/Types").Post} post */
export const SavePost = post => {
    return { type: savePost, post };
};
/**
 * @param {String} id
 */
export const UnSavePost = id => {
    return { type: unSavePost, id };
};
export const PostActions = {
    SetPosts,
    AddPosts,
    SetAfterPost,
    VotePost,
    UnVotePost,
    UnSavePost,
    SavePost
};
