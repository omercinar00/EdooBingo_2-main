import "./KullanıcıSil.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const kullanıcısil = () => {
  return (
    <div className="kullanıcıSil">
      <Sidebar />
      <div className="container">
        <Navbar />
        Kullanıcı Sil
      </div>
    </div>
  );
};

export default kullanıcısil;
