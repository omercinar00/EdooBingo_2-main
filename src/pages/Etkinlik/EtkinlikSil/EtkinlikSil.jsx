import "./EtkinlikSil.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const etkinlikSil = () => {
  return (
    <div className="etkinlikSil">
      <Sidebar />
      <div className="container">
        <Navbar />
        etkinlik Sil
      </div>
    </div>
  );
};

export default etkinlikSil;
