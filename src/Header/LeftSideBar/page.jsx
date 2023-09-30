import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import ListItemButton from "@mui/material/ListItemButton";

import Collapse from "@mui/material/Collapse";
import ListSubheader from "@mui/material/ListSubheader";
import Data from "@/Header/option.json";

const DrawerComponent = () => {
  const [open, setOpen] = useState();
  const [products, setProducts] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [id, setId] = useState("");
  const [val, setVal] = useState("");
  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  const list = (
    <>
      <List
        sx={{ width: "100%", maxWidth: 500, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Category
          </ListSubheader>
        }
      >
        <ListItemButton key="all-types-of-neon">
          <ListItemText primary="ALL TYPES OF NEON" />
        </ListItemButton>
        <ListItemButton key="home">
          <ListItemText primary="Home" />
        </ListItemButton>
        {Data.map((category) => (
          <div key={category.id}>
            <ListItemButton
              onClick={() => {
                setProducts(!products), setId(category.id);
              }}
            >
              <ListItemText primary={category.menu} />
              {products && category.id === id ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse
              in={products && category.id === id}
              timeout="auto"
              unmountOnExit
            >
              {Object.entries(category["sub-Menu"]).map(([keys, values]) => (
                <div key={keys}>
                  <List component="div" disablePadding>
                    <ListItemButton
                      onClick={() => {
                        setDropdown(!dropdown), setVal(keys);
                      }}
                    >
                      <ListItemText primary={keys} />
                      {dropdown && keys === val ? (
                        <ExpandLess />
                      ) : (
                        <ExpandMore />
                      )}
                    </ListItemButton>
                    <Collapse
                      in={dropdown && keys === val}
                      timeout="auto"
                      unmountOnExit
                    >
                      {values.map((ele) => (
                        <div key={ele}>
                          <List component="div" disablePadding>
                            <ListItemButton sx={{ pl: 4 }} onClick={() => setOpen(false)}>
                              <ListItemText primary={ele} />
                            </ListItemButton>
                          </List>
                        </div>
                      ))}
                    </Collapse>
                  </List>
                </div>
              ))}
            </Collapse>
          </div>
        ))}
      </List>
    </>
  );
 

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
