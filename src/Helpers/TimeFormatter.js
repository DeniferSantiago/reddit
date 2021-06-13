import moment, { Moment as MomentType } from "moment";
const second = 1e3;
const minute = 6e4;
const hour = 36e5;
const day = 864e5;
const week = 6048e5;
const year = 31536025920; //? Estimate diff year
const formats = {
    seconds: {
        short: "s",
        long: " sec"
    },
    minutes: {
        short: "m",
        long: " min"
    },
    hours: {
        short: "h",
        long: " hr"
    },
    days: {
        short: "d",
        long: " día"
    },
    weeks: {
        short: " sem",
        long: " sem"
    }
};
/** @typedef {'seconds' | 'minutes' | 'hours' | 'days' | 'weeks'} Units */
/**
 * @param {MomentType} obj
 * @param {'short' | 'long'} format
 * @returns {String}
 */
export const TimeFormat = (obj, format = "short") => {
    var diff, num, unitStr;
    diff = Math.abs(obj.diff(moment()));
    /**@type {Units} */
    var unit = null;
    num = null;
    if (diff <= second) {
        unit = "seconds";
        num = 1;
    } else if (diff < minute) {
        unit = "seconds";
    } else if (diff < hour) {
        unit = "minutes";
    } else if (diff < day) {
        unit = "hours";
    } else if (format === "short") {
        if (diff < week) {
            unit = "days";
        } else if (diff < year) {
            unit = "weeks";
        } else {
            return obj.format("D/M/YY");
        }
    } else {
        if (diff < week) {
            unit = "days";
        } else if (diff < year) {
            unit = "weeks";
        } else {
            return obj.format("dddd D/M/YY");
        }
    }
    if (!(num && unit)) {
        const unitKey = unit === "weeks" ? "asWeeks" : unit;
        num = Math.floor(moment.duration(diff)[unitKey]());
    }
    unitStr = formats[unit][format];
    if (format === "long" && num > 1 && unit !== "weeks") {
        unitStr += "s";
    }
    return num + unitStr;
};
