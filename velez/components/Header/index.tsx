import { useState } from "react";
import style from "./style.module.css";
import Image from "next/image";


const folder = '/img/'
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <div className={style.container}>
      <div className={style.containerMenu}>
      <div className={style.hamburguesaMenu}>
        <div
          className={`${style.hamburguesaIcono} ${isOpen && style.abierto}`}
          onClick={toggleMenu}
        >
          <div className={style.barra}></div>
          <div className={style.barra}></div>
          <div className={style.barra}></div>
        </div>
        {isOpen && (
            <div className={style.contentList}>

          <ul className={style.menu}>
            <li>MUJER</li>
            <li>HOMBRE</li>
            <li>OUTLET</li>
            <li>CRÉDITO</li>
          </ul>
            </div>
        )}
      </div>
        <div className={style.contentItem}>
          
            <li>MUJER</li>
            <li>HOMBRE</li>
            <li>OUTLET</li>
            <li>CRÉDITO</li>
        
        </div>
        <div>
            <p>VÉLEZ</p>
        </div>
        <div className={style.later}>
            <input type="search"  className={style.input} placeholder="¿QUÉ BUSCAS?"/>
            <Image src={folder + 'lupa.svg'} alt="user" width={50} height={50}/>
            <Image src={folder + 'user.svg'} alt="user" width={30} height={30}/>
        <Image src={folder + 'bolsa.svg'} alt="bolsa" width={30} height={30} />
        </div>
      </div>
    </div>
    </>
  );
};

export default Header;
