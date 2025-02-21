'use client';

import Alert from '~/core/ui/Alert';
import If from '~/core/ui/If';
import useUser from '~/core/hooks/use-user';
import UpdatePasswordForm from './UpdatePasswordForm';


function UpdatePasswordFormContainer() {
  const { data: user } = useUser();

  if (!user) {
    return null;
  }

  const canUpdatePassword = user.identities?.some(
    (item) => item.provider === `email`
  );

  return (
    <If
      condition={canUpdatePassword}
      fallback={<WarnCannotUpdatePasswordAlert />}
    >
      <UpdatePasswordForm user={user} />
    </If>
  );
}

export default UpdatePasswordFormContainer;

function WarnCannotUpdatePasswordAlert() {
  return (
    <Alert type={'warn'}>
      You cannot update your password because your account is not linked to any
    </Alert>
  );
}
