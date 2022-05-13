import './App.css';
import BoilingVerdict from './components/BoilingVerdict'
import Calculator from './components/Calculator';
import Profile from './Profile';


function App() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'black'
  }

  const handleProfileLink = () => {
    return (
      <a style={linkStyle} href='http://localhost:3000/profile'>Profile</a>
    )
  }

  const handleAboutLink = () => {
    return (
      <a style={linkStyle} href='http://localhost:3000/about'>About</a>
    )
  }
  
  return (
    <div className="App">
      <h1>Hello from App</h1>
      <button>{handleProfileLink()}</button>
      <button>{handleAboutLink()}</button>
    </div>
  );
}

export default App;
