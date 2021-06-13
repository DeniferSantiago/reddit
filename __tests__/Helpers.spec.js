import { DisplayCant } from "../src/Helpers/Helpers";
describe("Helpers Functions", () => {
    test.each([
        [5, "5"],
        [53, "53"],
        [450, "450"],
        [4320, "4.32K"],
        [12870, "12.9K"]
    ])("DisplayCant(%i) === %s", (val, expected) => {
        const res = DisplayCant(val);
        expect(res).toBe(expected);
    });
});
