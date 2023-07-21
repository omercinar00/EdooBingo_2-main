import "./KullanıcıDüzenle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const kullanıcıdüzenle = () => {
  return (
    <div className="kullanıcıDüzenle">
      <Sidebar />
      <div className="container">
        <Navbar />
        Kullanıcı Düzenle
      </div>
    </div>
  );
};

export default kullanıcıdüzenle;
