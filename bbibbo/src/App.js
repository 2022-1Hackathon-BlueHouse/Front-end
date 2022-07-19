import './App.css';
import {Route, Routes, Link} from 'react-router-dom';

import Login from './management/Login.js';
import Register from './management/Register.js';
import Write from './text/Write.js';
import Category from './Category.js';
import List from './List.js';
import Introduction from './Introduction.js';
import DetailPage from './text/DetailPage';

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
        <Route path="/detailpage" element={ <DetailPage></DetailPage> } />
      </Routes>

    </div>
  );
}


export default App;
