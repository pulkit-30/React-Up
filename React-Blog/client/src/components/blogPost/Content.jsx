import { Card, Chip } from '@mui/material';
import React from 'react';
import Spinner from '../loader/Spinner';
import ReactMarkdown from '../utils/ReactMarkdown';
import Image from './Image';

const Content = (props) => {
  return (
    <div
      style={{
        width: '75%',
        textAlign: 'justify',
      }}
      className='m-b-10'
    >
      {!props.blogPost && (
        <div className='flex m-t-10 p-10'>
          <Spinner />
        </div>
      )}
      {props.blogPost && (
        <Card className='p-20 m-t-10'>
          <Image src={props.blogPost.coverImage} />
          <h2 className='m-t-10 m-b-10'>{props.blogPost.title}</h2>
          <div className='flex f-start m-t-10 m-b-10'>
            {props.blogPost?.tags.map((tag, index) => (
              <Chip
                label={tag}
                variant='filled'
                style={{ margin: '0px 2px' }}
                key={index}
              />
            ))}
          </div>
          <ReactMarkdown>{props.blogPost?.markdown}</ReactMarkdown>
        </Card>
      )}
    </div>
  );
};

export default Content;
