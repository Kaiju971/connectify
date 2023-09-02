import React from "react";
import * as S from "./Footer.styled";
import qrcode from "../image/qrcode.png";

const Footer = () => {
  return (
    <S.Container>
      <S.Img src={qrcode} alt="Img1"></S.Img>
      <div>© 2023 Connectify. Tous Droits Réservés.</div>
    </S.Container>
  );
};

export default Footer;
