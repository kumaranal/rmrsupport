import React from 'react';

import { PageBody } from '~/core/ui/Page';
import AppHeader from '../../components/AppHeader';
export const metadata = {
  title: 'Help',
};

const HelpPage = () => {
  return (
    <div>
      <AppHeader title={'About'} />
      <PageBody>
        <div className="flex items-center justify-center h-screen -mt-20 sm:-mt-48">
          <div className="w-full max-w-4xl mx-auto p-0">
            <div className="text-medium text-xl">
              ReadMyRhythm is a platform designed to allow users the ability to
              upload their wearable ECG recordings and receive an accurate and
              timely Physician interpretation. Along with your interpretation,
              you will receive a general explanation of your interpretation with
              recommended follow up information. All ECG&apos;s will be stored
              in a HIPAA compliant manner that can be shared at anytime with
              your Physician at your discretion.
            </div>
          </div>
        </div>
      </PageBody>
    </div>
  );
};

export default HelpPage;
