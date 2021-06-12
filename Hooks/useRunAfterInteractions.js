import { useEffect } from "react";
import { InteractionManager } from "react-native";

export const useRunAfterInteractions = fn => {
    useEffect(() => {
        const manager = InteractionManager.runAfterInteractions(fn);
    }, []);
};
