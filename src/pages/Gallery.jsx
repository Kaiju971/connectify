import imgGroupe from "../image/imgGroupe.jpg";
import albumDisco from "../image/albumDisco.jpg";
import imgChignon from "../image/imgChignon.jpg";
import fdqsnCopie from "../image/fdqsnCopie.jpg";
import React, { useState } from "react";
import * as S from "./Gallery.styled";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";

const images = [
  { src: imgGroupe, className: "pict1" },
  { src: albumDisco, className: "pict2" },
  { src: imgChignon, className: "pict3" },
  { src: fdqsnCopie, className: "pict4" },
];

export default function Gallery({ hidden }) {
  const [photos, setPhotos] = useState([]);
  const [searching, setSearching] = useState("");

  const onInputChange = (event) => {
    setSearching(event.target.value);
  };

  const showPhotos = async () => {
    try {
      const response = await axios.get(
        `https://api.shecodes.io/images/v1/search?query=${searching}&key=4e7fbeabeo53b0385af57bab3b3t32b1`
      );
      setPhotos(response.data.photos);
    } catch (error) {
      console.error(error);
    }
  };

  const increasePhoto = (index, api = false) => {
    let clName = "";
    if (!api) clName = `.item${index}`;
    else clName = `.itemApi${index}`;
    const pictures = document.querySelectorAll(`#pict`);
    console.log(clName);
    const pictArray = Array.from(pictures);
    const picture = document.querySelector(clName);
    pictArray.forEach((item) => {
      item.style.zIndex = "1";
      item.style.position = "relative";
      if (item !== picture) item.style.filter = "blur(4px)";
    });

    const animation = picture?.animate([{ transform: "scale(2.5)" }], 1000);
    picture.style.zIndex = "10000";
    animation?.addEventListener("finish", () => {
      picture.style.zIndex = "10000";
      picture.style.transform = "scale(2.5)";
    });
  };

  const reducePhoto = (index, api = false) => {
    let clName = "";
    if (!api) clName = `.item${index}`;
    else clName = `.itemApi${index}`;
    const picture = document.querySelector(clName);
    var animation = picture?.animate([{ transform: "scale(1)" }], 1000);
    animation?.addEventListener("finish", () => {
      picture.style.zIndex = "1";
      picture.style.transform = "scale(1)";
    });
    const pictures = document.querySelectorAll(`#pict`);
    const pictArray = Array.from(pictures);

    pictArray.forEach((item) => {
      if (item !== picture) item.style.filter = "blur(0px)";
    });
  };

  if (hidden) return null;
  return (
    <S.Container>
      <Typography
        variant="h5"
        sx={{ pt: 8 }}
        color="#DACA3B"
        textAlign="center"
      >
        Gallery
      </Typography>

      <Box sx={{ width: "80%" }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
          {images.map((image, index) => (
            <Grid xs={6}>
              <S.Img3
                src={image.src}
                className={`item${index}`}
                id="pict"
                onMouseOver={() => increasePhoto(index)}
                onMouseLeave={() => reducePhoto(index)}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <TextField
        id="standard"
        type="text"
        label="Recherche"
        placeholder="Cherchez..."
        name="searching"
        value={searching}
        onChange={(e) => onInputChange(e)}
        fullWidth
        sx={{
          width: "55vw",
          borderRadius: "10px",
          backgroundColor: " grey",
          boxShadow: "0px 4px 4px gray inset",
        }}
      />
      <Button
        variant="contained"
        onClick={showPhotos}
        sx={{
          borderRadius: "10px",
          width: "14vw",
          my: "1vw",
          color: "lime",
        }}
      >
        Appliquer
      </Button>
      <S.PhotoBox>
        {photos.map((photo, index) => (
          <S.ListItem key={photo.id}>
            <S.Img
              src={photo.src.landscape}
              alt={photo.photographer}
              width="100%"
              height="100%"
              className={`itemApi${index}`}
              id="pict"
              onMouseOver={() => increasePhoto(index, true)}
              onMouseLeave={() => reducePhoto(index, true)}
            />
          </S.ListItem>
        ))}
      </S.PhotoBox>
    </S.Container>
  );
}
