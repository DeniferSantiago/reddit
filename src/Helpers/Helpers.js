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
