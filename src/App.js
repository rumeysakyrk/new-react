
import './App.css';
import {useEffect, useState} from "react";
import Counter from './components/Counter';
//import Header from './components/forheader';
//import User from './components/User';
/*
const name="Rumeysa"
const surname="Kayrak"
const isLoggedIn=false
const friends=[
  {
    id:1,
    fname:"emine"
  },
  {
    id:2,
    fname:"zülal"
  },
  {
    id:3,
    fname:"emine"
  }
]
*/

function App() {
  const [changeString, setChangeString]=useState("hello");
  const [changeNumber, setChangeNumber]= useState(23);
  const [changeArray, setChangeArray]=useState(["Betüş", "Peri"]);
  const [changeObject, setChangeObject]=useState({title:"kayseri", zip:38038});

  useEffect(()=> {
    console.log("useeffect kullanıldı")
  },[changeNumber]);
  
  return (
    <>
    <Counter />
    <h2> {changeString} </h2>
    <button onClick={() => (setChangeString("good bye")) }> Change string
    </button>
    <br></br>
    <h2> {changeNumber} </h2>
    <button onClick={()=> (setChangeNumber(32) )}> Change number</button>
    <br></br>
    <h2>
      {changeArray.map((item,index)=> <div key={index}>  {item} </div> )}
    </h2>
    <button onClick={()=>(setChangeArray([...changeArray,"selenaa"]))} > add Array</button>
    <br></br>
    <h3> {changeObject.title} {changeObject.zip} </h3>
    <button onClick={()=>(setChangeObject({...changeObject, title:"konya", zip:42042}))}> change object</button>

    <hr />
    {
    /*
    <User name1="Mustafa" isLoggedIn1={false} age={"yirmi"} friends={friends}
    location={{title:"Konya/Meram", zip:43042}}
    />
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
    */}
    </>
  );
}

export default App;
