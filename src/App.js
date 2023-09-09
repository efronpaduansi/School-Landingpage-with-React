import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import Navigation (Navbar)
import Navigation from './components/Navigation';

//Import MainContent
import MainContent from './components/MainContent';

function App() {
  return (
    <div>
      <Navigation />
      <MainContent/>
    </div>
  );
}

export default App;
