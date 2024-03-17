import React, { useState, useEffect, useRef } from 'react';
import './Modal10.css';
import pack141Img from './../img/photo_5217664646893393538_y (1).jpg';
import pack125Img from './../img/photo_5217664646893393548_y (1).jpg';
import pack349Img from './../img/photo_5217664646893393530_y (1).jpg';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal10({ closeModal10 }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [pack141Img, pack125Img, pack349Img];
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal10(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal10]);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  return (
    <div className='okno1010' ref={modalRef}>
      <div>
        <IoIosCloseCircleOutline className='hot1cu' onClick={() => closeModal10(false)} />
        <img src={photos[currentPhotoIndex]} alt='' className='hotqw'/>
        <div className='hot49' onClick={handlePrevPhoto} style={{ borderRadius: '40px 0px 0px 40px' }}><HiOutlineArrowSmallLeft className='hot52'/></div>
        <div className='hot69' onClick={handleNextPhoto} style={{ borderRadius: '0 40px 40px 0' }}><HiOutlineArrowSmallRight className='hot72'/></div>
        <div className='hot800'>Наглядный пример, как обычная и скучная квартира </div>
        <div className='hot900'>трансформируется в современное и стильное жильё</div>
        <img src={photos[(currentPhotoIndex + 1) % photos.length]} alt='' className='hot201qw'/>
        <img src={photos[(currentPhotoIndex + 2) % photos.length]} alt='' className='hot301qw'/>
      </div>
    </div>
  );
}

export default Modal10;