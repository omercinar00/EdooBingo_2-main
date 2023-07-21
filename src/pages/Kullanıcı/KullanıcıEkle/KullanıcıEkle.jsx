import "./KullanıcıEkle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const kullanıcıekle = () => {
  return (
    <div className="kullanıcıEkle">
      <Sidebar />
      <div className="container">
        <Navbar />
        Kullanıcı Ekle
      </div>
    </div>
  );
};

export default kullanıcıekle;
