import React from 'react';
import ArchivePage from './@archive/page';

type ArchiveLayoutProps = {
  archive: React.ReactNode;
  latest: React.ReactNode;
};

function ArchiveLayout({ archive, latest }: ArchiveLayoutProps) {
  return (
    <div>
      <section>
        <h1> Archive</h1>
        {archive}
      </section>
      <section>
        <h1> Latest</h1>
        {latest}
      </section>
    </div>
  );
}

export default ArchiveLayout;
