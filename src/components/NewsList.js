import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import axios from "axios";
import NewsItem from "./NewsItem";
import usePromise from "../lib/usePromise";

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

const NewsList = ({ category }) => {
  const [loading, response, error] = usePromise(() => {
    const cateLower = category.toLowerCase()
    const query = category === 'All' ? '' : `&category=${cateLower}`
    return axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=7722523e02db4af4be6507a07504e761`)
  }, [category])
  if(loading) {
    return <NewsListBlock>Loading...</NewsListBlock>
  }

  if(!response) {
    return null
  }

  if(error) {
    return <NewsListBlock>Error Occurred!</NewsListBlock>
  }

  const { articles } = response.data

  return (
    <NewsListBlock>
      {articles && articles.map(article => {
        return <NewsItem key={article.url} article = {article} />
      })}
    </NewsListBlock>
  );
};

export default NewsList;
