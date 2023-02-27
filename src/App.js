
import './App.css';
import Header from './components/forheader';
import User from './components/User';

const name="Rumeysa"
const surname="Kayrak"
const isLoggedIn=false
const friends=["emine", "zülal", "emine"]

function App() {
  return (
    <>
    <User name1="Mustafa" surname1="Yılmaz" isLoggedIn1={false} friends={friends}/>
      <Header />
      <p className="xyz">
        paragraph
      </p>
      <label htmlFor="name">
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
