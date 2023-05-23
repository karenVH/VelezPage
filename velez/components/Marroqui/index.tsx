import { GetStaticProps, NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import style from './stye.module.css'

const itemsPerPage = 6;
const totalImages = 12;

const folder = '/img/'
const Marroqui: NextPage<{ totalPages: number }> = ({ totalPages }) => {
    
    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const displayedImages = Array.from(Array(totalImages).keys()).slice(startIndex, endIndex);
  
    const goToPreviousPage = () => {
      if (currentPage > 1) {
        setCurrentPage((prevPage) => prevPage - 1);
      }
    };
  
    const goToNextPage = () => {
      if (currentPage < totalPages) {
        setCurrentPage((prevPage) => prevPage + 1);
      }
    };
  
    return (
        <div className={style.containerMarroqui}>
          <button onClick={goToPreviousPage} disabled={currentPage === 1} className={style.btns}>
            {'<'}
          </button>
        <div  className={style.containerImages}>
          {displayedImages.map((index) => (
            <div key={index}>
              <Image
                src={folder + 'cartera.jpg'}
                alt={`Image ${index + 1}`}
                width={180}
                height={250}
              />
              <p>Porta chequera vesubio de...</p>
              <p>$309.000</p>
            </div>
          ))}
        </div>
          <button onClick={goToNextPage} disabled={currentPage === totalPages} className={style.btns}>
            {'>'}
          </button>
        <div>
        </div>
      </div>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const totalPages = Math.ceil(totalImages / itemsPerPage);
  
    return {
      props: {
        totalPages,
      },
    };
  };
  

export default  Marroqui;