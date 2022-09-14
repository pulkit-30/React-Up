import React from 'react';
import style from '../../style/blog.module.css';
import ContentCard from './ContentCard';
const Content = (props) => {
  const blogs = props.blogData;

  return (
    <div className={style.mainContent}>
      {blogs?.map((blogPost, index) => (
        <ContentCard blog={blogPost} key={index} />
      ))}
    </div>
  );
};

export default Content;
