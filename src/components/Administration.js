import React, { useEffect, useState } from "react";
import "../styles/Admin.css";
import { database } from "../firebase";
import { onValue, ref } from "firebase/database";
import icon1 from "../images/maison-intelligente.png"
import porte from "../images/portail.png"
import chambre from "../images/chambre.png"

const Administration = () => {
  const starCountRef = ref(database, "maison");
  const [data, setData] = useState({});
 

  useEffect(() => {
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      setData(data);
    });
  }, []);

  const etatPort = data.porte === "1" ? "Porte ouverte" : "Porte fermé"
  const etatChambre1 = data.chambre1 === "1" ? "lumiere allumée" : "lumiere éteinte"
  const etatChambre2 = data.chambre2 === "1" ? "lumiere allumée" : "lumiere éteinte"
  

  return (
    <div>
      <h1>ADMINISTRATION</h1>
      <img src={icon1} alt="/" />
      <div className="container">
        <div className={`bloc ${data.porte === "1" ? "active" : "noactive"}`}>
          <h3>PORTE DU GARAGE</h3>
          <img src={porte} alt="" />
          <h4>{etatPort}</h4>
        </div>
        <div
          className={`bloc ${data.chambre1 === "1" ? "active" : "noactive"}`}
        >
          <h3>CHAMBRE 1</h3>
          <img src={chambre} alt="" />
          <h4>{etatChambre1}</h4>
        </div>
        <div
          className={`bloc ${data.chambre2 === "1" ? "active" : "noactive"}`}
        >
          <h3>CHAMBRE 2</h3>
          <img src={chambre} alt="" />
          <h4>{etatChambre2}</h4>
        </div>
      </div>
    </div>
  );
};

export default Administration;
