import { Q } from "@nozbe/watermelondb";
import { ModelToObject, SetObjectToModel, ToRealId } from "../Helpers/Helpers";
import { database } from "../Models/index";
import { PostModel } from "../Models/Post";
import { PostFields, PostTable } from "../Schema/Post";
/**
 * @returns {Promise<import("../Helpers/Types").Post[]>}
 */
export const GetPosts = (isSaved = false, start = 0, limit = 15) => {
    return new Promise(async (res, rej) => {
        try {
            /**@type {PostModel[]}*/
            const postsModel = await database
                .get(PostTable)
                .query(
                    Q.where(PostFields.isSaved, isSaved),
                    Q.experimentalSkip(start),
                    Q.experimentalTake(limit)
                )
                .fetch();
            /**@type {import("../Helpers/Types").Post[]}*/
            const posts = postsModel.map(post =>
                ModelToObject(post, PostFields, PostFields.postId)
            );
            res(posts);
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {string} id
 * @param {boolean} isSaved
 * @returns {Promise<import("../Helpers/Types").Post>}
 */
export const GetPost = (id, isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            const pId = `${isSaved}_${ToRealId(id)}`;
            /**@type {PostModel[]}*/
            const postModels = await database
                .get(PostTable)
                .query(Q.where(PostFields.postId, pId))
                .fetch();
            if (postModels.length > 0) {
                /**@type {import("../Helpers/Types").Post}*/
                const post = ModelToObject(
                    postModels[0],
                    PostFields,
                    PostFields.postId
                );
                res(post);
            }
            res(null);
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {import("../Helpers/Types").Post[]} data
 * @param {Boolean} isSaved
 * @param {string} sort
 */
export const SetPosts = (data, isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            await RemoveAllPosts(isSaved);
            await AddPosts(data, isSaved);
            res();
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {import("../Helpers/Types").Post[]} data
 * @param {Boolean} isSaved
 * @param {string} sort
 */
export const AddPosts = (data, isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            await database.write(async () => {
                const postsCollection = database.get(PostTable);
                const operations = data.map(p => {
                    return postsCollection.prepareCreate(
                        /**@param {PostModel} post*/
                        post => {
                            p.id = `${isSaved}_${p.id}`;
                            p.isSaved = isSaved;
                            SetObjectToModel(
                                p,
                                post,
                                PostFields,
                                PostFields.postId
                            );
                        }
                    );
                });
                await database.batch(...operations);
            });
            res();
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {import("../Helpers/Types").Post} data
 * @param {Boolean} isSaved
 * @return {Promise<import("../Helpers/Types").Post>}
 */
export const SavePost = (data, isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            const postModel = await database.write(() => {
                return database.get(PostTable).create(post => {
                    const obj = { ...data, isSaved };
                    obj.id = `${isSaved}_${ToRealId(obj.id)}`;
                    SetObjectToModel(obj, post, PostFields, PostFields.postId);
                });
            });
            const post = ModelToObject(
                postModel,
                PostFields,
                PostFields.postId
            );
            res(post);
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {boolean} isSaved
 * @param {import("../Helpers/Types").SortOptions} sort
 */
export const RemoveAllPosts = (isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            const postsModels = await database
                .get(PostTable)
                .query(Q.where(PostFields.isSaved, isSaved))
                .fetch();
            await database.write(async () => {
                const operations = postsModels.map(pModel =>
                    pModel.prepareDestroyPermanently()
                );
                await database.batch(...operations);
            });
            res();
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {string} id
 * @param {boolean} isSaved
 * @param {import("../Helpers/Types").SortOptions} sort
 */
export const RemovePost = (id, isSaved = false) => {
    return new Promise(async (res, rej) => {
        try {
            const pId = `${isSaved}_${ToRealId(id)}`;
            const postModels = await database
                .get(PostTable)
                .query(Q.where(PostFields.postId, pId))
                .fetch();
            if (postModels.length > 0) {
                const postModel = postModels[0];
                await database.write(() => postModel.destroyPermanently());
            }
            res();
        } catch (e) {
            rej(e);
        }
    });
};
