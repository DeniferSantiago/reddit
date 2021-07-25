import Model from "@nozbe/watermelondb/Model";

export const DisplayCant = (num, sigfigs_opt = 3) => {
    try {
        num = num ?? 0;
        // Solo asignar sufijo a numeros positivos numbers > 1
        if (num <= 1) return parseFloat(num.toPrecision(sigfigs_opt));
        var power10 = log10(num);
        // 0 = '', 1 = 'K', 2 = 'M', 3 = 'B', 4 = 'T'
        var SUFFIXES = ["", "K", "M", "B", "T"];
        // 100: power10 = 2, suffixNum = 0, suffix = ''
        // 1000: power10 = 3, suffixNum = 1, suffix = 'K'
        var suffixNum = Math.floor(power10 / 3);
        var suffix = SUFFIXES[suffixNum];
        // Debe ser 1 para '', 1000 para 'K', 1000000 para 'M', etc.
        var suffixPower10 = Math.pow(10, suffixNum * 3);
        var base = num / suffixPower10;
        var baseRound = parseFloat(base.toPrecision(sigfigs_opt));
        return baseRound + suffix;
    } catch (e) {
        console.log(e, "En [DisplayCant]");
    }
    return 0;
};
const log10 = num => Math.round((Math.log(num) / Math.LN10) * 1e6) / 1e6;
/**
 * @param {String} url
 * @returns {String}
 */
export const FixImageUrl = url => url?.replaceAll("amp;", "");
/**
 * @param {Object} obj
 * @param {Model} model
 * @param {(Object.<string, string>)} objFields
 * @param {string} idField
 */
export const SetObjectToModel = (obj, model, objFields, idField) => {
    for (const key in obj) {
        if (Object.hasOwnProperty.call(obj, key)) {
            const val = obj[key];
            const objKey = Object.entries(objFields).find(
                x => x[1] === idField
            )[0];
            if (key === "id") model[objKey] = val;
            else model[key] = val;
        }
    }
};
/**
 * @param {Model} model
 * @param {(Object.<string, string>)} objFields
 * @param {string} idField
 */
export const ModelToObject = (model, objFields, idField) => {
    const res = {};
    for (const key in objFields) {
        if (Object.hasOwnProperty.call(objFields, key)) {
            const modelVal = model[key];
            const dbKey = objFields[key];
            if (dbKey !== idField) res[key] = modelVal;
            else res.id = modelVal;
        }
    }
    return res;
};
export const ToRealId = id => id.split("_").pop();
