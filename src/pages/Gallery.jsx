import React, { useState } from "react";
import * as S from "./Gallery.styled";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import imgGroupe from "../image/imgGroupe.jpg";
import albumDisco from "../image/albumDisco.jpg";
import imgChignon from "../image/imgChignon.jpg";
import fdqsnCopie from "../image/fdqsnCopie.jpg";
import { Button, TextField, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070606",
    },
    secondary: lime,
  },
});

export default function Gallery({ hidden }) {
  const [photos, setPhotos] = useState([]);
  const [searching, setSearching] = useState("");

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  //   ...theme.typography.body2,
  //   padding: theme.spacing(1),
  //   textAlign: "center",
  //   color: theme.palette.text.secondary,
  // }));

  const onInputChange = (event) => {
    event.preventDefault();
    setSearching(event.target.value);
  };

  const showPhotos = () => {
    fetchGet();
  };

  const handleResponse = (response) => {
    setPhotos(response);
  };
  const sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searching}&key=4e7fbeabeo53b0385af57bab3b3t32b1`;

  const fetchGet = async () => {
    await axios
      .get(sheCodesApiUrl)
      .then((response) => handleResponse(response.data.photos))
      .catch((err) => console.error(err));
  };
  if (hidden) return null;
  return (
    <S.Container>
      <ThemeProvider theme={theme}>
        <Typography
          variant="h5"
          sx={{ pt: 8, fontSize: "4vw" }}
          color="#DACA3B"
          id="walls-text"
          fontFamily='"Gravitas One", cursive'
        >
          <div className="title">Gallery</div>
        </Typography>

        <Box sx={{ width: "80%" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 3, sm: 3, md: 3 }}
          >
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
        <TextField
          id="standard"
          type="text"
          label="systeme de recherche"
          placeholder="Cherchez..."
          name="searching"
          value={searching}
          onChange={(e) => onInputChange(e)}
          fullWidth
          color="secondary"
          sx={{
            width: "55vw",
            color: "secondary",
            borderRadius: "10px",
            borderBlockColor: " grey",
            backgroundColor: " grey",
            boxShadow: " 0px 4px 4px gray inset",
          }}
        />
        <Button
          variant="contained"
          onClick={() => showPhotos()}
          sx={{
            color: "white",
            borderRadius: "10px",
            width: "7vw",
            my: "1vw",
            color: "lime",
          }}
        >
          Appliquer
        </Button>
        <S.PhotoBox>
          {photos?.map((photo) => (
            <S.ListItem key={photo.id}>
              <img
                src={photo.src.landscape}
                alt={photo.photographer}
                width="100%"
                height="100%"
              />
            </S.ListItem>
          ))}
        </S.PhotoBox>
      </ThemeProvider>
    </S.Container>
  );
}
