import React from "react";
import * as S from "./noPage.styled";
import error404 from "../image/error404-2.jpg";

export default function noPage() {
  return (
    <S.Container>
      <div></div>
      <S.Img src={error404} alt="Img1" />
    </S.Container>
  );
}
