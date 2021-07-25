import { Q } from "@nozbe/watermelondb";
import { ModelToObject, SetObjectToModel, ToRealId } from "../Helpers/Helpers";
import { database } from "../Models/index";
import { VoteFields, VoteTable } from "../Schema/Vote";
import { VoteModel } from "../Models/Vote";

/**
 * @param {String} id
 * @returns {Promise<import("../Helpers/Types").Vote>}
 */
export const GetVote = id => {
    return new Promise(async (res, rej) => {
        try {
            /**@type {VoteModel[]}*/
            const voteModels = await database
                .get(VoteTable)
                .query(Q.where(VoteFields.voteId, ToRealId(id)))
                .fetch();
            if (voteModels.length > 0) {
                /**@type {import("../Helpers/Types").Vote}*/
                const vote = ModelToObject(
                    voteModels[0],
                    VoteFields,
                    VoteFields.voteId
                );
                res(vote);
            }
            res(null);
        } catch (e) {
            rej(e);
        }
    });
};
/**
 * @param {import("../Helpers/Types").Vote} data
 */
export const SaveVote = data => {
    return new Promise(async (res, rej) => {
        try {
            const voteModel = await database.write(() =>
                database.get(VoteTable).create(vote => {
                    data.id = ToRealId(data.id);
                    SetObjectToModel(data, vote, VoteFields, VoteFields.voteId);
                })
            );
            /**@type {import("../Helpers/Types").Vote}*/
            const vote = ModelToObject(
                voteModel,
                VoteFields,
                VoteFields.voteId
            );
            res(vote);
        } catch (e) {
            rej(e);
        }
    });
};
/**@param {String} id*/
export const DeleteVote = id => {
    return new Promise(async (res, rej) => {
        try {
            const voteModels = await database
                .get(VoteTable)
                .query(Q.where(VoteFields.voteId, ToRealId(id)))
                .fetch();
            if (voteModels.length > 0) {
                const voteModel = voteModels[0];
                await database.write(() => voteModel.destroyPermanently());
            }
            res();
        } catch (e) {
            rej(e);
        }
    });
};
