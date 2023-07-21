import "./AnketEkle.scss"
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const anketEkle = () => {
  return (
    <div className="anketEkle">
      <Sidebar />
      <div className="container">
        <Navbar />
        Anket ETkle
      </div>
    </div>
  );
};

export default anketEkle;
