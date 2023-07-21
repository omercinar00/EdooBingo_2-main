import "./AnketDüzenle.scss";
import Sidebar from "../../../components/sidebar/Sidebar";
import Navbar from "../../../components/navbar/Navbar";

const anketDüzenle = () => {
  return (
    <div className="anketDüzenle">
      <Sidebar />
      <div className="container">
        <Navbar />
        AnketDüzenle
      </div>
    </div>
  );
};

export default anketDüzenle;
