import { Model } from "@nozbe/watermelondb";
import { field } from "@nozbe/watermelondb/decorators";
import { VoteFields, VoteTable } from "../Schema/Vote";
export class VoteModel extends Model {
    static table = VoteTable;
    @field(VoteFields.voteId) voteId;
    @field(VoteFields.vote) vote;
}
