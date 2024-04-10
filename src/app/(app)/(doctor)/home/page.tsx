import React, { useState } from 'react';
import { PageBody } from '~/core/ui/Page';
import { Tabs, TabsList, TabsTrigger } from '~/core/ui/tabs';
import IconButton from '~/core/ui/IconButton';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';
import FilterModal from './components/FilterModal';

import { Metadata } from 'next';

import ReadingList from './components/ReadingList';
import AppHeader from '../../components/AppHeader';


const Home = () => {
  return (
    <div>
      <AppHeader
        title={'Home'}
        description={'Here, you can find a list of all report statuses.'}
      />

      {/* <PageBody>

        <div className="sm:p-6">
          <div className="flex flex-row justify-between w-full  p-4 shadow-sm dark:shadow-gray-800">
            <div>
              <Tabs defaultValue="all">
                <TabsList>
                  <TabsTrigger value="all">All </TabsTrigger>
                  <TabsTrigger value="myReading">My Reading</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            <div>
              <FilterModal>
                <IconButton>
                  <AdjustmentsHorizontalIcon className="h-8 w-8" />
                </IconButton>
              </FilterModal>
            </div>
          </div>
          <ReadingList />
        </div>

      </PageBody> */}

      {/* <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of report with progress status!
            </p>
          </div>
        </div>
      </div> */}
       <ReadingList />
    </div>
  );
};

export default Home;

export const metadata: Metadata = {
  title: 'Home',
  description: 'Access a comprehensive list of reports submitted by patients.',
};
