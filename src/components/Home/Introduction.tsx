import Card from 'components/shared/Card';
import {
  HTMLIcon,
  JSIcon,
  ReactIcon,
  ReduxIcon,
} from 'components/shared/Icons';

const Introduction = () => {
  const name = `${`   `}Ajay Kumar`;
  return (
    <div className="mx-auto flex items-center gap-20 px-24 py-16">
      <div className="flex flex-col justify-start gap-4">
        <div className="bg-emerald-400 mb-6 w-fit rounded px-3 py-1.5 text-lg text-white">
          Senior frontend developer
        </div>
        <h1 className="mb-10 text-4xl">
          Hi, I&apos;m<span className="font-semibold">{name}</span>
        </h1>
        <p className="leading-12 text-gray-400 text-2xl tracking-wide">
          Passionate senior frontend engineer skilled in web technology, focused
          on crafting seamless user experiences and building innovative web
          solutions
        </p>
      </div>
      <div className="relative flex items-center justify-center">
        <img
          src="/assets/ajay.jpeg"
          alt="ajay-profile"
          className="w-[50rem] rounded-full"
        />
        <Card className="absolute left-[-2rem] top-10 h-20 w-20 rounded-full">
          <HTMLIcon className="relative h-12 w-12 fill-orange" />
        </Card>
        <Card className="absolute bottom-2 right-2 h-36 w-36 rounded-full">
          <ReactIcon className="fill-sky-500/80 relative z-10 h-24 w-24" />
        </Card>
        <Card className="absolute right-[-2rem] top-10 h-24 w-24 rounded-full">
          <ReduxIcon className="fill-violet-500 relative z-10 h-16 w-16" />
        </Card>
        <Card className="absolute bottom-10 left-[-2rem] h-16 w-16 rounded-full">
          <JSIcon className="fill-yellow-500 relative z-10 h-8 w-8" />
        </Card>
      </div>
    </div>
  );
};

export default Introduction;
