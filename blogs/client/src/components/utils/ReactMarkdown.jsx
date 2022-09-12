import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const markdown = (props) => {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.children}</ReactMarkdown>
  );
};

export default markdown;
