import React from 'react';

type NewsDetailsPageParams = {
  params: {
    newsId: string;
  };
};

function NewsDetailsPage({ params }: NewsDetailsPageParams) {
  return (
    <div className=' shadow-black shadow-md flex'>
      <h1 className='text-center text-indigo-600 text-3xl border-b m-3 border-indigo-600 pb-5'>
        News DetailsPage of article {params.newsId}
      </h1>
    </div>
  );
}

export default NewsDetailsPage;
