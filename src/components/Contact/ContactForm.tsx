import Button from '@devbyaj/dev-ui/components/Button';
import Input from '@devbyaj/dev-ui/components/Input';
import TextArea from '@devbyaj/dev-ui/components/TextArea';

import Card from 'components/shared/Card';

const ContactForm = () => {
  return (
    <Card className="shadow-lg flex w-full max-w-xl flex-col items-center justify-start overflow-hidden rounded-lg border-2 border-brand-primary p-6">
      <form className="flex w-full flex-col gap-3">
        <p className="mb-2 w-fit border-b border-brand-primary/90 text-lg text-brand-primary/90">
          Get in touch
        </p>
        <Input
          type="text"
          placeholder="Name"
          className="rounded-none border-0 border-b-2 border-brand-primary bg-transparent focus-within:ring-0"
          inputClassName="bg-transparent text-xl placeholder:text-lg placeholder:text-primary/50"
        />
        <Input
          type="email"
          placeholder="Email"
          className="rounded-none border-0 border-b-2 border-brand-primary bg-transparent focus-within:ring-0"
          inputClassName="bg-transparent text-xl placeholder:text-lg placeholder:text-primary/50"
        />
        <TextArea
          placeholder="Message"
          rows={2}
          inputClassName="border-0 border-b-2 border-brand-primary rounded-none bg-transparent text-xl placeholder:text-lg placeholder:text-primary/50 focus:ring-0 "
        />

        <div className="flex justify-end">
          <Button type="submit" className="px-4 py-1.5">
            Send
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default ContactForm;
