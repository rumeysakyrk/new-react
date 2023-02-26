
import './App.css';
import Header from './components/forheader';

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
    </>
  );
}

export default App;
