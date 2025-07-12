import Button from '@devbyaj/dev-ui/components/Button';

import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <div className="flex items-center justify-center gap-12 bg-secondary px-4 py-12">
      <div className="flex max-w-3xl flex-1 flex-col items-start justify-center">
        <div
          className="mb-8 w-full flex-1 text-4xl tracking-widest"
          style={{ wordSpacing: '0.4em' }}
        >
          <p className="mb-2">Let’s collaborate to make</p>
          <p>something exceptional.</p>
        </div>
        <p
          className="font-mono mb-6 mt-10 text-2xl tracking-widest"
          style={{ wordSpacing: '0.3em' }}
        >
          Starts by{' '}
          <span className="text-brand-primary underline">saying hi</span>
        </p>
        <Button className="py-1 text-xl text-brand-primary-text/90">
          Download CV
        </Button>
      </div>
      <div className="flex w-full max-w-2xl flex-1 flex-col items-start gap-6">
        <div>
          <div className="font-mono mb-10 text-2xl tracking-wider text-secondary/80">
            Information
          </div>
          <div className="font-mono mb-1 text-3xl text-primary/60">
            Bangalore, Karnataka, India
          </div>
          <div className="font-mono mt-4 text-3xl text-primary">
            ajaykr.dev914@gmail.com
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
