import "./VideoSil.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const videoSil = () => {
  return (
    <div className="kullanıcıSil">
      <Sidebar />
      <div className="container">
        <Navbar />
        Video Sil
      </div>
    </div>
  );
};

export default videoSil;
