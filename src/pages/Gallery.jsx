import React from "react";
import * as S from "./Gallery.styled";
import Typography from "@mui/material/Typography";

export default function Gallery({hidden}) {
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
        <div>Gallery</div>
      </Typography>
    </S.Container>
  );
}
