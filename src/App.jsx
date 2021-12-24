import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'

import './css/bootstrap.min.css';
import './css/style.css';
import './css/responsive.css';
import './css/custom.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );
}

export default App;
