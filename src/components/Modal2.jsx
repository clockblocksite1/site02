import React, { useEffect, useRef } from 'react';
import "./Modal2.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal2({ closeModal2 }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal2(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal2]);

  return (
    <div className='chor2' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet' onClick={() => closeModal2(false)} />
      <div className='check0'>Договор аренды квартиры</div>
      <div className='cel12'>Целевая аудитория:</div>
      <div className='cvbn'> <LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
        
      <div className='qxcv22'> Что получит клиент?</div>
      <div className='shot'> <LuDot /><b>Ш</b>аблон договора аренды квартиры.</div>
      <div className='pivo'>Формат взаимодействия:</div>
      <div className='pivo2'>Онлайн</div>
      <div className='pivo3'>Для получения услуги, необходимо:</div>
      <div className='pivo4'> <LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
    </div>
  );
}

export default Modal2;