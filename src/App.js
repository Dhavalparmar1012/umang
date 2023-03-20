import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Textbook from './components/Textbook';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Textup from './components/Textup';
import Map from './components/Map';
import Createform from './components/Createform';
import Count from './components/Count.js';

// import { createContext } from 'react';
// create context api (create) karvama aave che j import bhi karvama aave che 
// const data = createContext();

function App() {

  //create context api ma name variable ex apvama che
  // const name = "Poonam";

  return (
    <>
    <Router>
      <Navbar title="Mahekfootwear" />
      <div className='container my-3'>
        <Routes>
          <Route path="/textbook" element={<Textbook />} />
          <Route path="/" element={<Form /> } />
          <Route path="/text" element={<Textup /> } />
          <Route path='/map' element={<Map />}></Route>
          <Route path='/mode' element={<Createform />}></Route>
          <Route path='/count' element={<Count />}></Route>
        </Routes>
      </div>
      </Router>

    
    {/* create context api data provide karvama aave che 
      <data.Provider value={name}>
        <Form />
      </data.Provider> 
    */}
      
    </>
  );
}

export default App;

// create variable name data export karvanu hoy che
// export {data};
