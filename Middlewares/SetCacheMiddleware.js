import { loadCache } from "../Actions/ActionsType";
import AsyncStorage from "@react-native-community/async-storage";
import { asKeys } from "../Helpers/Keys";
export const SetCacheMiddleware = store => next => async action => {
    if (action.type === loadCache) {
        const FromStorage = k => AsyncStorage.getItem(k);
        const tasks = await Promise.all([
            FromStorage(asKeys.posts),
            FromStorage(asKeys.savedPosts),
            FromStorage(asKeys.votedPosts)
        ]);
        const [postsString, savedString, votedString] = tasks;
        const posts = JSON.parse(postsString);
        const savedPosts = JSON.parse(savedString);
        const votedPosts = JSON.parse(votedString);
        return next({ ...action, posts, savedPosts, votedPosts });
    }
    return next(action);
};
