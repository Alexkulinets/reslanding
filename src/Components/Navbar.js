import React, { useState } from 'react'
import Logo from "../Assets/Logo.svg";
import { BsCart2 } from 'react-icons/bs';
import { HiOutlineBars3 } from 'react-icons/hi2';
import {
  Anchor,
  Box,
  Drawer,
  Home,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon  from '@mui/icons-material/CommentRounded';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded"
const Navbar = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
};
    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
      {
        text:"Home",
        icon:<HomeIcon/>
      },
      {
        text:"About",
        icon:<InfoIcon/>
      },
      {
        text:"Testimonials",
        icon:<CommentRoundedIcon/>
      },
      {
        text:"Contact",
        icon:<PhoneRoundedIcon/>
      },
      {
        text:"Booking Now",
        icon:<ShoppingCartRoundedIcon/>
      },
    ];

  return (
  <nav>
    <div className="nav-logo-container" id="home">
    <a href="HOME" onClick={() => scrollToSection('home')}><img src={Logo} alt="" /></a>
    </div>
    <div className="navbar-links-container">
      <a href="HOME" onClick={() => scrollToSection('home')}>Home</a>
      <a href="#" onClick={() => scrollToSection('about')}>About</a>
      <a href="#" onClick={() => scrollToSection('testimonials')}>Testimonials</a>
      <a href="#" onClick={() => scrollToSection('contact')}>Contact</a>
      <a href="#">
        <BsCart2 className="navbar-cart-icon"/>
      </a>
      <button className="primary-button">
            Bookings Now
      </button>
    </div>
    <div className="navbar-menu-container">
      <HiOutlineBars3 onClick={() => setOpenMenu(true)}/>
    </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false) } anchor="right" >
        <Box 
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
              {menuOptions.map((item) => (
                <ListItem key={item.text} disablePadding>
                  <ListItemButton>
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}

          </List>
        </Box>
      </Drawer>
  </nav>
  )
}

export default Navbar
