import { tableSchema } from "@nozbe/watermelondb";

export const VoteTable = "votes";
export const VoteFields = {
    voteId: "vote_id",
    vote: "vote"
};
export const VoteSchema = tableSchema({
    name: VoteTable,
    columns: [
        { name: VoteFields.voteId, type: "string", isIndexed: true },
        { name: VoteFields.vote, type: "number" }
    ]
});
