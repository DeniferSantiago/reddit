import { loadCache } from "../Actions/ActionsType";
import { GetPosts } from "../DBServices/PostService";
export const SetCacheMiddleware = store => next => async action => {
    if (action.type === loadCache) {
        var posts = [];
        var savedPosts = [];
        try {
            posts = await GetPosts(false, 0, 15);
        } catch (e) {
            console.log(e, "SetCacheMiddleware->GetPosts");
        }
        try {
            savedPosts = await GetPosts(true, 0, 15);
        } catch (e) {
            console.log(e, "SetCacheMiddleware->GetPosts_Saved");
        }
        return next({ ...action, posts, savedPosts });
    }
    return next(action);
};
