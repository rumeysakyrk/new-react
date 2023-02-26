
import './App.css';
import Header from './components/forheader';

const name="Rumeysa"
const surname="Kayrak"
const isLoggedIn=false

function App() {
  return (
    <>
      <Header />
      <p className="xyz">
        paragraph
      </p>
      <label Htmlfor="name">
        Name
        <input id="name" />
      </label>
      <h1>
      {isLoggedIn ? `My name is ${name}, my surname is ${surname}` : 'Giriş yapınız.'}
      </h1>
    </>
  );
}

export default App;
