import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import UserContext from '../../context/user/UserContext';
import { Avatar, Card } from '@mui/material';

const Profile = () => {
  const user = useContext(UserContext);
  const [userData, setUser] = useState(null);
  const params = useParams();
  useEffect(() => {
    fetch('http://localhost/api/auth/' + params.id)
      .then((res) => res.json())
      .then((res) => setUser(res.data.user))
      .catch((err) => console.log(err));
  }, [params.id]);

  return (
    <div className='p-10'>
      {user.User?._id === params?.id && <Navbar />}
      {userData && (
        <Card
          className='p-20 m-t-10 m-auto'
          style={{
            width: '80%',
          }}
        >
          <Avatar
            src={userData.image || ''}
            style={{
              width: '300px',
              height: '300px',
            }}
          />
          <br />
          Name: {userData.name || <em>not specified</em>}
          <br />
          <br />
          email: {userData.email}
        </Card>
      )}
    </div>
  );
};

export default Profile;
