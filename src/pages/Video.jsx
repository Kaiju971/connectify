import React from "react";
import * as S from "./Video.styled";
import Typography from "@mui/material/Typography";
import mamie from "../movie/mamie.mp4";

export default function Video({ hidden }) {
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
        <div className="title">Video</div>
      </Typography>
      <video src={mamie} autoPlay loop muted />
    </S.Container>
  );
}
