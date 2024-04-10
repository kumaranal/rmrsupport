
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Button from '~/core/ui/Button';
import Image from 'next/image';
import Container from '~/core/ui/Container';
import Heading from '~/core/ui/Heading';


export default function Example() {
  return (
    <div className="relative isolate overflow-hidden">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-primary-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hexagonal-pattern"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill="url(#hexagonal-pattern)"
        />
      </svg>
      <div className="mx-auto max-w-7xl h-screen px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40 -mb-14">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
          <div>
            <HeroTitle>
              <span className="text-3xl font-extrabold  md:text-5xl text-transparent bg-gradient-to-br from-primary-400 to-primary-700 bg-clip-text font-heading">
                Welcome to Read My Rhythm
              </span>
            </HeroTitle>
            <p className="mt-6 text-lg leading-8 ">
              Your home for Physician interpretation of any wearable ECG
              recordings.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-7">
            <Button
              variant={'outlinePrimary'}
              size={'large'}
              href={'auth/sign-in'}
            >
              <span>Sign In</span>
            </Button>
            <Button variant={'default'} size={'large'} href={'auth/sign-up'}>
              <span className={'flex items-center space-x-2'}>
                <span>Sign Up</span>
                <ChevronRightIcon className={'h-6'} />
              </span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 hidden sm:block sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
          <div className="flex-none sm:max-w-5xl lg:max-w-none">
            <div className="rounded-xl  p-10 lg:rounded-2xl h-auto">
              <img
                src="/assets/images/ekg.png"
                alt="App screenshot"
                className="rounded-md "
                style={{ width: '1000px', height: '400px' }} // Ensuring responsive image sizing
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

function HeroTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="text-gray-600 dark:text-white  font-medium">{children}</h4>

  );
}
