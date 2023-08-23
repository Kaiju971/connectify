// import React, { useState, useCallback, useEffect } from "react";
// import * as S from "./Gallery.styled";
// import axios from "axios";
// import Grid from "@mui/material/Unstable_Grid2";
// import Box from "@mui/material/Box";
import imgGroupe from "../image/imgGroupe.jpg";
import albumDisco from "../image/albumDisco.jpg";
import imgChignon from "../image/imgChignon.jpg";
import fdqsnCopie from "../image/fdqsnCopie.jpg";
// import { Button, TextField, Typography } from "@mui/material";

// export default function Gallery({ hidden }) {
//   const [photos, setPhotos] = useState([]);
//   const [searching, setSearching] = useState("");
//   const [pictures, setPictures] = useState([]);
//   const [selected, setSelected] = useState(null);

//   useEffect(() => {
//     setPictures(Array.from(document.querySelectorAll(".picture")));
//   }, []);

//   const onInputChange = (event) => {
//     event.preventDefault();
//     setSearching(event.target.value);
//   };

//   const showPhotos = () => {
//     fetchGet();
//   };

//   const handleResponse = (response) => {
//     setPhotos(response);
//   };
//   const sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${searching}&key=4e7fbeabeo53b0385af57bab3b3t32b1`;

//   const fetchGet = async () => {
//     await axios
//       .get(sheCodesApiUrl)
//       .then((response) => handleResponse(response.data.photos))
//       .catch((err) => console.error(err));
//   };

//   const finishIt = useCallback(() => {
//     pictures.map((item) => {
//       item.style.filter = "blur(0px)";
//       item.style.zIndex = "10";
//       return item;
//     });
//   }, [pictures]);

//   const Roles = useCallback(
//     async (image) => {
//       const temp = document.querySelector(image);

//       pictures.map((item) => {
//         if (!item.className.includes(image.slice(2))) {
//            item.style.filter = "blur(4px)";
//           item.style.zIndex = "-1";

//           console.log(item.className + " " + item.style.zIndex);
//           console.log(temp.className + " " + temp.style.zIndex);
//         }
//         return item;
//       });
//     },
//     [pictures]
//   );

//   if (hidden) return null;
//   return (
//     <S.Container>
//       {/* <ThemeProvider theme={theme}> */}
//       <Typography
//         variant="h5"
//         sx={{ pt: 8 }}
//         color="#DACA3B"
//         id="walls-text"
//         fontFamily='"Gravitas One", cursive'
//         textAlign="center"
//       >
//         <div className="title">Gallery</div>
//       </Typography>

//       <Box sx={{ width: "80%" }}>
//         <Grid container rowSpacing={3} columnSpacing={{ xs: 3, sm: 3, md: 3 }}>
//           <Grid xs={6}>
//             <S.Img
//               isSelected={selected}
//               src={imgGroupe}
//               className="pict1 picture"
//               onClick={() => Roles(".pict1")}
//             />
//           </Grid>
//           <Grid xs={6}>
//             <S.Img
//               isSelected={selected}
//               src={albumDisco}
//               className="pict2 picture"
//               onClick={() => Roles(".pict2")}
//             />
//           </Grid>
//           <Grid xs={6}>
//             <S.Img3
//               isSelected={selected}
//               src={imgChignon}
//               className="pict3 picture"
//               onMouseOver={() => {
//                 setSelected(true);
//                 Roles(".pict3");
//               }}
//               onMouseLeave={() => finishIt()}
//             />
//           </Grid>
//           <Grid xs={6}>
//             <S.Img
//               isSelected={selected}
//               src={fdqsnCopie}
//               className="pict4 picture"
//               onClick={() => Roles(".pict4")}
//             />
//           </Grid>
//         </Grid>
//       </Box>
//       <TextField
//         id="standard"
//         type="text"
//         label="systeme de recherche"
//         placeholder="Cherchez..."
//         name="searching"
//         value={searching}
//         onChange={(e) => onInputChange(e)}
//         fullWidth
//         color="secondary"
//         sx={{
//           width: "55vw",
//           color: "secondary",
//           borderRadius: "10px",
//           borderBlockColor: " grey",
//           backgroundColor: " grey",
//           boxShadow: " 0px 4px 4px gray inset",
//         }}
//       />
//       <Button
//         variant="contained"
//         onClick={() => showPhotos()}
//         sx={{
//           borderRadius: "10px",
//           width: "7vw",
//           my: "1vw",
//           color: "lime",
//         }}
//       >
//         Appliquer
//       </Button>
//       <S.PhotoBox>
//         {photos?.map((photo, index) => (
//           <S.ListItem key={photo.id}>
//             <S.Img
//               src={photo.src.landscape}
//               alt={photo.photographer}
//               width="100%"
//               height="100%"
//               className={`pict1${index} picture`}
//               isSelected={selected === index}
//               onClick={() => {
//                 setSelected(index);
//                 Roles(`.pict1${index}`);
//               }}
//             />
//           </S.ListItem>
//         ))}
//       </S.PhotoBox>
//       {/* </ThemeProvider> */}
//     </S.Container>
//   );
// }

import React, { useState, useCallback, useEffect } from "react";
import * as S from "./Gallery.styled";
import axios from "axios";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import { Button, TextField, Typography } from "@mui/material";

const images = [
  { src: { imgGroupe }, className: "pict1" },
  { src: { albumDisco }, className: "pict2" },
  { src: { imgChignon }, className: "pict3" },
  { src: { fdqsnCopie }, className: "pict4" },
];

export default function Gallery({ hidden }) {
  const [photos, setPhotos] = useState([]);
  const [searching, setSearching] = useState("");
  const [selected, setSelected] = useState(null);

  // useEffect(() => {
  //   const pictures = document.querySelectorAll(".picture");
  //   pictures.forEach((item) => {
  //     item.style.filter = "blur(4px)";
  //     item.style.zIndex = "-1";
  //   });
  // }, []);

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

  const handleImageMouseOver = (className) => {
    const pictures = document.querySelectorAll(".picture");
    pictures.forEach((item) => {
      if (!item.classList.contains(className)) {
        item.style.filter = "blur(4px)";
        item.style.zIndex = "-1";
      }
    });
  };

  const handleImageMouseLeave = () => {
    const pictures = document.querySelectorAll(".picture");
    pictures.forEach((item) => {
      item.style.filter = "blur(4px)";
      item.style.zIndex = "-1";
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
                isSelected={selected}
                src={images.src}
                className="pict3 picture"
                onMouseOver={() => handleImageMouseOver(".pict3")}
                onMouseLeave={() => handleImageMouseLeave(".pict3")}
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
              className={`pict${index + 1} picture`}
              isSelected={selected === index + images.length}
              // onClick={() =>
              //   handleImageClick(index + images.length, `pict${index + 1}`)
              // }
            />
          </S.ListItem>
        ))}
      </S.PhotoBox>
    </S.Container>
  );
}
