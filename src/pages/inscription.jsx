import React, { useState } from "react";
import * as S from "./Inscription.styled";
import fdinscription from "../image/fdinscription.jpg";
import Grid from "@mui/system/Unstable_Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/system/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
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

export default function Inscription() {
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
                <S.Img src={fdinscription} />
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
                    Inscription
                  </Typography>
                  <Box
                    component="form"
                    sx={{
                      "& .MuiTextField-root": {
                        m: 3,
                        borderRadius: "10px",
                      },
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    <S.FlexContainer>
                      <S.FlexContainerNom>
                        <TextField
                          required
                          id="nom:"
                          label="nom"
                          placeholder="Entrez votre nom..."
                          color="secondary"
                          sx={{
                            m: 1,
                            width: "15ch",
                            backgroundColor: " grey",
                            boxShadow: " 0px 8px 8px #566573  inset",
                          }}
                        />
                        <TextField
                          required
                          id="Prénom:"
                          label="Prénom"
                          placeholder="Entrez votre prénom..."
                          color="secondary"
                          sx={{
                            m: 1,
                            width: "15ch",
                            backgroundColor: " grey",
                            boxShadow: " 0px 8px 8px #566573  inset",
                          }}
                        />
                      </S.FlexContainerNom>
                      <TextField
                        required
                        id="Email"
                        label="Email"
                        placeholder="Entrez votre Email"
                        color="secondary"
                        sx={{
                          m: 1,
                          width: "45ch",
                          backgroundColor: " grey",
                          boxShadow: " 0px 8px 8px #566573  inset",
                        }}
                      />
                      <FormControl>
                        <S.RadioButton>
                          <div>Genre:&nbsp;&nbsp;</div>
                          <RadioGroup
                            row
                            aria-labelledby="radio-buttons"
                            name="genre"
                            // value={genre}
                            // onChange={(e) => onInputChange(e)}
                            sx={{
                              color: "grey",
                              "&.Mui-checked": {
                                color: "lime",
                              },
                            }}
                          >
                            <FormControlLabel
                              value="Femme"
                              control={
                                <Radio
                                  sx={{
                                    color: "lime",
                                    "&.Mui-checked": {
                                      color: "lime",
                                    },
                                  }}
                                />
                              }
                              label="Femme"
                            />
                            <FormControlLabel
                              value="Homme"
                              control={
                                <Radio
                                  sx={{
                                    color: "grey",
                                    "&, &.Mui-checked": {
                                      color: "lime",
                                    },
                                  }}
                                />
                              }
                              label="Homme"
                            />
                            <FormControlLabel
                              value="Autre"
                              control={
                                <Radio
                                  sx={{
                                    color: "grey",
                                    "&, &.Mui-checked": {
                                      color: "lime",
                                    },
                                  }}
                                />
                              }
                              label="Autre"
                            />
                          </RadioGroup>
                        </S.RadioButton>
                      </FormControl>
                      <S.FlexContainerPass>
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "start",
                            flexWrap: "wrap",
                          }}
                        >
                          <FormControl
                            sx={{ m: 1, width: "30ch", textAlign: "start" }}
                            variant="outlined"
                          >
                            <InputLabel
                              htmlFor="outlined-adornment-password"
                              color="secondary"
                            >
                              Mot de passe
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
                        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                          <FormControl
                            sx={{ m: 1, width: "30ch" }}
                            variant="outlined"
                          >
                            <InputLabel
                              htmlFor="outlined-adornment-password"
                              color="secondary"
                            >
                              Confimez votre mot de passe
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
                      </S.FlexContainerPass>
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
