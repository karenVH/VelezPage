import style from "./style.module.css";

const BannerVideo = () => {
  return (
    <div className={style.container}>
      <div className={style.contain}>
        <button>VER VIDEO COMPLETO</button>
        <div className={style.texts}>

        <p>PREVENTA EXCLUSIVA | </p> <p> QUIERO | </p>
        <p>ENTREGA A PARTIR DEL 3 DDE MAYO DEL 2023</p>
        </div>
      </div>
      <video autoPlay muted loop>
        <source src={"/video/video.mp4"} type="video/mp4" />
        {/* Tu navegador no admite la reproducción de videos. */}
      </video>
    </div>
  );
};

export default BannerVideo;
