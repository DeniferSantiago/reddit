/**@enum {String}*/
export const TabScreens = {
    Feed: "FeedTab",
    Saved: "SavedTab"
};
export const SavedScreens = {
    Saved: "Saved",
    Info: "Info",
    WebPost: "WebPost"
};
export const FeedScreens = {
    Feed: "Feed",
    Info: "Info",
    WebPost: "WebPost"
};
export const SortOptions = {
    new: {
        text: "News",
        value: "new",
        icon: "decagram-outline"
    },
    hot: {
        text: "Hot",
        value: "hot",
        icon: "fire"
    },
    best: {
        text: "Best",
        value: "best",
        icon: "rocket-outline"
    },
    top: {
        text: "Top",
        value: "top",
        icon: "numeric-1-circle-outline"
    },
    rising: {
        text: "Rising",
        value: "rising",
        icon: "trending-up"
    }
};
/**
 * @param {import("./Types").SortOptions} type
 */
export const GetEndPoint = type => `https://api.reddit.com/r/pics/${type}.json`;
export const GetRedditPage = url => `https://www.reddit.com${url}`;
