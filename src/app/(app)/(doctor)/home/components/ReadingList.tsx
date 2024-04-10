'use client'
import React, { useState } from 'react';
import MultiSelect from './multi';
import ReadingTable from './ReadingTable';
import ReadingSections from './ReadingSections';

const ReadingList = () => {
  const [selectedValue, setSelectedValue] = useState<string>('table');

  const roles = [
    { key: 'admin', value: 'Open' },
    { key: 'mod', value: 'In-Progress' },
    { key: 'user', value: 'Complete' },
  ];
  console.log('card', selectedValue);
  return (
    <div>
      <MultiSelect
        values={roles}
        onSelectedValueChange={(value: string) => setSelectedValue(value)}
      />
      <div className="sm:block hidden">
        {selectedValue === 'table' && <ReadingTable />}
        {selectedValue === 'card' && <ReadingSections />}
      </div>
      {/* This instance of ReadingSections will be hidden on 'sm' and larger screens */}
      <div className="sm:hidden">
        <ReadingSections />
      </div>
    </div>
  );
};

export default ReadingList;
