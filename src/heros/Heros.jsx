import React, { useState, useEffect } from "react";

const Heros = () => {
  const [heros, setHeros] = useState('');
  useEffect(() => {
    fetch("https://hp-api.herokuapp.com/api/characters")
      .then((resp) => resp.json())
      .then((data) => {
        setHeros(data);
      });
  }, []);

  let spanStyle = {
    "display": "flex",
    "width": "60%",
    "border": "thin double #32a1ce",
    "align-content": "center"
  }
  return (
    <>
      {heros &&
        heros.map((h,i) => {
          return (
            <div style={spanStyle}>
              <span >
                <img src={h.image} alt={i} width={100} height={100}></img>
                <span>NAME: {h.name}</span>
                <span>DOB: {h.dateOfBirth}</span>
              </span>
            </div>
          );
        })}
    </>
  );
};

export default Heros;
