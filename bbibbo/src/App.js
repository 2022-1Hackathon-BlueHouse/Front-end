import './App.css';
import {Route, Routes, Link} from 'react-router-dom';

import Login from './management/Login.js';
import Register from './management/Register.js';
import Write from './text/Write.js';
import Category from './Category.js';
import List from './List.js';
import Introduction from './Introduction.js';
import DetailPage from './text/DetailPage';
import { useEffect, useState } from 'react';

function App() { 

  let [index, setIndex] = useState();
  let [title, setTitle] = useState();
  let [content, setContent] = useState();


  useEffect(() => {
    console.log(index)
  },[index])

  return (
    <div className="App">
      <Category></Category>
      <Routes>
        <Route path="/" element={ <Login></Login> } /> 
        <Route path="/register" element={ <Register></Register> } /> 
        <Route path="/login" element={ <Login></Login> } /> 
        <Route path="/write" element={ <Write></Write> } /> 
        <Route path="/introduction" element={ <Introduction></Introduction> } />
        <Route path="/list" element={ <List setIndex={setIndex} setTitle={setTitle} setContent={setContent}></List> } />
        <Route path="/detailpage" element={ <DetailPage index={index} title={title} content={content}></DetailPage> } />
      </Routes>

    </div>
  );
}


export default App;
