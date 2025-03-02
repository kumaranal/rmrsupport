import useMutation from 'swr/mutation';
import type { UserAttributes } from '@supabase/gotrue-js';

import useSupabase from '~/core/hooks/use-supabase';

type Params = { arg: UserAttributes & { redirectTo: string } };

/**
 * @name useUpdateUserMutation
 */
function useUpdateUserMutation() {
  const client = useSupabase();
  const key = ['auth', 'update-user'];

  return useMutation(key, (_, { arg: attributes }: Params) => {
    const { redirectTo, ...params } = attributes;
    console.log("check",redirectTo,params)
    return client.auth
      .updateUser(params, {
        emailRedirectTo: redirectTo,
      })
      .then((response) => {
        if (response.error) {
          throw response.error;
        }

        return client.auth.signOut();
      });
  });
}

export default useUpdateUserMutation;
