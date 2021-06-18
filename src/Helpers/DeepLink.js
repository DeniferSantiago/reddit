import { FeedScreens, SavedScreens, TabScreens } from "./Consts";

export const linking = {
    prefixes: ["myreddit://"],
    config: {
        screens: {
            [TabScreens.Feed]: {
                path: "",
                initialRouteName: FeedScreens.Feed,
                screens: {
                    [FeedScreens.Feed]: "feed",
                    [FeedScreens.Info]: "info"
                }
            },
            [TabScreens.Saved]: {
                path: "saved",
                screens: {
                    [SavedScreens.Saved]: "home"
                }
            }
        }
    }
};
