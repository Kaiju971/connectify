import React from "react";
import fdconnexion from "../image/fdconnexion.jpg";
import * as S from "./Connexion.styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";

export default function Connexion() {
  return (
    <S.Container>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={6}>
            <S.Item>
              <S.Img src={fdconnexion} />
            </S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>form</S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
};
 