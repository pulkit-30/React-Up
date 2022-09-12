import React from 'react';

const Image = (props) => {
  return (
    <div
      className='m-t-10'
      style={{
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <img
        style={{
          width: '100%',
          objectFit: 'cover',
          borderRadius: '10px',
        }}
        src={props.src}
        alt='blogImage'
      />
    </div>
  );
};

export default Image;
