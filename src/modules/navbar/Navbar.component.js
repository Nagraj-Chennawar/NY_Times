import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MenuItem } from "@mui/material";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  const handleHomeClick = () => navigate("/");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MenuItem key={"home"} onClick={handleHomeClick}>
            <Typography textAlign="center">Home</Typography>
          </MenuItem>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
