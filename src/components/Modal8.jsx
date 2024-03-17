import React, { useState, useEffect, useRef } from 'react';
import './Modal8.css';
import packImg from './../img/photo_5328207900977516994_y (2).jpg';
import pack2Img from './../img/photo_5328207900977517013_y (2).jpg';
import pack3Img from './../img/photo_5328207900977517000_y (1).jpg';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal8({ closeModal8 }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [packImg, pack2Img, pack3Img];
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal8(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal8]);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  return (
    <div className='okno' ref={modalRef}>
      <div>
        <IoIosCloseCircleOutline className='hot193' onClick={() => closeModal8(false)} />
        <img src={photos[currentPhotoIndex]} alt='' className='hot190' />
        <div className='hot47' onClick={handlePrevPhoto} style={{ borderRadius: '40px 0px 0px 40px' }}><HiOutlineArrowSmallLeft className='hot5' /></div>
        <div className='hot67' onClick={handleNextPhoto} style={{ borderRadius: '0 40px 40px 0' }}><HiOutlineArrowSmallRight className='hot71' /></div>
        <div className='hot89'>Наглядный пример, как обычная и скучная квартира </div>
        <div className='hot98'>трансформируется в современное и стильное жильё</div>
        <img src={photos[(currentPhotoIndex + 1) % photos.length]} alt='' className='hot13' />
        <img src={photos[(currentPhotoIndex + 2) % photos.length]} alt='' className='hot31' />
      </div>
    </div>
  );
}

export default Modal8;