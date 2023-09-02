import React, { useEffect, useState } from "react";
import * as S from "./Accueil.styled";
import fdaccueil from "../movie/fdaccueil.mp4";
import fdactualite from "../image/fdactualite.jpg";
import fdqsn from "../image/fdqsn.jpg";
import fdcontact from "../image/fdcontact.jpg";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import FormContact from "../components/FormContact";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { UsersService } from "../Service/DatabaseService";
import { useSnackbar } from "notistack";

const Accueil = () => {
  const translations = {
    fr: "Bienvenue",
    en: "Welcome",
    es: "Bienvenido",
    it: "Benvenuto",
    por: "Bem-vindo",
    néer: "Welkom",
    chi: "欢迎",
    arab: "مرحباً",
    inde: "स्वागत",
    de: "Willkommen",
    uk: "Ласкаво просимо",
    jap: "ようこそ",
    coré: "환영합니다",
    turc: "Hoş geldiniz",
    ant: "Bienvyni",
  };
  const { enqueueSnackbar } = useSnackbar();

  const [subsc, setSubsc] = useState("");
  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.log(error);
  };

  useEffect(() => {
    function changeLanguage() {
      const welcomeText = document.getElementById("welcome-text");
      const currentLanguage = welcomeText.getAttribute("data-lang");
      const languages = Object.keys(translations);
      let nextIndex =
        (languages.indexOf(currentLanguage) + 1) % languages.length;
      const nextLanguage = languages[nextIndex];
      console.log(nextLanguage);

      welcomeText.textContent = translations[nextLanguage];
      welcomeText.setAttribute("data-lang", nextLanguage);
    }
    const intervalId = setInterval(changeLanguage, 2000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const onInputChange = (event) => {
    setSubsc(event.target?.value);
  };

  const subscribe = async () => {
    try {
      const data = await UsersService.updateSubscription(subsc);
      console.log(data);
      if (!data) {
        enqueueSnackbar("Utilisateur inconnu", {
          variant: "error",
        });
      }
    } catch (error) {
      showError(error);
    }
  };

  return (
    <S.Container>
      <video src={fdaccueil} autoPlay loop muted />
      <div className="content">
        <Typography
          variant="h1"
          fontFamily='"Chicle", cursive'
          sx={{ my: 2, opacity: 0.8 }}
        >
          Connectify
        </Typography>
      </div>

      <S.Cell12 sx={{ backgroundColor: "#daca3bff" }}>
        <video src={fdaccueil} muted className="video22" />
        <div className="text22">
          <Typography
            variant="h2"
            color="#1D5A43"
            id="welcome-text"
            fontFamily='"Gravitas One", cursive'
          >
            Bienvenue
          </Typography>
          <Typography variant="h6" color="white" textAlign="center">
            "Harmonisez vos passions, partagez vos émotions avec Connectify !"
          </Typography>
        </div>
      </S.Cell12>
      <S.Cell31img>
        <S.Img src={fdactualite} alt="Img1" />
      </S.Cell31img>
      <S.Cell32 sx={{ backgroundColor: "#20835d" }}>
        <S.Texts sx={{ backgroundColor: "#20835d" }}>
          <Typography variant="h2" sx={{ pt: 8 }}>
            Actualité
          </Typography>
          <br />
          <br />
          <Typography variant="h6" sx={{ color: "white" }}>
            Le lieu où vous pouvez vous connecter avec vos amis, partager des
            moments spéciaux et explorer de nouvelles rencontres.
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Exprimez-vous à travers des photos, des vidéos et des messages, et
            découvrez le monde passionnant de la communauté Connectify.
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Rejoignez-nous dès maintenant et commencez à créer des liens, à
            inspirer et à être inspiré. Connectify est là pour vous aider à
            rester connecté et à célébrer les moments de la vie, ensemble.
          </Typography>
        </S.Texts>
      </S.Cell32>
      <S.Cell31img1>
        <S.Img src={fdactualite} alt="Img1" />
      </S.Cell31img1>
      <S.Cell31 sx={{ backgroundColor: "#20835d" }}>
        <S.Texts>
          <Typography variant="h2" sx={{ pt: 8 }}>
            Qui sommes nous ?
          </Typography>
          <br />
          <Typography variant="h6" sx={{ color: "white" }}>
            Chez Connectify, nous sommes une plateforme sociale dynamique et
            inclusive, dédiée à connecter les individus du monde entier.
          </Typography>
          <Typography variant="h6" sx={{ color: "white" }}>
            Notre objectif est de créer un espace numérique où chacun peut se
            sentir libre d'exprimer sa véritable identité, de partager ses
            passions et de tisser des liens authentiques.
          </Typography>
        </S.Texts>
      </S.Cell31>
      <S.Cell32>
        <S.Img src={fdqsn} alt="Img2" />
      </S.Cell32>
      <S.Cell31img>
        <S.Img src={fdcontact} alt="ImgConnection" />
      </S.Cell31img>
      <S.Cell32 sx={{ backgroundColor: "#20835d" }}>
        <S.Texts>
          <S.BoxContactForm>
            <FormContact widthSpace={true} />
          </S.BoxContactForm>
        </S.Texts>
      </S.Cell32>
      <S.Cell12>
        <video src={fdaccueil} muted className="videoblur" />
        <S.FormInscr>
          <Typography
            variant="h2"
            sx={{
              color: "#daca3bff",
            }}
          >
            Newsletter
          </Typography>
          <br />
          <Typography
            variant="body2"
            sx={{
              color: "white",
            }}
          >
            Inscrivez-vous à notre newsletter pour rester informé(e) et
            connecté(e) avec Connectify !
          </Typography>
          <br />
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": {
                m: 1,
                width: { xs: "70vw", md: "25vw" },
                borderRadius: "10px",
                borderBlockColor: " grey",
                backgroundColor: " grey",
                boxShadow: " 0px 4px 4px gray inset",
              },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="Email"
              label="Email"
              color="secondary"
              type="text"
              name="subsc"
              value={subsc}
              onChange={(event) => onInputChange(event)}
              sx={{
                backgroundColor: " grey",
                boxShadow: " 0px 8px 8px #566573  inset",
              }}
              placeholder="Entrez votre email..."
              fullWidth
            />
            <br />
            <br />
            <Button
              variant="contained"
              onClick={() => subscribe()}
              sx={{
                color: "white",
                borderRadius: "10px",
                width: "10vw",
                filter: " blur(0)",
                opacity: "1",
                background: "#20835d",
                py: 2,
                px: 13,
              }}
            >
              Valider
            </Button>
          </Box>
        </S.FormInscr>
      </S.Cell12>
    </S.Container>
  );
};

export default Accueil;
