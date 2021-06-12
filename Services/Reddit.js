import { GetEndPoint } from "../Helpers/Consts";
import { ApiResponseToPostList } from "../Helpers/Converter";
/**
 * @param {import("../Helpers/Types").SortOptions} sort
 * @param {Number} limit
 * @param {?String} after
 * @returns {Promise<import("../Helpers/Types").PostResponse>}
 */
export const GetHots = (sort, after, limit = 15, count = 0) => {
    return new Promise(async (res, rej) => {
        try {
            const params = [`limit=${limit}`];
            if (after) params.push(`after=${after}`);
            if (count) params.push(`count=${count}`);
            const queryParams = `?${params.join("&")}`;
            const url = GetEndPoint(sort) + queryParams;
            fetch(url, {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                }
            })
                .then(r => r.json())
                .then(rJson =>
                    res({
                        items: ApiResponseToPostList(rJson),
                        after: rJson.data?.after
                    })
                )
                .catch(err => rej(err));
        } catch (e) {
            rej(e);
        }
    });
};
