import Image from "next/image";
import Marroqui from ".";
import style from "./stye.module.css";

const folder = "/img/";
const Flex = () => {
  const imagesPerPage = 2;
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.contentImg}>
          <Image src={folder + 'bolsoImg.jpg'} alt="" width={100} height={100}/>
        </div>
        <div>
            <div className={style.contentText}>
                <hr />
                <h2>MARROQUINERIA</h2>
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

export default Flex;
