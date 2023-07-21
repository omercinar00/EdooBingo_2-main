import "./EtkinlikDüzenle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const etkinlikDüzenle = () => {
  return (
    <div className="etkinlikDüzenle">
      <Sidebar />
      <div className="container">
        <Navbar />
        etkinlik düzenle
      </div>
    </div>
  );
};

export default etkinlikDüzenle;
