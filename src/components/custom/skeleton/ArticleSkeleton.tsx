import React from 'react';
import ArticleItem from '../articles/ArticleItem';
import { Skeleton } from '@/components/ui/skeleton';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
  Card,
} from '@/components/ui/card';

function ArticleSkeleton() {
  return (
    <Card className=' flex flex-col justify-between border  bg-slate-300 '>
      <CardHeader className='flex flex-row gap-x-2 items-center justify-between'>
        <Skeleton className=' w-12 h-12 rounded-full' />
      </CardHeader>
      <CardDescription className=' p-1'>
        <Skeleton className=' flex-grow'></Skeleton>
      </CardDescription>
      <CardContent>
        <Skeleton className='h-4 w-1/2 mb-2' />
        <Skeleton className='h-4 flex-grow mb-2' />
        <Skeleton className='h-4 flex-grow mb-2' />
      </CardContent>
      <CardFooter className=''>
        <Skeleton className='h-8 w-1/3'></Skeleton>
      </CardFooter>
    </Card>
  );
}

export default ArticleSkeleton;
