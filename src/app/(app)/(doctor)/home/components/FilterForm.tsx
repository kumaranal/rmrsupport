import React, { useState } from 'react';

import MultiSelect from './multi';

const FilterForm: React.FC = () => {
  const roles = [
    { key: 'admin', value: 'Open' },
    { key: 'mod', value: 'In-Progress' },
    { key: 'user', value: 'Complete' },
  ];
  return (
    <div>
      <MultiSelect values={roles} />
    </div>
  );
};

export default FilterForm;
