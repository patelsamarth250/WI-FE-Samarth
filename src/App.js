// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav'
import GridItems from './Components/GridItems/GridItems';
import ListItems from './Components/ListItems/ListItems';
import AddItems from './Components/AddItem/AddItem';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<ListItems/>}/>
        <Route path='/page2' element={<GridItems/>}/>
        <Route path='/page3' element={<AddItems/>}/>
        <Route path='/page4' element={<ListItems/>}/>
        <Route path='/page5' element={<ListItems/>}/>
      </Routes>
      <Nav/>
      </BrowserRouter>
    </div>
  );
}

export default App;
