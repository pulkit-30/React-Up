import axios from 'axios';
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Quiz from './pages/Quiz/Quiz';
import Result from './pages/Result/Result';
function App() {
  const [name, setName] = useState('');
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category, difficulty) => {
    const request = await axios
      .get(
        `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`
      )
      .catch((error) => console.log(error.message));

    setQuestions(request.data.results);
  };

  function handelName(name) {
    setName(name);
    localStorage.setItem('name', name);
  }
  return (
    <BrowserRouter>
      <div className='app' style={{ backgroundImage: 'url(./ques1.png)' }}>
        <Header />
        <Switch>
          <Route path='/' exact>
            <Home
              name={name}
              handelName={handelName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path='/quiz' exact>
            <Quiz
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
          </Route>
          <Route path='/result' exact>
            <Result name={name} score={score} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
