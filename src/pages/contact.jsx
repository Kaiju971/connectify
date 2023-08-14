import React from "react";
import * as S from "./Contact.styled";
import FormContact from "../components/FormContact";
import fdcontact from "../image/fdcontact.jpg";

export default function contact() {
  return (
    <S.Container>
      <S.Img src={fdcontact} />
      <S.Form>
        <FormContact />
      </S.Form>
    </S.Container>
  );
}
