import { SnackbarProvider } from "notistack";
import AppRoutes from "./appRoutes";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Global as GlobalStyles, css } from "@emotion/react";
import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { lime } from "@mui/material/colors";
import { QueryClient, QueryClientProvider } from "react-query";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#070606",
    },
    secondary: {
      main: lime[500],
    },
  },
  typography: {
    h1: {
      fontSize: "7.5rem",
    },
    h2: {
      fontSize: "4rem",
    },
    h3: {
      fontSize: "3rem",
    },
    h4: {
      fontSize: "3rem",
    },
    h5: {
      fontSize: "2rem",
    },
    h6: {
      fontSize: "1rem",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Header />
          <SnackbarProvider>
            <AppRoutes />
            <GlobalStyles
              styles={css`
                #root,
                body,
                html {
                  margin: 0;
                  scroll-behavior: smooth;
                  overflow-x: hidden;
                  overflow-y: scroll;
                  scrollbar-width: none;
                  -ms-overflow-style: none; /* IE 10+ */
                  scrollbar-width: none; /* Firefox */
                  &::-webkit-scrollbar {
                    /* chrome based */
                    width: 0px;
                  }
                }
                /* #root {
            position: relative;
          } */
              `}
            />
          </SnackbarProvider>
          <Footer />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
