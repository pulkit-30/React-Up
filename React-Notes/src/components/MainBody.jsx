import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
function MainBody(props) {
  function deleteMe() {
    props.del(props.id);
  }
  return (
    <div className='box'>
      <div className='title'>{props.title}</div>
      <div className='note'>{props.note}</div>
      <div className=' delete' onClick={deleteMe}>
        <DeleteIcon />
      </div>
    </div>
  );
}

export default MainBody;
