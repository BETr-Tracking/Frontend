import {
  AppBar,
  Avatar,
  Box,
  CssBaseline,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { Outlet, useNavigate } from "react-router-dom";
import "./navigation.css";
import { links } from "./navLinks";

const drawerWidth = 240;

const Navigation = () => {
  const [menu, setMenu] = useState(null);
  const navigate = useNavigate();
  const handleMenuOpen = (event) => {
    setMenu(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenu(null);
  };
  const handleMenu = (title) => {
    switch (title) {
      case "Profile & Settings":
        navigate("/profile");
        break;

      case "Logout":
        navigate("/login");
        break;

      default:
        break;
    }
    handleMenuClose();
  };
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          background: "#001842",
        }}
      >
        <Toolbar>
          <Typography component="div" sx={{ flexGrow: 1 }} className="nav-logo">
            BETr
          </Typography>
          <div className="nav-user-section">
            <div className="nav-user-info">
              <div className="nav-user-name">Mr. name</div>
              <div className="nav-user-email">name@email.com</div>
            </div>
            <Tooltip title="Open settings">
              <IconButton sx={{ p: 0 }} onClick={handleMenuOpen}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={menu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(menu)}
              onClose={handleMenuClose}
            >
              {["Profile & Settings", "Logout"].map((item) => (
                <MenuItem key={item} onClick={() => handleMenu(item)}>
                  <Typography textAlign="center">{item}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#001842",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {links.map((item, index) =>
              item.hidden ? (
                <></>
              ) : (
                <ListItem key={index} disablePadding>
                  <ListItemButton onClick={() => navigate(item.path)}>
                    <ListItemIcon style={{ color: "#fff" }}>
                      <item.icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={item.title}
                      style={{ color: "#fff" }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: "#caf0f866",
          minHeight: "100vh",
        }}
      >
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
};

export default Navigation;
