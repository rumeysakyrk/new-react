
import './App.css';
import Header from './components/forheader';

const name="Rumeysa"
const surname="Kayrak"

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
      {`My name is ${name}, my surname is ${surname}`}
      </h1>
    </>
  );
}

export default App;
