'use client';
import React, { useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Column } from '@tanstack/react-table';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

type FilterInputProps = {
  placeholder?: string;
  column: Column<any, unknown>;
  debounceTime?: number;
  handleGlobalFilter?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function FilterInput({
  placeholder,
  column,
  debounceTime = 50000,
  handleGlobalFilter,
  ...props
}: FilterInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    column.setFilterValue(e.target.value);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {}, debounceTime);
    return () => clearTimeout(timeout);
  }, [debounceTime]);

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          {' '}
          <Input
            className='h-1/4 w-full text-left shadow-sm'
            placeholder={placeholder ?? 'Filter...'}
            value={(column.getFilterValue() as string) ?? ''}
            onChange={handleGlobalFilter ?? handleChange}
            {...props}
          />
        </TooltipTrigger>
        <TooltipContent className='text-sm text-pretty'>
          <p>Type to filter this column</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
export default FilterInput;
