'use client';
import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';
import { TextFieldInput } from '~/core/ui/TextField';
import Button from '~/core/ui/Button';
import Label from '~/core/ui/Label';
import Image from 'next/image';
import Alert from '~/core/ui/Alert';
import GlobalLoadingIndicator from '../loading';

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
};

const ReferralForm = ({ onConfirm }: any) => {
  const [referralCode, setReferralCode] = useState('');
  const [error, setError] = useState(false);
  const [validCode, setValidCode] = useState(false);
  const [orgData, setOrgData] = useState({
    orgName: '',
    orgImage: '',
    orgCity: '',
    orgState: '',
  });

  const callApi = useCallback((code: string) => {
    console.log('API called with referral code:', code);
    setOrgData({
      orgName: 'University Hospitals Bristol and Weston',
      orgImage: '/assets/images/NHS.png',
      orgCity: 'Bristol',
      orgState: 'UK',
    });
    setValidCode(true);
    setError(false);
  }, []);

  const debouncedApiCall = useCallback(debounce(callApi, 1000), [callApi]);

  useEffect(() => {
    if (referralCode) {
      debouncedApiCall(referralCode);
    }
  }, [referralCode, debouncedApiCall]);

  return (
    <div>
      <div className={'flex flex-col'}>
        <div className={'flex flex-col space-y-4 w-full'}>
          {!orgData?.orgImage &&
            !orgData?.orgName &&
            !orgData?.orgCity &&
            !orgData?.orgState && (
              <Label>
                Please enter code provided by your organization to begin.
              </Label>
            )}
          {error && (
            <Alert type={'error'}>
              <Alert.Heading>
                Unable to locate matching Hospital Network, please double check
                the code has been entered correctly.
              </Alert.Heading>
            </Alert>
          )}

          <div className="flex flex-row space-x-2 ">
            {orgData?.orgImage && (
              <Image
                className={`doctor-img`}
                width={80}
                src={orgData?.orgImage}
                height={80}
                alt="logo image"
              />
            )}

            <div className="flex flex-col">
              {orgData?.orgName && (
                <div className="w-full font-semibold text-gray-500 dark:text-gray-400 [&>*]:mt-[0.35rem]">
                  {orgData?.orgName}
                </div>
              )}
              {orgData?.orgCity && orgData?.orgState && (
                <div className="">
                  <span className="w-full text-sm font-medium text-gray-500 dark:text-gray-400 [&>*]:mt-[0.35rem]">
                    {orgData?.orgCity},
                  </span>
                  <span className="w-full text-sm font-medium text-gray-500 dark:text-gray-400 [&>*]:mt-[0.35rem]">
                    {orgData?.orgState}
                  </span>
                </div>
              )}
            </div>
          </div>
          <TextFieldInput
            autoComplete="off"
            value={referralCode}
            placeholder="Enter Referral Code"
            onChange={(e) =>
              setReferralCode((e.target as HTMLInputElement).value)
            }
          />
          <div className={'flex justify-end'}>
            <Button
              block
              onClick={() => onConfirm(referralCode)}
              disabled={!validCode}
            >
              Confirm
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralForm;
