import React, { useState, useEffect, useCallback } from "react";
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
import Cookies from "js-cookie";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router";

import { UsersService } from "../Service/DatabaseService";

export default function Connexion() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const userdataInitialState = {
    nom: "",
    prenom: "",
    genre: "",
    email: "",
    password: "",
    abonnement: false,
  };

  const [users, setUsers] = useState(userdataInitialState); //information bd
  const [user, setUser] = useState({
    // information form
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (event) => {
    setUser({ ...user, [event.target?.name]: event.target?.value });
  };

  const showError = (error) => {
    enqueueSnackbar("Utilisateur inconnu", {
      variant: "error",
    });
    console.log(error);
  };

  const getUser = async () => {
    try {
      const data = await UsersService.getUserCheck(user?.email, user?.password);
      if (data[0].nom) {
        setUsers(data[0]);
      } else
        enqueueSnackbar("Utilisateur inconnu", {
          variant: "error",
        });
    } catch (error) {
      showError(error);
    }
  };

  const Redirect = useCallback(() => {
    enqueueSnackbar("Vous vous êtes connecté avec succès", {
      variant: "success",
    });
    navigate("/profil");
  }, [navigate]);

  useEffect(() => {
    if (users.nom) {
      Cookies.set("prenom", users.prenom);
      Cookies.set("nom", users.nom);
      Redirect();
    }
  }, [users, Redirect]);

  return (
    <S.Container>
      <Box sx={{ width: "100%" }}>
        <Grid container rowSpacing={0} columnSpacing={0}>
          <Grid xs={12} md={6}>
            <S.Item>
              <S.Img src={fdconnexion} />
            </S.Item>
          </Grid>
          <Grid xs={12} md={6}>
            <S.Item>
              <S.FormContainer>
                <Typography
                  variant="h2"
                  sx={{
                    textAlign: "center",
                    fontFamily: "Gravitas One', cursive",
                    color: "yellow",
                    pt: 2,
                  }}
                >
                  Connexion
                </Typography>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": {
                      m: 3,
                      width: { xs: "50vw", md: "25vw" },
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
                      name="email"
                      value={email}
                      placeholder="Entrez votre Email"
                      color="secondary"
                      fullWidth
                      onChange={(event) => onInputChange(event)}
                      sx={{
                        backgroundColor: " grey",
                        boxShadow: " 0px 8px 8px #566573  inset",
                      }}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        flexWrap: "wrap",
                      }}
                    >
                      <FormControl
                        sx={{ m: 1, width: { xs: "50vw", md: "25vw" } }}
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
                          fullWidth
                          autoComplete="new-password"
                          name="password"
                          value={password}
                          onChange={(event) => onInputChange(event)}
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
                      onClick={() => getUser()}
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
                  Pas de compte ?{" "}
                  <u
                    style={{
                      cursor: "pointer",
                    }}
                    onClick={() => navigate("/inscription")}
                  >
                    Inscrivez-vous
                  </u>
                </S.Inscrivez>
              </S.FormContainer>
            </S.Item>
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
}
