import React from "react";
import * as S from "./Gallery.styled";

export default function Gallery({hidden}) {
  if (hidden) return null;

  return (
    <S.Container>
      <div>Gallery</div>
    </S.Container>
  );
}
