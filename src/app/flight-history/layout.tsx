import React from 'react';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';

type ArchiveLayoutProps = {
  archive: React.ReactNode;
  latest: React.ReactNode;
  children: React.ReactNode;
};

function ArchiveLayout({ archive, latest, children }: ArchiveLayoutProps) {
  return (
    <div className=' border'>
      {children}
      <div className='flex  items-center justify-center p-6'>
        <span className='font-semibold'>{archive}</span>
      </div>
    </div>
  );
}

export default ArchiveLayout;
