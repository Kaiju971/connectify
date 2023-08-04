import React, { useState } from "react";
import fdconnexion from "../image/fdconnexion.jpg";
import * as S from "./Connexion.styled";
import Grid from "@mui/system/Unstable_Grid";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
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

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Box sx={{ width: "100%" }}>
          <Grid container rowSpacing={0} columnSpacing={0}>
            <Grid xs={6}>
              <S.Item>
                <S.Img src={fdconnexion} />
              </S.Item>
            </Grid>
            <Grid xs={6}>
              <S.Item>
                <S.FormContainer>
                  <Typography
                    variant="h2"
                    sx={{
                      textAlign: "center",
                      fontFamily: "Gravitas One', cursive",
                    }}
                  >
                    Connexion
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": {
                        m: 3,
                        width: "40ch",
                        borderRadius: "10px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <S.FlexContainer>
                      <TextField
                        required
                        id="Email"
                        label="Email"
                        placeholder="Entrez votre Email"
                        color="secondary"
                        sx={{
                          backgroundColor: " grey",
                          boxShadow: " 0px 8px 8px #566573  inset",
                        }}
                      />
                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                        <FormControl
                          sx={{ m: 1, width: "40ch" }}
                          variant="outlined"
                        >
                          <InputLabel
                            htmlFor="outlined-adornment-password"
                            color="secondary"
                          >
                            Password
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? "text" : "password"}
                            color="secondary"
                            sx={{
                              backgroundColor: " grey",
                              boxShadow: " 0px 8px 8px #566573  inset",
                            }}
                            endAdornment={
                              <InputAdornment position="end">
                                <IconButton
                                  aria-label="toggle password visibility"
                                  onClick={handleClickShowPassword}
                                  onMouseDown={handleMouseDownPassword}
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            }
                            label="Password"
                          />
                        </FormControl>
                      </Box>

                      <Button
                        variant="contained"
                        size="medium"
                        sx={{
                          m: 1,
                          backgroundColor: "#DACA3B",
                          boxShadow: " 0px 4px 4px #566573 ",
                          width: "10vw",
                          borderRadius: "10px",
                        }}
                      >
                        Valider
                      </Button>
                    </S.FlexContainer>
                  </Box>
                  <S.Inscrivez>
                    Pas de compte ? <u>Inscrivez-vous</u>
                    
                  </S.Inscrivez>
                </S.FormContainer>
              </S.Item>
            </Grid>
          </Grid>
        </Box>
      </S.Container>
    </ThemeProvider>
  );
}
