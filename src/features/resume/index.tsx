import { CompanyPosition } from "./company-position";
import { CompanyRoot } from "./company-root";

export const Company = Object.assign(CompanyRoot, {
  Position: CompanyPosition,
});
