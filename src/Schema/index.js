import { appSchema } from "@nozbe/watermelondb";
import { PostSchema } from "./Post";
import { VoteSchema } from "./Vote";

export const schema = appSchema({
    version: 6,
    tables: [PostSchema, VoteSchema]
});
