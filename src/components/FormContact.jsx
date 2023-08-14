import * as S from "../pages/Contact.styled";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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

export default function FormContact() {
  return (
    <ThemeProvider theme={theme}>
      <S.FormContainer>
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
          }}
        >
          Nous contacter
        </Typography>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": {
              m: 3,
              width: "25vw",
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
            <TextField
              required
              id="Sujet"
              label="Sujet"
              placeholder="Sujet de votre message"
              color="secondary"
              sx={{
                backgroundColor: " grey",
                boxShadow: " 0px 8px 8px #566573  inset",
              }}
            />
            <TextField
              required
              id="Message"
              label="Message"
              multiline
              rows={4}
              placeholder="Ecrivez votre message..."
              color="secondary"
              sx={{
                backgroundColor: " grey",
                boxShadow: " 0px 8px 8px  #566573 inset",
              }}
            />
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
      </S.FormContainer>
    </ThemeProvider>
  );
}
