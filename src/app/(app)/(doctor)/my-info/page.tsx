import React from 'react';

import { PageBody } from '~/core/ui/Page';
import MyInfoForm from './components/MyInfoForm';
import AppHeader from '../../components/AppHeader';

export const metadata = {
  title: 'MyInfo',
};
const MyInfo = () => {
  return (
    <div>
    <div className="flex items-center">
      <AppHeader
        title={'My Info'}
        description={'Manage your information here.'}
      />
    </div>

    <PageBody>
      {/* <MyInfoForm /> */}
    </PageBody>
  </div>
  );
};

export default MyInfo;
