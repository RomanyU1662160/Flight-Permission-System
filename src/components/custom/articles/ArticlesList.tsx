import React from 'react';
import { Article } from './types';
import ArticleItem from './ArticleItem';

type ArticleListProps = {
  articles: Article[];
};

function ArticlesList({ articles }: ArticleListProps) {
  return (
    <>
      <div className='grid grid-cols-3 gap-5'>
        {articles.map((article) => (
          <ArticleItem key={article.id} article={article} />
        ))}
      </div>
    </>
  );
}

export default ArticlesList;
