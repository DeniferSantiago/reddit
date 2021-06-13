import { TimeFormat } from "../src/Helpers/TimeFormatter";
import "moment/locale/es-do";
import moment from "moment";
moment.locale("es-do");
describe("TimeFormat", () => {
    it("Yesterday", () => {
        const yestarday = moment().add(-1, "day");
        expect(TimeFormat(yestarday, "short")).toBe("1d");
        expect(TimeFormat(yestarday, "long")).toBe("1 día");
    });
    it("Before Yesterday", () => {
        const yestarday = moment().add(-2, "day");
        expect(TimeFormat(yestarday, "short")).toBe("2d");
        expect(TimeFormat(yestarday, "long")).toBe("2 días");
    });
    it("Last Week", () => {
        const lastWeek = moment().add(-1, "week");
        expect(TimeFormat(lastWeek, "short")).toBe("1 sem");
        expect(TimeFormat(lastWeek, "long")).toBe("1 sem");
    });
    it("Before Last Week", () => {
        const lastWeek = moment().add(-2, "week");
        expect(TimeFormat(lastWeek, "short")).toBe("2 sem");
        expect(TimeFormat(lastWeek, "long")).toBe("2 sem");
    });
    it("Five Week Ago", () => {
        const agoWeek = moment().add(-10, "week");
        expect(TimeFormat(agoWeek, "short")).toBe("10 sem");
        expect(TimeFormat(agoWeek, "long")).toBe("10 sem");
    });
    it("Last Year", () => {
        const lastWeek = moment("2021-01-16").add(-1, "year");
        expect(TimeFormat(lastWeek, "short")).toBe("16/1/20");
        expect(TimeFormat(lastWeek, "long")).toBe("jueves 16/1/20");
    });
    it("Before Last Year", () => {
        const lastWeek = moment("2021-01-16").add(-2, "year");
        expect(TimeFormat(lastWeek, "short")).toBe("16/1/19");
        expect(TimeFormat(lastWeek, "long")).toBe("miércoles 16/1/19");
    });
});
