import "./AnketSil.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const anketSil = () => {
  return (
    <div className="anketSil">
      <Sidebar />
      <div className="container">
        <Navbar />
        anket Sil
      </div>
    </div>
  );
};

export default anketSil;
