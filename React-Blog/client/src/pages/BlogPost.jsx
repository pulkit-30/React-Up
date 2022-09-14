import React, { useContext, useEffect, useState } from 'react';
import Content from '../components/blogPost/Content';
import SideBar from '../components/blog/SideBar';
import { useParams } from 'react-router-dom';
import Navbar from '../components/blogPost/Navbar';
import UserContext from '../context/user/UserContext';

const BlogPost = () => {
  const user = useContext(UserContext);
  const [blogData, updateBlogData] = useState([]);
  const [blogPost, updateBogPost] = useState(null);
  const params = useParams();

  useEffect(() => {
    const subscribe = () => {
      fetch('http://localhost/api/blog?id=' + params.id, {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => updateBogPost(res.data));

      fetch('http://localhost/api/blog', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((res) => updateBlogData(res.data));
    };
    return subscribe();
    // eslint-disable-next-line
  }, [params.id]);
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
    <div className='w-80 flex f-start w-mob-100 m-auto'>
      <Content blogPost={blogPost} />
      <SideBar blogData={blogData}>
        {blogPost && blogPost.user === user.User?._id && (
          <Navbar data={blogPost} />
        )}
      </SideBar>
    </div>
  );
};

export default BlogPost;
