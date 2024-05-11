import React from 'react';
import { Article } from './types';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Image from 'next/image';

type ArticleDetailsProps = {
  article: Article;
};

function ArticleDetails({ article }: ArticleDetailsProps) {
  return (
    <ResizablePanelGroup
      direction='horizontal'
      className='min-h-[200px]  rounded-lg border'
    >
      <ResizablePanel defaultSize={20} maxSize={25} minSize={15}>
        <Image
          src='https://cott.org.tt/membersworksystem/external/assets/avatars/profile-pic.jpg'
          alt='article-image'
          width={200}
          height={200}
        />
      </ResizablePanel>
      <ResizableHandle withHandle />
      <ResizablePanel defaultSize={80}>
        <h1 className='text-center '>{article.title}</h1>
        <p>{article.content}</p>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}

export default ArticleDetails;
