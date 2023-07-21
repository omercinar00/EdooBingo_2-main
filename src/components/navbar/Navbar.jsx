import "./Navbar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SearchIcon from "@mui/icons-material/Search";
import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="navbar-left">
          <div className="menu icon">
            <MenuIcon className="nav-icon" />
          </div>
          <div className="message icon">
            <MailOutlineIcon className="nav-icon" />
          </div>

          <div className="star icon">
            <StarBorderIcon className="nav-icon" />
          </div>
        </div>

        <div className="navbar-right">
          <div className="search icon">
            <SearchIcon className="nav-icon" />
          </div>

          <div className="notification icon">
            <Badge
              badgeContent={50}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize:"14px",
                  fontWeight:"600",
                  color: "rgb(14, 17, 48)",
                  backgroundColor: "transparant",
                  top:"-4px"
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <NotificationsIcon />
            </Badge>
          </div>

          <div className="shopping-cart icon">
            <Badge
              badgeContent={50}
              sx={{
                "& .MuiBadge-badge": {
                  fontSize:"14px",
                  fontWeight:"600",
                  color: "rgb(14, 17, 48)",
                  backgroundColor: "transparant",
                  top:"-4px"
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <ShoppingCartIcon />
            </Badge>
          </div>

          <div className="user-info icon">
            <div className="user-logo"></div>
            <div className="user-name-info">Ömer Türkay</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
