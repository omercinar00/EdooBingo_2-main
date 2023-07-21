import "./VideoDüzenle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const videoDüzenle = () => {
  return (
    <div className="kullanıcıDüzenle">
      <Sidebar />
      <div className="container">
        <Navbar />
        VideoDüzenle
      </div>
    </div>
  );
};

export default videoDüzenle;
