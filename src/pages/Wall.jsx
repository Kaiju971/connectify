import React from "react";
import * as S from "./Wall.styled";
import Typography from "@mui/material/Typography";
import homer from "../image/homer.jpeg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lime } from "@mui/material/colors";
import Box from "@mui/system/Box";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

const theme = createTheme({
  palette: {
    primary: {
      main: "#070606",
    },
    secondary: lime,
  },
});

export default function Wall({ hidden }) {
  if (hidden) return null;
  return (
    <S.Container>
      <Typography
        variant="h5"
        sx={{ py: 8, fontSize: "4vw" }}
        color="#DACA3B"
        id="walls-text"
        fontFamily='"Gravitas One", cursive'
      >
        <div className="title">My Walls</div>
      </Typography>
      <S.GridCadre>
        <S.GridTitle>
          <div>Le Rap US &gt;&gt;&gt; Rap FR</div>
        </S.GridTitle>

        <S.GridImg>
          <S.Img src={homer} alt="" />
          <S.TextImg>
            <Typography variant="h6" sx={{ pt: 3 }}>
              J’aime le classique...
            </Typography>
          </S.TextImg>
        </S.GridImg>
      </S.GridCadre>
      <S.GridSendBox>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 1,
              width: "35vw",
              borderRadius: "10px",
              borderBlockColor: " grey",
              backgroundColor: " grey",
              boxShadow: " 0px 4px 4px gray inset",
            },
          }}
          noValidate
          autoComplete="off"
        >
          <ThemeProvider theme={theme}>
            <TextField
              required
              id="Message"
              label="Message"
              color="secondary"
              type="text"
              sx={{
                backgroundColor: " grey",
                boxShadow: " 0px 8px 8px #566573  inset",
              }}
              placeholder="Ecrivez votre message..."
              fullWidth
            />
            <br />
            <br />
          </ThemeProvider>
        </Box>
        <Button
          sx={{
            color: "#DACA3B",
            borderRadius: "50px",
            width: "1vw",
            fontSize: "4rem",
          }}
        >
          <DownloadForOfflineIcon fontSize="inherit" />
        </Button>
        <Button
          sx={{
            color: "#DACA3B",
            borderRadius: "50px",
            width: "1vw",
            fontSize: "4rem",
          }}
        >
          <SendRoundedIcon
            fontSize="inherit"
            className="icon"
            sx={{
              color: "white",
              backgroundColor: " #1D5A43",
              borderRadius: "50%",
            }}
          />
        </Button>
      </S.GridSendBox>
    </S.Container>
  );
}
