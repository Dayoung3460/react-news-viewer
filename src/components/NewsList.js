import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 2rem auto 0 auto;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const sampleArticle = {
  title: 'title',
  description: 'content',
  url: 'https://google.com',
  urlToImage: 'http://via.placeholder.com/160'
}

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const cateLower = category.toLowerCase()
        const query = cateLower === 'all' ? '' : `&category=${cateLower}`
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7722523e02db4af4be6507a07504e761`)
        setArticles(response.data.articles)
      } catch(e) {
        console.log(e)
      }
      setLoading(false)
    }

    fetchData()
  }, [category])


  if(loading) {
    return <NewsListBlock>Loading...</NewsListBlock>
  }

  return (
    <NewsListBlock>
      {articles && articles.map(article => {
        return <NewsItem key={article.url} article = {article} />
      })}
    </NewsListBlock>
  );
};

export default NewsList;
