import { useState, useEffect } from "react";

function Unmount (){ 
   const [sayı, setSayı]=useState(10);

    useEffect(() =>{
    console.log("Mount işlemi tamam.");
   const interval = setInterval(() => {
        setSayı((n) => (n+1))
    }, 1000)
    return () => clearInterval(interval);
   },[]);

   useEffect(() => {
    console.log("sayı güncellendi");
   },[sayı]);
   
   return (
<div>
    <h3> Sayı {sayı} </h3>
    <button onClick={()=> (setSayı(sayı+1))}>Unmount</button>
</div>
   )
 
 
}
 export default Unmount;