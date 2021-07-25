import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PostActions } from "../../Actions/PostActions";
import { DeleteVote, GetVote, SaveVote } from "../../DBServices/VoteService";
import { ToRealId } from "../../Helpers/Helpers";
import { useRunAfterInteractions } from "../useRunAfterInteractions";
/**
 * @param {string} id
 * @param {number} score
 */
export const useVote = (id, score) => {
    const [loading, setLoading] = useState(false);
    const vote = useSelector(state => {
        /**@type {import("../../Helpers/Types").Vote[]} */
        const votes = state.PostReducer.votes;
        return votes.find(v => v.id === ToRealId(id));
    });
    const dispatch = useDispatch();
    /**@param {import("../../Helpers/Types").Vote} v */
    const UpVote = v => dispatch(PostActions.UpVote(v));
    /**@param {import("../../Helpers/Types").Vote} v */
    const DownVote = v => dispatch(PostActions.DownVote(v));

    const isUpVote = vote?.vote === 1;
    const isDownVote = vote?.vote === -1;
    /**@param {-1 | 1} v*/
    const VotePress = v => {
        setLoading(true);
        DeleteVote(id).finally(() => {
            const val = { id: ToRealId(id), vote: v };
            if (vote?.vote !== v) {
                SaveVote(val).finally(() => setLoading(false));
            } else {
                setLoading(false);
            }
            if (v === 1) UpVote(val);
            else DownVote(val);
        });
    };
    const GetData = async () => {
        if (vote) return;
        setLoading(true);
        try {
            const voteDB = await GetVote(id);
            if (voteDB) {
                if (voteDB.vote === 1) UpVote(voteDB);
                else DownVote(voteDB);
            }
        } catch (e) {
            console.log(e, "useVote->GetData");
        }
        setLoading(false);
    };
    useRunAfterInteractions(GetData);
    const newScore = score + (vote?.vote ?? 0);
    return { isUpVote, isDownVote, VotePress, loading, newScore };
};
