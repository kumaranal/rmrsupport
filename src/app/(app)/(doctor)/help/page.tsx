import React from 'react';

import { PageBody } from '~/core/ui/Page';
import AppHeader from '../../components/AppHeader';
export const metadata = {
  title: 'Help',
};

const HelpPage = () => {
  return (
    <div>
      <AppHeader title={'Help'} />
      <PageBody>This is help page</PageBody>
    </div>
  );
};

export default HelpPage;
