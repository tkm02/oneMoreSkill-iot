import "./App.css";
// import { useEffect, useState } from "react";
// import { database } from "./firebase";
// import { onValue, ref, set } from "firebase/database";
import Administration from "./components/Administration";
function App() {
  // const [data, setData] = useState({});
  // const dataFirebase = database;
  // const starCountRef = ref(dataFirebase, "maison/salon");

  // useEffect(() => {
  //   onValue(starCountRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setData(data);
  //   });
  // }, []) 

 
  // <div className={`salon ${couleur}`}>
  // //     {etatLumier}
  // //     <button onClick={allumerLumiere} >Allumer</button>
  // //     <button onClick={eteindreLumiere}>Eteindre</button>
  // //  </div>
  // const allumerLumiere = () => {
  //   set(ref(dataFirebase, "maison/salon"), {
  //     led1: 1,
  //   });
  // };
  // const eteindreLumiere = () => {
  //   set(ref(dataFirebase, "maison/salon"), {
  //     led1: 0,
  //   });
  // };

  // const etatLumier = data.led1 === 1 ? <h1>la lumier est allumé</h1> : <h1>la lumier est eteinte</h1>
  // const couleur = data.led1 === 1 ? "active" : "noactive"
    

  
 
  return (
    <div className="App">
        <Administration />
    </div>
  );
}

export default App;
