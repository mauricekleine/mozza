import { Fieldset, Form, Input, InputGroup, Label, Textarea } from "@mk/ui";

type Props = {
  onSubmitted: ({ success }: { success: boolean }) => void;
};

export function ContactForm({ onSubmitted }: Props) {
  return (
    <Form action="/contact" onSubmitted={onSubmitted}>
      <Fieldset>
        <InputGroup>
          <Label htmlFor="email">Email *</Label>

          <Input
            autoFocus
            name="email"
            placeholder="Email"
            required
            type="email"
          />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="phone">Phone number</Label>

          <Input name="phone" placeholder="Phone number" type="text" />
        </InputGroup>

        <InputGroup>
          <Label htmlFor="inquiry">Your inquiry *</Label>

          <Textarea
            maxLength={496}
            minLength={3}
            name="inquiry"
            placeholder="Inquiry"
            required
          />
        </InputGroup>

        <Form.Button>Submit</Form.Button>

        <div className="border-t border-slate-200/10 pt-6">
          <InputGroup>
            <div className="text-center">
              <Label htmlFor="">Spam protection</Label>
            </div>

            <Form.Protection />
          </InputGroup>
        </div>
      </Fieldset>
    </Form>
  );
}
