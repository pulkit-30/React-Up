import { Button, MenuItem, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import Categories from '../../Data/Categories';
import './Home.css';
import { useHistory } from 'react-router';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
function Home({ name, handelName, fetchQuestions }) {
  localStorage.removeItem('name');
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  const [error, setError] = useState(false);
  const [inputName, setInputName] = useState('');
  const history = useHistory();
  const handleSubmit = () => {
    if (!category || !difficulty || !inputName) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      history.push('/quiz');
      handelName(inputName);
    }
  };
  return (
    <div className='content'>
      <div className='settings'>
        <span className='span'>Quiz Setting</span>

        <div className='settings_select'>
          {error && <ErrorMessage>Please Fill all the fields!</ErrorMessage>}
          <TextField
            style={{ marginBottom: 25 }}
            label='Enter your name'
            variant='outlined'
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />
          <TextField
            select
            label='Select Category'
            variant='outlined'
            style={{ marginBottom: 30 }}
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            {Categories.map((cat) => {
              return (
                <MenuItem key={cat.category} value={cat.value}>
                  {cat.category}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            select
            label='Select Category'
            variant='outlined'
            style={{ marginBottom: 30 }}
            onChange={(e) => setDifficulty(e.target.value)}
            value={difficulty}
          >
            <MenuItem key='Easy' value='easy'>
              Easy
            </MenuItem>
            <MenuItem key='Medium' value='medium'>
              Medium
            </MenuItem>
            <MenuItem key='Hard' value='hard'>
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant='contained'
            color='primary'
            size='large'
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src='./quiz.png' alt='' srcSet='' className='banner' />
    </div>
  );
}

export default Home;
