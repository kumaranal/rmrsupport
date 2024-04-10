'use client';
import {
  Bars4Icon,
  Squares2X2Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import Button from '~/core/ui/Button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/core/ui/Dropdown';
import Heading from '~/core/ui/Heading';
import { ToggleGroup, ToggleGroupItem } from '~/core/ui/toggle-group';

interface ISelectProps {
  values: {
    key: string;
    value: string;
  }[];
  onSelectedValueChange?: (value: string) => void;
}

const MultiSelect = ({ values, onSelectedValueChange }: ISelectProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string>('table');

  const handleSelectChange = (value: string) => {
    setSelectedItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const isOptionSelected = (value: string): boolean => {
    return selectedItems.includes(value);
  };

  let buttonText = 'All Type';
  if (selectedItems.length > 0) {
    const selectedValues = values
      .filter((item) => selectedItems.includes(item.key))
      .map((item) => item.value);
    buttonText = selectedValues.join(', ');
  }

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (onSelectedValueChange) {
      onSelectedValueChange(value);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-between items-center mt-4">
        <div className="flex flex-row items-center gap-2">
          <Heading type={5}>Select Report Status :</Heading>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="font-bold sm:h-auto">
                <span>{buttonText}</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="w-56"
              onCloseAutoFocus={(e) => e.preventDefault()}
              align="start"
            >
              <DropdownMenuLabel>Report Status</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {values.map((value) => (
                <DropdownMenuCheckboxItem
                  onSelect={(e) => e.preventDefault()}
                  key={value.key}
                  checked={isOptionSelected(value.key)}
                  onCheckedChange={() => handleSelectChange(value.key)}
                >
                  {value.value}
                </DropdownMenuCheckboxItem>
              ))}
              {selectedItems.length > 0 && (
                <Button
                  aria-label="Remove item"
                  variant="ghost"
                  className=" justify-center items-center w-full"
                  onClick={() => setSelectedItems([])}
                >
                  <span>Clear filter</span>
                  <XMarkIcon className={'w-4 h-4 ml-2'} />
                </Button>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          {selectedItems.length > 0 && (
            <Button
              aria-label="Remove item"
              variant="ghost"
              className="inline-flex justify-center items-center max-w-fit"
              onClick={() => setSelectedItems([])}
            >
              <span>Reset</span>
              <XMarkIcon className={'w-4 h-4 ml-2'} />
            </Button>
          )}
        </div>
        <div className='sm:block hidden'>
          <ToggleGroup
            type="single"
            defaultValue="table"
            value={selectedValue}
            onValueChange={handleValueChange}
           
          >
            <ToggleGroupItem value="card" aria-label="Toggle card">
              <Squares2X2Icon className={'w-6 h-6'} />
            </ToggleGroupItem>
            <ToggleGroupItem value="table" aria-label="Toggle table">
              <Bars4Icon className={'w-6 h-6'} />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </>
  );
};

export default MultiSelect;
