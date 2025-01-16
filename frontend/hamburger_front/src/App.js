import React from 'react';
import '../src/css/App.css'
import axios from 'axios';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import MainPage from './pages/MainPage';
import SelectBurgerPage from './pages/SelectBurgerPage';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="SelectBurgerPage" element={<SelectBurgerPage/>}/>
        <Route path="ResultPage" element={<ResultPage/>}/>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
