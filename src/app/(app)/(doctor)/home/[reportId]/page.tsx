import React from 'react';
import { PageBody } from '~/core/ui/Page';
import Image from 'next/image';

import FullScreenImage from './components/FullScreenImage';
import AppHeader from '~/app/(app)/components/AppHeader';


const page = ({ params }: any) => {
  console.log('params', params.reportId);
  return (
    <div>
      <AppHeader title={'Result'} />
      <div></div>

      <PageBody>
        <div className="sm:p-2 md:p-4 lg:p-10">
          <div className="w-full relative h-72 rounded-lg overflow-hidden">
            <Image
              src={'/assets/images/report.png'}
              alt="Report image"
              layout="fill"
              objectFit="fill"
            />
          </div>

          <FullScreenImage />
        </div>
      </PageBody>
    </div>
  );
};

export default page;
