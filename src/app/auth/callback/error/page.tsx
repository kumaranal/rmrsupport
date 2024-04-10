import { redirect } from 'next/navigation';

import { Alert, AlertHeading } from '~/core/ui/Alert';
import Button from '~/core/ui/Button';
import ResendLinkForm from './ResendLinkForm';
import SubHeading from '~/core/ui/SubHeading';
import Heading from '~/core/ui/Heading';

interface Params {
  searchParams: {
    error: string;
  };
}

function AuthCallbackErrorPage({ searchParams }: Params) {
  const { error } = searchParams;

  // if there is no error, redirect the user to the sign-in page
  if (!error) {
    redirect('/auth/sign-in');
  }

  return (
    <div className={'flex flex-col space-y-4 py-4'}>
      <div>
        <Alert type={'error'}>
          <AlertHeading>Authentication Error</AlertHeading>

          {error}
        </Alert>
        <Heading type={6} className={'mt-5'}>
          Please go back and try resetting your password again.
        </Heading>
      </div>

      {/* <ResendLinkForm /> */}
      <Button variant={'default'} href={'/'}>
        Go To Homepage
      </Button>
      <div className={'flex flex-col space-y-2'}>
        <Button variant={'ghost'}>
          <a href={'/auth/sign-in'}>Sign In</a>
        </Button>
      </div>
    </div>
  );
}

export default AuthCallbackErrorPage;
