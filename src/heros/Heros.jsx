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

  return (
    <>
      {heros &&
        heros.map((h,i) => {
          return (
            <div>
              <span>
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
