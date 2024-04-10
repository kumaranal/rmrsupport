'use client';
import React, { useState } from 'react';
import Modal from '~/core/ui/Modal';
import FilterForm from './FilterForm';

const FilterModal = ({ children }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Modal
      heading={`Filter by`}
      Trigger={children}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <FilterForm />
    </Modal>
  );
};

export default FilterModal;
