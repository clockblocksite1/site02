import React, { useState, useEffect, useRef } from 'react';
import './Modal9.css';
import pack14Img from './../img/photo_5357458702732483684_y.jpg';
import pack12Img from './../img/photo_5357458702732483685_y.jpg';
import pack34Img from './../img/photo_5357458702732483681_y.jpg';
import { HiOutlineArrowSmallLeft } from "react-icons/hi2";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import { IoIosCloseCircleOutline } from "react-icons/io";

function Modal9({ closeModal9 }) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = [pack14Img, pack12Img, pack34Img];
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal9(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal9]);

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };

  const handleNextPhoto = () => {
    setCurrentPhotoIndex(prevIndex => (prevIndex + 1) % photos.length);
  };

  return (
    <div className='okno12' ref={modalRef}>
      <div>
        <IoIosCloseCircleOutline className='hot1uy' onClick={() => closeModal9(false)} />
        <img src={photos[currentPhotoIndex]} alt='' className='hot99'/>
        <div className='hot44' onClick={handlePrevPhoto} style={{ borderRadius: '40px 0px 0px 40px' }}><HiOutlineArrowSmallLeft className='hot53'/></div>
        <div className='hot64' onClick={handleNextPhoto} style={{ borderRadius: '0 40px 40px 0' }}><HiOutlineArrowSmallRight className='hot73'/></div>
        <div className='hot810'>Наглядный пример, как обычная и скучная квартира </div>
        <div className='hot910'>трансформируется в современное и стильное жильё</div>
        <img src={photos[(currentPhotoIndex + 1) % photos.length]} alt='' className='hot2011'/>
        <img src={photos[(currentPhotoIndex + 2) % photos.length]} alt='' className='hot3011'/>
      </div>
    </div>
  );
}

export default Modal9;