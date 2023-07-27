import React from "react";
import * as S from "./Accueil.styled";
import fdaccueil from "../movie/fdaccueil.mp4";

const Accueil = () =>{
  return (
    <S.Container>
      <div className="Accueil">
        <video src={fdaccueil} autoPlay loop muted />
        <div className="content">
          <h1>Connectify</h1>
        </div>
      </div>
    </S.Container>
  );
}

export default Accueil;

