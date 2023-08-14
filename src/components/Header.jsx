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

import { useLocation, useNavigate } from "react-router";
import * as S from "./Header.styled";

let navItems = [];
const menuItemsArrayProfil = ["profil", "contact", "deconnexion"];
const menuItemsArrayConnect = ["accueil", "connexion", "inscription"];

const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSelected = (item) =>
    pathname.includes(item) || (pathname === "/" && item === "accueil");

  console.log(pathname);

  if (pathname === "/Profil" || pathname === "/contact")
    navItems = [...menuItemsArrayProfil];
  if (
    pathname === "/" ||
    pathname === "/accueil" ||
    pathname === "/connexion" ||
    pathname === "/inscription" ||
    pathname === "/deconnexion"
  )
    navItems = [...menuItemsArrayConnect];
  console.log(navItems);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Connectify
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item}>
            <ListItemButton
              selected={isSelected(item)}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item} onClick={() => navigate(item)} />
            </ListItemButton>
          </ListItem>
        ))}
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
              pathname === "/Profil" ? "#216249ff" : "transparent",
            boxShadow: "none",
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h4"
              fontFamily='"Chicle", cursive'
              color="yellow"
              component="div"
              sx={{
                my: 2,
                opacity: 0.8,
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
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
