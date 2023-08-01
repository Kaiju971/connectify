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
      <video src={fdaccueil} autoPlay loop muted />
      <div className="content">
        <Typography variant="h1" fontFamily='"Chicle", cursive' sx={{ my: 2 }}>
          Connectify
        </Typography>
      </div>

      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12}>
            <S.Item>
              <div className="gridItem">
                <Typography
                  variant="h1"
                  fontFamily="Gravitas One', cursive"
                  sx={{ my: 2 }}
                  className="cell1"
                >
                  Bienvenue
                </Typography>
                <video src={fdaccueil} className="cell2" />
              </div>
            </S.Item>
          </Grid>
          <Grid xs={6} >
            <S.Item >
              <S.Img src={fdactualite} className="cell3" />
            </S.Item>
          </Grid>
          <Grid xs={6} sx={{ backgroundColor: "#20835d" }} >
            <S.Item >
              <Typography
                variant="h2"
                sx={{
                  my: 2,
                  textAlign: "center",
                  fontFamily: "Gravitas One', cursive",
                }} 
              >
                Actualité
              </Typography>
              <Typography
                variant="body1"
                fontFamily="Gravitas One', cursive"
                sx={{ my: 2 }}
              >
                <p>Le lieu où vous pouvez vous connecter</p>
                <p> avec vos amis, partager des moments</p>
                <p>spéciaux et explorer de nouvelles</p>
                <p>rencontres.</p>
                <p>Exprimez-vous à travers des</p>
                <p> photos, des vidéos et des messages, et découvrez le</p>
                <p>monde passionnant de la communauté </p>
                <p>Connectify.</p>
                <p>Rejoignez-nous dès maintenant et</p>
                <p>commencez à créer des liens, à inspirer</p>
                <p> et à être inspiré. Connectify est là pour</p>
                <p> vous aider à rester connecté et à</p>
                <p>célébrer les moments de la vie,</p>
                <p> ensemble.</p>
              </Typography>
            </S.Item>
          </Grid>
          <Grid xs={6} sx={{ backgroundColor: " #1D5A43" }}>
            <S.Item>
              <Typography
                variant="h2"
                sx={{
                  my: 2,
                  textAlign: "center",
                  fontFamily: "Gravitas One', cursive",
                }}
              >
                Qui sommes nous?
              </Typography>
              <Typography>
                Chez Connectify, nous sommes <br /> une plateforme sociale
                <br /> dynamique et inclusive, dédiée à <br />
                connecter les individus du monde
                <br /> entier.
                <br /> Notre objectif est de créer un <br />
                espace numérique où chacun <br />
                peut se sentir libre d'exprimer sa <br />
                véritable identité, de partager ses <br />
                passions et de tisser des liens
                <br /> authentiques.
              </Typography>
            </S.Item>
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
            <S.Item>Nous contacter</S.Item>
          </Grid>
          <Grid xs={12}>
            <S.Item>Newsletter</S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
};

export default Accueil;



