import logo from './logo.svg';
import './App.css';

function App() {
  const fullName = "Барсуков Вячеслав Владимирович";
  const phoneNumber = "+380637000444";
  const emailAddress = "barsukov200491@gmail.com";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="contact-info">
          <h1>{fullName}</h1>
          <p>Телефон: {phoneNumber}</p>
          <p>Email: {emailAddress}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
