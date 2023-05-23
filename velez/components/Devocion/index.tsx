import Image from "next/image";
import style from "./style.module.css";

const folder = '/img/';
const Devocion = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        <div className={style.ban}>
          <p>Una devoción de las abejas al sol</p>
        </div>
        <div className={style.conimage}>
          <Image src={folder + "boots.jpg"} alt="" width={200} height={300} />
          <Image src={folder + "imag2.jpg"} alt="" width={200} height={300} />
          <Image src={folder + "image1.jpg"} alt="" width={200} height={300} />
        </div>
      </div>
    </div>
  );
};

export default Devocion;
