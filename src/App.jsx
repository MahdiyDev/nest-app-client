import { BrowserRouter } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'

function App() {
  return (
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    );
}

export default App;
