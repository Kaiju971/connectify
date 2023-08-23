import React from "react";
import * as S from "./Music.styled";
import Typography from "@mui/material/Typography";
import Spotify from "../pages/screens/auth/Login";

export default function Music({ hidden }) {
  if (hidden) return null;

  return (
    <S.Container>
      <Typography
        variant="h5"
        sx={{ pt: 8 }}
        color="#DACA3B"
        id="walls-text"
        fontFamily='"Gravitas One", cursive'
        textAlign="center"
      >
        <div className="title">Music</div>
      </Typography>
      <Spotify />
    </S.Container>
  );
}
