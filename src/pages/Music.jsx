import React from "react";
import * as S from "./Music.styled";
import Typography from "@mui/material/Typography";

export default function Music({hidden}) {
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
        <div>Music</div>
      </Typography>
    </S.Container>
  );
}
