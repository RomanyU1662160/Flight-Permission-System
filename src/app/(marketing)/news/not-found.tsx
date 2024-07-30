'use client';
import React from 'react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { RocketIcon } from '@radix-ui/react-icons';
import { useRouter } from 'next/navigation';

function NewsNotFound() {
  const router = useRouter();
  return (
    <Alert>
      <RocketIcon className='h-4 w-4' />
      <AlertTitle> Article is not found</AlertTitle>
      <AlertDescription>
        The article you are looking for is not found. Please try again later.
      </AlertDescription>
      <Button variant='outline' onClick={() => router.back()}>
        Go back
      </Button>
    </Alert>
  );
}

export default NewsNotFound;
