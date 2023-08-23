import React, { useState } from "react";
import * as S from "./Profil.styled";
import fdban1 from "../image/fdban1.jpg";
import avatar from "../image/avatar.png";
import Typography from "@mui/material/Typography";
import Wall from "./Wall";
import Gallery from "./Gallery";
import Video from "./Video";
import Music from "./Music";

const filterItemsArray = ["all", "wall", "gallery", "video", "music"];

export default function Profil() {
  const [hiddenWall, setHiddenWall] = useState(false);
  const [hiddenGallery, setHiddenGallery] = useState(false);
  const [hiddenVideo, setHiddenVideo] = useState(false);
  const [hiddenMusic, setHiddenMusic] = useState(false);

  const filter = (item) => {
    switch (item) {
      case "all":
        setHiddenWall(false);
        setHiddenGallery(false);
        setHiddenVideo(false);
        setHiddenMusic(false);
        break;
      case "wall":
        setHiddenWall(false);
        setHiddenGallery(true);
        setHiddenVideo(true);
        setHiddenMusic(true);
        break;
      case "gallery":
        setHiddenGallery(false);
        setHiddenWall(true);
        setHiddenVideo(true);
        setHiddenMusic(true);
        break;
      case "video":
        setHiddenVideo(false);
        setHiddenWall(true);
        setHiddenGallery(true);
        setHiddenMusic(true);
        break;
      case "music":
        setHiddenMusic(false);
        setHiddenWall(true);
        setHiddenGallery(true);
        setHiddenVideo(true);
        break;
      default:
        setHiddenWall(false);
        setHiddenGallery(false);
        setHiddenVideo(false);
        setHiddenMusic(false);
    }
  };

  return (
    <S.Container>
      <S.GridImges>
        <S.Img1 src={fdban1} alt="img" />
        <S.ImgContainer>
          <div>
            <S.ContStar>
              <S.Star />
              <S.Img2 src={avatar} alt="img2" />
            </S.ContStar>
          </div>
          <div>
            <Typography variant="h3" color="white" textAlign="center">
              Nom
            </Typography>
          </div>
          <div>
            <Typography variant="h3" color="white" textAlign="center">
              Prenom
            </Typography>
          </div>
        </S.ImgContainer>
      </S.GridImges>
      <S.Content>
        {/* <Sheet
          variant="inlined"
          sx={{
            width: 320,
            maxHeight: 5000,
            overflow: "auto",
            borderRadius: "sm",
          }}
        > */}
        <S.Filter>
          {filterItemsArray.map((item) => (
            <S.MyButton
              key={item}
              variant="contained"
              onClick={() => filter(item)}
              sx={{ backgroundColor: "#DACA3B" }}
            >
              <Typography variant="h6" sx={{ color: "white" }}>
                {item}
              </Typography>
            </S.MyButton>
          ))}
        </S.Filter>
        {/* </Sheet> */}
        <S.Wall>
          <Wall hidden={hiddenWall} />
          <Gallery hidden={hiddenGallery} />
          <Video hidden={hiddenVideo} />
          <Music hidden={hiddenMusic} />
          {/* <Spotify />  */}
          {/* {Login}  */}
        </S.Wall>
      </S.Content>
    </S.Container>
  );
}
