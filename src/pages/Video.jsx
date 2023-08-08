import React from "react";
import * as S from "./Video.styled";
import Typography from "@mui/material/Typography";

export default function Video({hidden}) {
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
        <div>Video</div>
      </Typography>
    </S.Container>
  );
}
