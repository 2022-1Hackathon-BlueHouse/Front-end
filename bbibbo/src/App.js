import './App.css';
import {Route, Routes, Link} from 'react-router-dom';

import Login from './management/Login.js';
import Register from './management/Register.js';
import Write from './text/Write.js';
import Category from './Category.js';
import List from './List.js';
import Introduction from './Introduction.js';

function App() {
  return (
    <div className="App">
      <Category></Category>
      <Routes>
        <Route path="/" element={ <Login></Login> } /> 
        <Route path="/register" element={ <Register></Register> } /> 
        <Route path="/login" element={ <Login></Login> } /> 
        <Route path="/write" element={ <Write></Write> } /> 
        <Route path="/introduction" element={ <Introduction></Introduction> } />
        <Route path="/list" element={ <List></List> } />
      </Routes>

    </div>
  );
}


export default App;
