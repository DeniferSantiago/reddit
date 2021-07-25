import { useEffect } from "react";
import { InteractionManager } from "react-native";

export const useRunAfterInteractions = (fn, deps = []) => {
    useEffect(() => {
        const manager = InteractionManager.runAfterInteractions(fn);
        return () => manager.cancel();
    }, deps);
};
