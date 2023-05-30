import React, { useState } from 'react';
import './Newsfeed.css';
import SearchBar from '../SearchBar/SearchBar';
import NewsDetails from '../News Details/Newsdetails';

const newsData = [
  {
    id: 1,
    title: 'Breaking News 1',
    category: 'Sports',
    summary: 'This is the summary of breaking news 1.',
    content: 'This is the content of breaking news 1.',
  },
  {
    id: 2,
    title: 'Breaking News 2',
    category: 'Politics',
    summary: 'This is the summary of breaking news 2.',
    content: 'This is the content of breaking news 2.',
  },
  {
    id: 3,
    title: 'Breaking News 3',
    category: 'Technology',
    summary: 'This is the summary of breaking news 3.',
    content: 'This is the content of breaking news 3.',
  },
  {
    id: 4,
    title: 'Breaking News 4',
    category: 'Entertainment',
    summary: 'This is the summary of breaking news 4.',
    content: 'This is the content of breaking news 4.',
  },
  {
    id: 5,
    title: 'Breaking News 5',
    category: 'Sports',
    summary: 'This is the summary of breaking news 5.',
    content: 'This is the content of breaking news 5.',
  },
];

const NewsFeed = () =>  {
  const [filter, setFilter] = useState('');
  const [category, setCategory] = useState('');
  
  const [selectedNews, setSelectedNews] = useState(null);

  const handleNewsClick = (id) => {
    const selected = newsData.find((news) => news.id === id);
    setSelectedNews(selected);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const filteredNews = newsData.filter(
    (news) =>
      news.title.toLowerCase().includes(filter.toLowerCase()) &&
      (category === '' || news.category === category)
  );
  if(selectedNews){
    return <>
    <SearchBar/>
    <div>
        <NewsDetails news = {selectedNews}/>
    </div>
    </>
  }
  else {
  return (
    <>
    <SearchBar/>
    <div className="news-feed">
      <div className="filter-container">
        <label htmlFor="filter">Filter by Title:</label>
        <input
          type="text"
          id="filter"
          value={filter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="filter-container">
        <label htmlFor="category">Filter by Category:</label>
        <select id="category" value={category} onChange={handleCategoryChange}>
          <option value="">All Categories</option>
          <option value="Sports">Sports</option>
          <option value="Politics">Politics</option>
          <option value="Technology">Technology</option>
          <option value="Entertainment">Entertainment</option>
        </select>
      </div>

      <div className="news-container">
        {filteredNews.map((news) => (
          <div key={news.id} className="news-card" onClick={() => handleNewsClick(news.id)}>
            <h2 className="news-title">{news.title}</h2>
            <p className="news-category">{news.category}</p>
            <p className="news-summary">{news.summary}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  )};
};

export default NewsFeed;




