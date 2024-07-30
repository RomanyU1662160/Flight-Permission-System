import React from 'react';

type ArchiveLayoutProps = {
  archive: React.ReactNode;
  latest: React.ReactNode;
  children: React.ReactNode;
};

function ArchiveLayout({ archive, latest, children }: ArchiveLayoutProps) {
  return (
    <div className=' border'>
      {/* children rendered from the default page */}
      {children}
      <div className='flex  items-center justify-center p-6'>
        <span className='font-semibold'>{archive}</span>
      </div>
    </div>
  );
}

export default ArchiveLayout;
