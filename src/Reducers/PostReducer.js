import {
    addPosts,
    addSavedPosts,
    downVote,
    loadCache,
    savePost,
    setAfterPost,
    setPosts,
    setSavedPosts,
    unSavePost,
    upVote
} from "../Actions/ActionsType";
import { ToRealId } from "../Helpers/Helpers";

const initialState = {
    /**@type {import("../Helpers/Types").Post[]} */
    posts: [],
    /**@type {import("../Helpers/Types").Post[]} */
    savedPosts: [],
    /**@type {import("../Helpers/Types").Vote[]}*/
    votes: [],
    after: null
};
export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case setPosts:
            return { ...state, posts: action.posts };
        case addPosts:
            return { ...state, posts: [...state.posts, ...action.posts] };
        case setAfterPost:
            return { ...state, after: action.after };
        case savePost:
            return {
                ...state,
                savedPosts: [...state.savedPosts, action.post]
            };
        case unSavePost: {
            const savedPosts = state.savedPosts.filter(
                s => s.id !== ToRealId(action.id)
            );
            return { ...state, savedPosts };
        }
        case setSavedPosts: {
            const savedPosts = action.posts;
            return { ...state, savedPosts };
        }
        case addSavedPosts: {
            const savedPosts = [...state.savedPosts, ...action.posts];
            return { ...state, savedPosts };
        }
        case downVote:
        case upVote: {
            const val = action.vote;
            const oldVote = state.votes.find(v => v.id === val.id);
            if (oldVote) {
                const valVote = val.vote;
                var votes = state.votes.filter(v => v.id !== val.id);
                if (valVote !== oldVote.vote) votes.push(val);
                return { ...state, votes };
            } else if (!val.vote) return state;
            else return { ...state, votes: [...state.votes, val] };
        }
        case loadCache: {
            return {
                ...state,
                posts: action.posts ?? [],
                savedPosts: action.savedPosts ?? []
            };
        }
        default:
            return state;
    }
};
