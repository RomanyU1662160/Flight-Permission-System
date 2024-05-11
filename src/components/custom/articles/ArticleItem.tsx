'use client';
import React from 'react';
import { Article } from './types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarImage } from '@radix-ui/react-avatar';
import { articles } from '@/db';
import { notFound } from 'next/navigation';

type ArticleItemProps = {
  article: Article;
};

function ArticleItem({ article }: ArticleItemProps) {
  return (
    <>
      {
        <Card className='flex flex-col justify-between'>
          <CardHeader className='flex flex-row gap-x-2 items-center justify-between bg-black text-white'>
            <Avatar className=''>
              <AvatarImage src='https://cott.org.tt/membersworksystem/external/assets/avatars/profile-pic.jpg' />
            </Avatar>
            <CardTitle className='flex-initial'>{article.title}</CardTitle>
          </CardHeader>
          <CardDescription className='bg-black p-1 flex justify-between'>
            <span className='text-sky-600 pl-3 text-lg'>
              Author: {article.author}
            </span>
            <span>
              {
                new Date(article.createdAt as string)
                  .toISOString()
                  .split('T')[0]
              }
            </span>
          </CardDescription>
          <CardContent>{article.content}</CardContent>
          <CardFooter className=' bg-gray-100'>
            <Button variant={'default'} asChild>
              <Link href={`/news/${article.id}`}>
                Read Article
                <ChevronRightIcon className='h-6 w-6' />
              </Link>
            </Button>
          </CardFooter>
        </Card>
      }
    </>
  );
}

export default ArticleItem;
