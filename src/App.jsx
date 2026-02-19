import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Main from './Pages/Main';
import Profile from './Pages/Profile';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/Profile' element={<Profile />} />
        </Routes>
      </main>
      

      <Footer />
    </BrowserRouter>
      
    
  );
}

export default App;
