import React from 'react';

const NewsDetails = ({ news }) => {
  return (
    <div className="news-details">
      <h2>{news.title}</h2>
      <p>{news.content}</p>
      <img src={news.image} alt={news.title} />
    </div>
  );
};

export default NewsDetails;
