import React from 'react';
import Categories from "../Categories";
import NewsList from "../NewsList";
import {useParams} from "react-router-dom";

const NewsPage = () => {
  let category = 'all'
  console.log(useParams())

  // const category = match.params.category || 'all'


  return (
    <>
      <Categories/>
      <NewsList category={category} />
    </>
  );
};

export default NewsPage;
