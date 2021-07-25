import { Model } from "@nozbe/watermelondb";
import { field, json } from "@nozbe/watermelondb/decorators";
import { PostFields, PostTable } from "../Schema/Post";
const doNothing = arg => arg;
export class PostModel extends Model {
    static table = PostTable;
    @field(PostFields.postId) postId;
    @field(PostFields.author) author;
    @field(PostFields.isSaved) isSaved;
    @field(PostFields.title) title;
    @field(PostFields.createUtc) createUtc;
    @field(PostFields.vote) vote;
    @field(PostFields.downs) downs;
    @field(PostFields.ups) ups;
    @field(PostFields.upvoteRatio) upvoteRatio;
    @field(PostFields.isVideo) isVideo;
    @field(PostFields.numComments) numComments;
    @json(PostFields.preview, doNothing) preview;
    @field(PostFields.score) score;
    @field(PostFields.link) link;
    @field(PostFields.subreddit) subreddit;
    @field(PostFields.subredditId) subredditId;
    @field(PostFields.subredditSubscribers) subredditSubscribers;
    @field(PostFields.thumbnail) thumbnail;
}
