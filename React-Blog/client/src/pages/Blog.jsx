import React, { useEffect, useState } from 'react';
import '../style/blog_cover.css';
import Cover from '../components/blog/Cover';
import BlogCard from '../components/blog/BlogCard';
import SideBar from '../components/blog/SideBar';
import Content from '../components/blog/Content';
import Alert from '../components/alert/Alert';
import { Chip } from '@mui/material';
import Spinner from '../components/loader/Spinner';

const Blog = () => {
  const [blogData, updateBlogData] = useState([]);
  useEffect(() => {
    const subscribe = () => {
      fetch('http://localhost/api/blog', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => updateBlogData(res.data));
    };
    return subscribe;
  }, []);

  return (
    <div className='w-80 w-mob-100 m-auto'>
      {blogData.length !== 0 && (
        <Alert
          title={'Recent Post'}
          message={`${blogData[0].title}`}
          addMessage={'check it out!'}
        />
      )}
      <Cover />
      {!blogData.length && (
        <div className='flex m-t-10 p-10'>
          <Spinner /> &nbsp; Loading...
        </div>
      )}
      {blogData.length !== 0 && (
        <React.Fragment>
          <div className='flex f-col m-t-10'>
            <h2 className='m-t-10'>Recent Posts</h2>
            <div className='flex'>
              {!blogData.length && (
                <div className='flex m-t-10 p-10'>
                  <Spinner />
                </div>
              )}
              {blogData.length !== 0 &&
                [blogData[0], blogData[1]]?.map((blog, index) => {
                  if (!blog)
                    return <React.Fragment key={index}></React.Fragment>;
                  else return <BlogCard data={blog} key={index} />;
                })}
            </div>
            <Chip label='More Posts &nbsp; ↓' variant='outlined' />
          </div>
          <div className='m-t-10 w-80 flex f-start'>
            <Content blogData={blogData} />
            <SideBar blogData={blogData} />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Blog;
