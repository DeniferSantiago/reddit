import AsyncStorage from "@react-native-community/async-storage";
import {
    addPosts,
    loadCache,
    savePost,
    setAfterPost,
    setPosts,
    unSavePost,
    unVotePost,
    votePost
} from "../Actions/ActionsType";
import { asKeys } from "../Helpers/Keys";

const initialState = {
    /**@type {import("../Helpers/Types").Post[]} */
    posts: [],
    /**@type {import("../Helpers/Types").Post[]} */
    savedPosts: [],
    /**@type {({ id: String, vote: Number})[]} */
    votedPosts: [],
    after: null
};
const UpdateStorage = (data = [], key, limit = 15) => {
    const d = data.filter((_, i) => i < limit);
    AsyncStorage.setItem(key, JSON.stringify(d));
};
const UpdateScore = (data, index, vote, key) => {
    if (index !== -1) {
        data[index] = {
            ...data[index],
            score: data[index].score + vote.vote
        };
        UpdateStorage(data, key);
    }
};
export const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case addPosts: {
            const posts = [...state.posts, ...action.posts];
            UpdateStorage(posts, asKeys.posts);
            return { ...state, posts };
        }
        case setAfterPost:
            return { ...state, after: action.after };
        case savePost: {
            const savedPosts = [...state.savedPosts, action.post];
            UpdateStorage(savedPosts, asKeys.savedPosts, 25);
            return { ...state, savedPosts };
        }
        case unSavePost: {
            const savedPosts = state.savedPosts.filter(s => s.id !== action.id);
            UpdateStorage(savedPosts, asKeys.savedPosts, 25);
            return { ...state, savedPosts };
        }
        case setPosts:
            UpdateStorage(action.posts, asKeys.posts);
            return { ...state, posts: action.posts };
        case votePost: {
            const votedPosts = [...state.votedPosts];
            const i = votedPosts.findIndex(v => v.id === action.vote.id);
            const oldVote = { ...votedPosts[i] };
            if (i === -1) votedPosts.push(action.vote);
            else votedPosts[i] = action.vote;
            UpdateStorage(votedPosts, asKeys.votedPosts, 100);
            if (i === -1 || oldVote.vote !== action.vote.vote) {
                const newVal = -((oldVote?.vote ?? 0) * 2);
                const vote =
                    i === -1 ? action.vote : { ...oldVote, vote: newVal }; //? si anteriormente se habia votado tener en cuenta el cambio en el score
                const posts = [...state.posts];
                const n = posts.findIndex(p => p.id === action.vote.id);
                UpdateScore(posts, n, vote, asKeys.posts);
                const savedPosts = [...state.savedPosts];
                const n2 = savedPosts.findIndex(p => p.id === action.vote.id);
                UpdateScore(savedPosts, n2, vote, asKeys.savedPosts);
                return { ...state, votedPosts, posts, savedPosts };
            }
            return { ...state, votedPosts };
        }
        case unVotePost: {
            const votedPosts = state.votedPosts.filter(v => v.id !== action.id);
            UpdateStorage(votedPosts, asKeys.votedPosts, 100);
            if (votedPosts.length !== state.votedPosts.length) {
                const oldVote = state.votedPosts.find(v => v.id === action.id);
                const voteToQuit = { ...oldVote, vote: -oldVote.vote };
                const posts = [...state.posts];
                const n = posts.findIndex(p => p.id === action.id);
                UpdateScore(posts, n, voteToQuit, asKeys.posts);
                const savedPosts = [...state.savedPosts];
                const n2 = savedPosts.findIndex(p => p.id === action.id);
                UpdateScore(savedPosts, n2, voteToQuit, asKeys.savedPosts);
                return { ...state, votedPosts, posts, savedPosts };
            }
            return { ...state, votedPosts };
        }
        case loadCache: {
            return {
                ...state,
                posts: action.posts ?? [],
                savedPosts: action.savedPosts ?? [],
                votedPosts: action.votedPosts ?? []
            };
        }
        default:
            return state;
    }
};
