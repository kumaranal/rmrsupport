'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from '~/core/ui/Button';
import Heading from '~/core/ui/Heading';
import Label from '~/core/ui/Label';
import { Switch } from '~/core/ui/switch';
import TextField from '~/core/ui/TextField';

const MyInfoForm = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const { register, handleSubmit, watch, formState } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  });
  const errors = formState.errors;
  const [isChecked, setChecked] = useState(false);
  const firstNameControl = register('firstName', {
    required: 'First Name is required',
  });
  return (
    <div>
      <form
        className={'w-full'}
        onSubmit={handleSubmit(() => console.log('ddd'))}
      >
        <div className={'flex-col space-y-2'}>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <TextField className="w-full">
              <TextField.Label>
                First Name
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
            <TextField className="w-full">
              <TextField.Label>
                Last Name
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
          </div>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <TextField className="w-full">
              <TextField.Label>
                Phone
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
            <TextField className="w-full">
              <TextField.Label>
                Date of Birth
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
          </div>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <TextField className="w-full">
              <TextField.Label>
                Sex
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>

            <TextField className="w-full">
              <TextField.Label>
                Emergency Phone
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
          </div>
          <div className={'flex flex-col md:flex-row gap-4'}>
            <TextField className="w-full">
              <TextField.Label>
                Zip Code
                <TextField.Input
                  {...firstNameControl}
                  type="text"
                  placeholder={'Enter first name'}
                />
              </TextField.Label>
              <TextField.Error error={errors.firstName?.message} />
            </TextField>
            <div className="w-full"></div>
          </div>

          <Heading type={5}>Past Medical History</Heading>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="pmh1">Atrial Fibrillation</Label>
            <Switch
              id="pmh1"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="pmh1">Atrial Fibrillation</Label>
            <Switch
              id="pmh1"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="pmh1">Congestive Heart Failure</Label>
            <Switch
              id="pmh1"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="pmh1">Coronary Artery Disease</Label>
            <Switch
              id="pmh1"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="pmh1">Diabetes Mellitus</Label>
            <Switch
              id="pmh1"
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <div className="flex flex-row justify-between	px-2 ">
            <Label htmlFor="" className='w-full'>High Blood Pressure</Label>
            <Switch
              id=""
              checked={isChecked}
              onCheckedChange={setChecked}
            />
          </div>
          <Heading type={5}>Referral Code</Heading>
          <div>
            <Button className={'w-full font-bold font-ex'} type="submit"  variant={'default'}>
              Update
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyInfoForm;
