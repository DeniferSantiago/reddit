import { Post } from "./Types";
/**
 * @param {Object} data
 * @returns {Post[]}
 */
export const ApiResponseToPostList = data => {
    const rawPosts = data?.data?.children?.map(a => a.data);
    return rawPosts?.map(p => {
        return {
            id: p.id,
            author: p.author,
            title: p.title,
            createdUtc: p.created_utc,
            downs: p.downs,
            ups: p.ups,
            upvoteRatio: p.upvote_ratio,
            isVideo: p.is_video,
            numComments: p.num_comments,
            preview: p.preview,
            link: p.permalink,
            score: p.score,
            subreddit: p.subreddit,
            subredditId: p.subreddit_id,
            subredditSubscribers: p.subreddit_subscribers,
            thumbnail: p.thumbnail
        };
    });
};
