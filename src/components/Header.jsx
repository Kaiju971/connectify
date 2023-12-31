import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useLocation, useNavigate } from "react-router";
import * as S from "./Header.styled";
import qrcode from "../image/qrcode.png";

let navItems = [];
const menuItemsArrayProfil = ["profil", "contact", "deconnexion"];
const menuItemsArrayConnect = ["accueil", "connexion", "inscription"];

const drawerWidth = "100%";

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item) =>
    pathname.includes(item) || (pathname === "/" && item === "accueil");

  if (pathname === "/profil" || pathname === "/contact")
    navItems = [...menuItemsArrayProfil];
  if (
    pathname === "/" ||
    pathname === "/accueil" ||
    pathname === "/connexion" ||
    pathname === "/inscription" ||
    pathname === "/deconnexion"
  )
    navItems = [...menuItemsArrayConnect];

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ height: "100vh", textAlign: "center", backgroundColor: "#20835D" }}
    >
      <S.CloseIconStyle>
        <Typography variant="h5" color="" className="close">
          Close
        </Typography>
        <CloseIcon sx={{ fontSize: "2rem" }} />
      </S.CloseIconStyle>
      <Typography
        onClick={() => navigate("accueil")}
        variant="h6"
        fontFamily='"Chicle", cursive'
        fontSize="12vw"
        sx={{ my: 2, color: "#daca3bff" }}
      >
        Connectify
      </Typography>
      <Divider />
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              selected={isSelected(item)}
              sx={{ textAlign: "center", color: "white" }}
            >
              <ListItemText
                primary={item}
                onClick={() => navigate(item)}
                primaryTypographyProps={{
                  fontSize: "12vw",
                  textTransform: "capitalize",
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
        <S.Img src={qrcode} alt="Img1"></S.Img>
      </List>
    </Box>
  );
  return (
    <S.Container>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          sx={{
            backgroundColor:
              pathname === "/profil" ? "#216249ff" : "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar
            sx={{ display: "flex", justifyContent: "end", width: "100%" }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none", md: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              fontFamily='"Chicle", cursive'
              color="yellow"
              component="div"
              onClick={() => navigate("accueil")}
              sx={{
                my: 2,
                opacity: 0.8,
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
                cursor: "pointer",
              }}
            >
              Connectify
            </Typography>
            <List sx={{ display: { xs: "none", sm: "flex" } }}>
              {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                  <ListItemButton
                    selected={isSelected(item)}
                    onClick={() => navigate(item)}
                    sx={{
                      color: "white",
                      textTransform: "capitalize",
                      "&.Mui-selected": {
                        color: item === "inscription" ? "white" : "#daca3bff",
                        backgroundColor:
                          item === "inscription" ? "#daca3bff" : "transparent",
                        borderRadius: item === "inscription" ? "10px" : "0",
                        boxShadow:
                          item === "inscription"
                            ? " 0px 4px 4px #2e4f44 "
                            : "transparent",
                      },
                    }}
                  >
                    {item}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            anchor="right"
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </S.Container>
  );
}
