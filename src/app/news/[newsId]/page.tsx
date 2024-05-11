import ArticleDetails from '@/components/custom/articles/ArticleDetails';
import { articles } from '@/db';
import { notFound } from 'next/navigation';
import React from 'react';

type NewsDetailsPageParams = {
  params: {
    newsId: string;
  };
};

function ArticleDetailsPage({ params }: NewsDetailsPageParams) {
  const article = articles.find((article) => article.id === params.newsId);
  if (!article) return notFound();
  return <ArticleDetails article={article} />;
}

export default ArticleDetailsPage;
