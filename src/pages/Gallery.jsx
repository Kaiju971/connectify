import React from "react";
import * as S from "./Gallery.styled";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import imgGroupe from "../image/imgGroupe.jpg";
import albumDisco from "../image/albumDisco.jpg";
import imgChignon from "../image/imgChignon.jpg";
import fdqsnCopie from "../image/fdqsnCopie.jpg";

export default function Gallery({ hidden }) {
  if (hidden) return null;
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <S.Container>
      <Typography
        variant="h5"
        sx={{ pt: 8, fontSize: "4vw"}}
        color="#DACA3B"
        id="walls-text"
        fontFamily='"Gravitas One", cursive'
      >
        <div className="title">Gallery</div>
      </Typography>

      <Box sx={{ width: "80%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          <Grid xs={6}>
            <S.Img src={imgGroupe} />
          </Grid>
          <Grid xs={6}>
            <S.Img src={albumDisco} />
          </Grid>
          <Grid xs={6}>
            <S.Img4 src={imgChignon} />
          </Grid>
          <Grid xs={6}>
            <S.Img src={fdqsnCopie} />
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
}
