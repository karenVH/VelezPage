import Image from "next/image";
import Marroqui from "../Marroqui";
import style from "./style.module.css";

const folder = '/img/'
const Bolsos = () => {
  const imagesPerPage = 2;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentImg}>
          <Image src={folder + 'bolsos.jpg'} alt="" width={100} height={100}/>
        </div>
        <div>
          <div className={style.contentText}>
            <hr />
            <h2>BOLSOS</h2>
            <p>(creados mano a mano)</p>
            <hr />
            <p>Artesanalidad Colombiana</p>
          </div>
          <Marroqui totalPages={imagesPerPage} />
        </div>
      </div>
    </div>
  );
};

export default Bolsos;
