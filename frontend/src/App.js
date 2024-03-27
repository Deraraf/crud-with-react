import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import "react-toastify/dist/ReactToastify.css"; 
import { ToastContainer, } from 'react-toastify';
import './App.css';
import Home from './pages/Home';
import AddEdit from './pages/AddEdit.js';

import View from './pages/View.js';
import About from './pages/About.js';
import Header from './components/Header.js';


function App() {
  return (
    <Router >
    <div className="App">
      <Header />
    <ToastContainer position='top-center'/>
      <Routes>
         <Route path='/' element = {<Home />} exact />
         <Route path='/add' element = {<AddEdit />}  />
         <Route path='/update/:id' element = {<AddEdit />}  />
         <Route path='/view/:id' element = {<View />}  />
         <Route path='about' element = {<About />}  />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
