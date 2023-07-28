import React from "react";
import * as S from "./Accueil.styled";
import fdaccueil from "../movie/fdaccueil.mp4";
import fdactualite from "../image/fdactualite.jpg";
import fdqsn from "../image/fdqsn.jpg";
import fdcontact from "../image/fdcontact.jpg";
import Typography from "@mui/material/Typography";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";

const Accueil = () => {
  return (
    <S.Container>
      <div className="Accueil">
        <video src={fdaccueil} autoPlay loop muted />
        <div className="content">
          <Typography
            variant="h1"
            fontWeight="2000"
            fontFamily='"Chicle", cursive'
            sx={{ my: 2 }}
          >
            Connectify
          </Typography>
        </div>
      </div>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12}>
            {/* <Grid className="">
                <Typography
                  variant="h1"
                  fontWeight="2000"
                  fontFamily='"Chicle", cursive'
                  sx={{ my: 2 }}
                >
                  Bienvenue
                </Typography>
              </Grid> */}

            <S.Item className="gridItem">
              <Typography
                variant="h1"
                fontWeight="2000"
                fontFamily='"Chicle", cursive'
                sx={{ my: 2 }}
                className="cell1"
              >
                Bienvenue
              </Typography>
              <video src={fdaccueil} className="cell2" />
            </S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>
              <S.Img src={fdactualite} />
            </S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>2</S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>3</S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>
              <S.Img src={fdqsn} />
            </S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>
              <S.Img src={fdcontact} />
            </S.Item>
          </Grid>
          <Grid xs={6}>
            <S.Item>6</S.Item>
          </Grid>
          <Grid xs={12}>
            <S.Item>7</S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
};

export default Accueil;
