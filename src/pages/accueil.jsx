import React from "react";
import * as S from "./Accueil.styled";
import fd_accueil from "../movie/fd_accueil.mp4";

console.log(fd_accueil);

export default function Accueil() {
  return (
    <S.Container>
      <div>
        Connectify <img scr={fd_accueil} className="movie" alt="" />
      </div>
    </S.Container>
  );
}
