import React from "react";
import * as S from "./Wall.styled";
import Typography from "@mui/material/Typography";
import homer from "../image/homer.jpeg";

export default function Wall({ hidden }) {
  if (hidden) return null;
  return (
    <S.Container>
      <Typography
        variant="h6"
        sx={{ pt: 8 }}
        color="#DACA3B"
        id="walls-text"
        fontFamily='"Gravitas One", cursive'
      >
        <div>My Walls</div>
      </Typography>
      <S.GridCadre>
        <S.GridTitle>
          <div>Le Rap US >>> Rap FR</div>
        </S.GridTitle>

        <S.GridImg>
          <S.Img src={homer} alt="" />
          <S.TextImg>
            <Typography
              variant="h6"
              sx={{ pt: 8 }}
              color="#DACA3B"
              id="walls-text"
              fontFamily='"Gravitas One", cursive'
            >
              J’aime le classique...
            </Typography>
          </S.TextImg>
        </S.GridImg>
      </S.GridCadre>
      <S.GridSendBox>
        <div></div>
      </S.GridSendBox>
    </S.Container>
  );
}
