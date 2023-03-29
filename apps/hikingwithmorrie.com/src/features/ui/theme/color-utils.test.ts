import { getTextColorClassName } from "./color-utils";

describe("color-utils", () => {
  it("should return the right text color class", () => {
    expect(getTextColorClassName("black")).toEqual("text-black");
    expect(getTextColorClassName("green")).toEqual("text-green-base");
    expect(getTextColorClassName("green.dark")).toEqual("text-green-dark");
    expect(getTextColorClassName("green.light")).toEqual("text-green-light");
    expect(getTextColorClassName("grey")).toEqual("text-grey-base");
    expect(getTextColorClassName("grey.dark")).toEqual("text-grey-dark");
    expect(getTextColorClassName("grey.light")).toEqual("text-grey-light");
    expect(getTextColorClassName("white")).toEqual("text-white");
  });
});
