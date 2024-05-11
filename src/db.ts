import { Article } from './components/custom/articles/types';

export const articles: Article[] = [
  {
    id: '1',
    title: 'First article',
    content: 'This is the first article',
    author: 'John Doe',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Second article',
    content: 'This is the second article',
    author: 'Sara Doe',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    title: 'Third article',
    content: 'This is the third article',
    author: 'John',
    createdAt: new Date().toISOString(),
  },
];
