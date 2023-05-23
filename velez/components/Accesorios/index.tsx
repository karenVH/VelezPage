import Image from "next/image";
import Marroqui from "../Marroqui";
import style from "./style.module.css";

const folder = '/img/'
const Accesorios = () => {
  const imagesPerPage = 2;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div>
          <div className={style.contentText}>
       
            <h2>ACCESORIOS</h2>
            <p>(creados mano a mano)</p>
           
            <p>Artesanalidad Colombiana</p>
          </div>
          <Marroqui totalPages={imagesPerPage} />
        </div>
        <div className={style.contentImg}>
          <Image src={folder + 'accesorio.jpg'} alt="" width={100} height={100}/>
        </div>
      </div>
    </div>
  );
};

export default Accesorios;
