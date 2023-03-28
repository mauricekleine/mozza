import { FormButton } from "./form-button";
import { FormProtection } from "./form-protection";
import { FormRoot } from "./form-root";

export const Form = Object.assign(FormRoot, {
  Button: FormButton,
  Protection: FormProtection,
});

export { Fieldset } from "./fieldset";
export { InputGroup } from "./input-group";
export { Input } from "./input";
export { Label } from "./label";
export { Textarea } from "./textarea";
