import ArticlesList from '@/components/custom/articles/ArticlesList';
import { Article } from '@/components/custom/articles/types';
import { articles } from '@/db';
import React from 'react';

const getArticles = async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
  return articles as Article[];
};

async function NewsPage() {
  const retrievedArticles = await getArticles();
  return (
    <div className='bg-gray-100'>
      <h1 className='text-3xl  text-center text-blue-400 border-b-4  '>
        News Page
      </h1>
      <ArticlesList articles={retrievedArticles} />
    </div>
  );
}

export default NewsPage;
