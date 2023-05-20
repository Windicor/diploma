import React from 'react';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import HomePage from "./HomePage";
import Question from "./Question";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route path="/quiz" element={<Question />} />
          </Routes>
      </BrowserRouter>
  );
};

export default App;
