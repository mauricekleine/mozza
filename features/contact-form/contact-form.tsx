import {
  Fieldset,
  Form,
  Input,
  InputGroup,
  Label,
  Textarea,
} from "~/design-system";

type Props = {
  onSubmitted: () => void;
};

export function ContactForm({ onSubmitted }: Props) {
  return (
    <Form
      action="/api/contact"
      onSubmitted={onSubmitted}
      transformFormData={(formData) => {
        return {
          email: formData.get("email"),
          phone: formData.get("phone"),
          inquiry: formData.get("inquiry"),
        };
      }}
    >
      <Fieldset>
        <InputGroup>
          <Label htmlFor="email">Email</Label>

          <Input
            autoFocus
            name="email"
            placeholder="Email"
            required
            type="email"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="phone">Phonenumber</Label>

          <Input name="phone" placeholder="Phonenumber" type="text" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="inquiry">Your inquiry</Label>

          <Textarea
            maxLength={496}
            minLength={3}
            name="inquiry"
            placeholder="Inquiry"
            required
          />
        </InputGroup>

        <Form.Button>Submit</Form.Button>
      </Fieldset>
    </Form>
  );
}
