import "./VideoEkle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const videoEkle = () => {
  return (
    <div className="videoEkle">
      <Sidebar />
      <div className="container">
        <Navbar />
        Video Ekle
      </div>
    </div>
  );
};

export default videoEkle;
