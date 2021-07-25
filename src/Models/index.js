import Database from "@nozbe/watermelondb/Database";
import { Platform } from "react-native";
import { PostModel } from "./Post";
import { VoteModel } from "./Vote";
import { schema } from "../Schema/index";
import SQLiteAdapter from "@nozbe/watermelondb/adapters/sqlite";

const adapter = new SQLiteAdapter({
    schema,
    dbName: "reddit_challenge",
    jsi: Platform.OS === "ios",
    onSetUpError: error => {
        console.log(error, "Models/index->onSetUpError");
    }
});
export const database = new Database({
    modelClasses: [PostModel, VoteModel],
    adapter
});
