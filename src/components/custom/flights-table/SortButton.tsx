import { Button } from '@/components/ui/button';
import { Column } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import React from 'react';

type SortButtonProps = {
  column: Column<any, unknown>; // Add the missing type argument 'ColumnDef'
  title: string;
  handleClick?: () => void;
  children?: React.ReactNode;
};

function SortButton({
  column,
  title,
  handleClick,
  children,
  ...props
}: SortButtonProps) {
  return (
    <Button
      variant={`${column.getSortIndex() === -1 ? 'ghost' : 'outline'}`}
      // variant={'ghost'}
      size='sm'
      className='text-blue-500 font-extrabold  '
      onClick={() => {
        handleClick
          ? handleClick()
          : column.toggleSorting(column.getIsSorted() === 'asc', false);
      }}
      {...props}
    >
      {title}
      {children}
      <ArrowUpDown className='ml-2 h-4 w-4 text-gray-500 ' />
    </Button>
  );
}

export default SortButton;
