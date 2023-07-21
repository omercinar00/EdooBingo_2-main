import "./EtkinlikEkle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const etkinlikEkle = () => {
  return (
    <div className="etkinlikEkle">
      <Sidebar />
      <div className="container">
        <Navbar />
        etkinlik Ekle
      </div>
    </div>
  );
};

export default etkinlikEkle;
