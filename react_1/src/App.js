import './App.css';
import Component1 from './Component1';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './pages/Info';
import State from './pages/State';


function App() {
  return (
    <div className="App">
      <BrowserRouter>     
      <Header/>
      <Routes>
        {/*각각에  매치되는 라우트를 정의 내릴수 있다. */}
        <Route path='/' element={<Home/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/state' element={<State/>}/>

      </Routes>
      </BrowserRouter>
      <Footer/>

    </div>
    
  );
}

export default App;
