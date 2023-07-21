import "./Sidebar.scss";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CelebrationIcon from "@mui/icons-material/Celebration";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, NavLink } from "react-router-dom";

const Sidebar2 = () => {
  const showDrapdown = () => {
    console.log("bastın");
  };

  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">EdooBingo</div>
        <div className="firma-name"></div>
      </div>
      <hr />
      <div className="center admin">
        <ul>
          <p className="title">Admin İşlemleri</p>
          <li>
            <NavLink to="/">
              <SpaceDashboardIcon className="icon" />
              <span>DashBoard</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <PeopleAltIcon className="icon" />
              <span>Kullanıcı İşlemleri</span>
              <KeyboardArrowRightIcon className="right" />
            </NavLink>

            <ul className="sub-menu kullanıcı">
              <li className="sub-item">
                <NavLink
                  className="sub-item-links"
                  to="/kullanici-islemleri/add"
                >
                  <AddCircleOutlineIcon className="icon" />
                  <span>Kullanıcı Ekle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/kullanici-islemleri/edit">
                  <EditIcon className="icon" />
                  <span>Kullanıcı Düzenle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/kullanici-islemleri/delete">
                  <DeleteIcon className="icon" />
                  <span>Kullanıcı Sil</span>
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="#">
              <SlowMotionVideoIcon className="icon" />
              <span>Video Eğitim</span>
              <KeyboardArrowRightIcon className="right" />
            </NavLink>

            <ul className="sub-menu video">
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/video/add">
                  <AddCircleOutlineIcon className="icon" />
                  <span>Video Ekle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/video/edit">
                  <EditIcon className="icon" />
                  <span>Video Düzenle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/video/delete">
                  <DeleteIcon className="icon" />
                  <span>Video Sil</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="#">
              <DynamicFormIcon className="icon" />
              <span>Anketler</span>
              <KeyboardArrowRightIcon className="right" />
            </NavLink>

            <ul className="sub-menu anket">
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/anket/add">
                  <AddCircleOutlineIcon className="icon" />
                  <span>Anket Ekle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/anket/edit">
                  <EditIcon className="icon" />
                  <span>Anket Düzenle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/anket/delete">
                  <DeleteIcon className="icon" />
                  <span>Anket Sil</span>
                </NavLink>
              </li>
            </ul>
          </li>

          <li>
            <NavLink to="/">
              <CelebrationIcon className="icon" />
              <span>Etkinlikler</span>
              <KeyboardArrowRightIcon className="right" />
            </NavLink>

            <ul className="sub-menu etkinlik">
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/etkinlik/add">
                  <AddCircleOutlineIcon className="icon" />
                  <span>Etkinlik Ekle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/etkinlik/edit">
                  <EditIcon className="icon" />
                  <span>Etkinlik Düzenle</span>
                </NavLink>
              </li>
              <li className="sub-item">
                <NavLink className="sub-item-links" to="/etkinlik/delete">
                  <DeleteIcon className="icon" />
                  <span>Etkinlik Sil</span>
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <hr />

      <div className="center">
        <ul>
          <p className="title">Kullanıcı İşlemleri</p>
          <li>
            <NavLink to="#">
              <MenuBookIcon className="icon" />
              <span>Eğitimler</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <LibraryBooksIcon className="icon" />
              <span>Kütüphanem</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <CelebrationIcon className="icon" />
              <span>Etkinlikler</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <DynamicFormIcon className="icon" />
              <span>Anketler</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <AccountBoxIcon className="icon" />
              <span>Profil Bilgileri</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <KeyIcon className="icon" />
              <span>Şifremi Değiştir</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="#">
              <PowerSettingsNewIcon className="icon" />
              <span>Oturumu Kapat</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar2;
