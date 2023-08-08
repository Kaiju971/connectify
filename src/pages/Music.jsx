import React from "react";
import * as S from "./Music.styled";

export default function Music({hidden}) {
  if (hidden) return null;

  return (
    <S.Container>
      <div>MUSIC</div>
    </S.Container>
  );
}
