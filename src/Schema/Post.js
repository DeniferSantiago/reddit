import { tableSchema } from "@nozbe/watermelondb/Schema";
export const PostTable = "posts";
export const PostFields = {
    postId: "post_id",
    author: "author",
    isSaved: "is_saved",
    title: "title",
    createUtc: "create_utc",
    vote: "vote",
    downs: "downs",
    ups: "ups",
    upvoteRatio: "upvote_ratio",
    isVideo: "is_video",
    numComments: "num_comments",
    preview: "preview",
    score: "score",
    link: "link",
    subreddit: "subreddit",
    subredditId: "subreddit_id",
    subredditSubscribers: "subreddit_subscribers",
    thumbnail: "thumbnail"
};

export const PostSchema = tableSchema({
    name: PostTable,
    columns: [
        { name: PostFields.postId, type: "string", isIndexed: true },
        { name: PostFields.author, type: "string", isIndexed: true },
        { name: PostFields.isSaved, type: "boolean", isIndexed: true },
        { name: PostFields.title, type: "string" },
        { name: PostFields.createUtc, type: "number" },
        { name: PostFields.vote, type: "number" },
        { name: PostFields.downs, type: "number" },
        { name: PostFields.ups, type: "number" },
        { name: PostFields.upvoteRatio, type: "number" },
        { name: PostFields.isVideo, type: "boolean" },
        { name: PostFields.numComments, type: "number" },
        { name: PostFields.preview, type: "string" },
        { name: PostFields.score, type: "number" },
        { name: PostFields.link, type: "string" },
        { name: PostFields.subreddit, type: "string", isIndexed: true },
        { name: PostFields.subredditId, type: "string" },
        { name: PostFields.subredditSubscribers, type: "number" },
        { name: PostFields.thumbnail, type: "string" }
    ]
});
