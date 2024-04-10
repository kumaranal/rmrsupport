import { useForm } from 'react-hook-form';
import TextField from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import If from '~/core/ui/If';
import { useState } from 'react';
import Modal from '~/core/ui/Modal';
import ReferralForm from './ReferralForm';
import IconButton from '~/core/ui/IconButton';
import { Checkbox } from '~/core/ui/Checkbox';
import Label from '~/core/ui/Label';

const EmailPasswordSignUpForm: React.FCC<{
  onSubmit: (params: {
    email: string;
    password: string;
    repeatPassword: string;
  }) => unknown;
  loading: boolean;
}> = ({ onSubmit, loading }) => {
  const [isChecked, setChecked] = useState(false);
  const [orgId, setOrgId] = useState('');

  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
  });

  const emailControl = register('email', { required: true });
  const errors = formState.errors;

  const passwordControl = register('password', {
    required: 'Password is required',
    minLength: {
      value: 8,
      message: 'Password must be at least 8 characters long',
    },
    pattern: {
      value:
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      message:
        'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character',
    },
  });

  const passwordValue = watch(`password`);

  const repeatPasswordControl = register('repeatPassword', {
    required: 'Repeat password is required',
    minLength: {
      value: 8,
      message: 'Repeat password must be at least 8 characters long',
    },
    validate: (value) => {
      if (value !== passwordValue) {
        return 'The passwords do not match';
      }
      return true;
    },
  });

  const handleCheckboxChange = (checked: any) => {
    setChecked(checked);
  };

  return (
    <form className={'w-full'} onSubmit={handleSubmit(onSubmit)}>
      <div className={'flex-col space-y-4'}>
        <TextField>
          <TextField.Label>
            Email
            <TextField.Input
              {...emailControl}
              data-cy={'email-input'}
              required
              type="email"
              placeholder={'your@email.com'}
            />
          </TextField.Label>

          <TextField.Error error={errors.email?.message} />
        </TextField>

        <TextField>
          <TextField.Label>
            Password
            <TextField.Input
              {...passwordControl}
              data-cy={'password-input'}
              required
              type="password"
              placeholder={''}
            />
            {/* <TextField.Hint>
              Password must contain at least one uppercase letter, one lowercase
              letter, one number, and one special character.
            </TextField.Hint> */}
            <TextField.Error
              data-cy="password-error"
              error={errors.password?.message}
            />
          </TextField.Label>
        </TextField>

        <TextField>
          <TextField.Label>
            Repeat Password
            <TextField.Input
              {...repeatPasswordControl}
              data-cy={'repeat-password-input'}
              required
              type="password"
              placeholder={''}
            />
            {/* <TextField.Hint>Type your password again</TextField.Hint> */}
            <TextField.Error
              data-cy="repeat-password-error"
              error={errors.repeatPassword?.message}
            />
          </TextField.Label>
        </TextField>
        {orgId && <ReferralCodeAddedButton setOrgId={setOrgId} orgId={orgId} />}
        {!orgId && (
          <AddReferralCodeModal setOrgId={setOrgId}>
            <Button className={'w-full'} variant={'outline'} type="button">
              I have a Referral Code
            </Button>
          </AddReferralCodeModal>
        )}
        <div className="flex flex-row  items-start ">
          <div className="flex items-center gap-2">
            <Checkbox
              checked={isChecked}
              onCheckedChange={handleCheckboxChange}
              id="termCondition"
              aria-label="Agree to Terms and Conditions"
            />
            <label
              htmlFor="termCondition"
              className="flex-grow flex items-center"
            >
              I agree to the
              <span
                className="ml-1 text-sm font-medium text-primary-600 hover:underline underline-offset-8 cursor-pointer"
                onClick={() =>
                  window.open(
                    'https://crowdhubreadmyrhythm.s3-us-west-2.amazonaws.com/ReadMyRhythm_TOS.pdf',
                    '_blank',
                  )
                }
              >
                Terms of Service
              </span>
            </label>
          </div>
        </div>
        <div>
          <Button
            data-cy={'auth-submit-button'}
            className={'w-full'}
            type="submit"
            loading={loading}
            disabled={!isChecked}
          >
            <If condition={loading} fallback={`Get Started`}>
              Signing up...
            </If>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default EmailPasswordSignUpForm;

function AddReferralCodeModal({ children, setOrgId }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Modal
      heading={`Referral Code`}
      Trigger={children}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <ReferralForm
        onConfirm={(id: string) => {
          setIsOpen(false), setOrgId(id);
        }}
      />
    </Modal>
  );
}
interface ReferralCodeAddedButtonProps {
  setOrgId: (id: string) => void; // Function to set the organization ID
  orgId: string; // Organization ID
}

const ReferralCodeAddedButton: React.FC<ReferralCodeAddedButtonProps> = ({
  setOrgId,
  orgId,
}) => {
  return (
    <div>
      <Label> Referral Code Added</Label>
      <div
        className="w-full border rounded-sm h-10 flex items-center p-1 justify-between"
        onClick={(e) => e.stopPropagation()} // Corrected method name
      >
        <div className="text-sm font-medium p-1.5">{orgId}</div>
        <Button
          onClick={() => setOrgId('')}
          size="sm"
          className="text-red-500"
          variant="flat"
        >
          Remove
        </Button>
      </div>
    </div>
  );
};
