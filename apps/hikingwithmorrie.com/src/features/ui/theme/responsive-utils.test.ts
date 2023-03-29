import { toResponsiveObject } from "./responsive-utils";

describe("responsive-utils", () => {
  it("should return a responsive object", () => {
    expect(toResponsiveObject(1)).toEqual({ base: 1 });
    expect(toResponsiveObject("1")).toEqual({ base: "1" });
    expect(toResponsiveObject({ base: 1, sm: 2 })).toEqual({
      base: 1,
      sm: 2,
    });
    expect(toResponsiveObject({ base: 1, lg: 4, md: 3, sm: 2 })).toEqual({
      base: 1,
      lg: 4,
      md: 3,
      sm: 2,
    });
  });
});
