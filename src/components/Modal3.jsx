import React, { useEffect, useRef } from 'react';
import "./Modal3.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal3({ closeModal3 }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal3(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal3]);

  return (
    <div className='chor3' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet1234' onClick={() => closeModal3(false)} />
      <div className='check1'>Экспресс аудит объявления на площадках</div>
      <div className='cel'>Целевая аудитория:</div>
      <div className='cvbn'><LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
      <div className='cwer'><LuDot /><b>Р</b>иелторы/агенты, заинтересованные в быстрой продаже объекта.</div>
      <div className='ssn'><LuDot /><b>Р</b>антье, желающие увеличить доход со своих объектов.</div>
      <div className='qxcv'>Что получит клиент?</div>
      <div className='polkj1'><LuDot /><b>П</b>роведу комплексный экспресс-анализ вашего объявления по аренде/продаже объекта.</div>
      <div className='one789'><LuDot /><b>Р</b>асскажу как можно усилить визуальную составляющую объявления.</div>
      <div className='ter12'><LuDot /><b>Р</b>асскажу о варинатах работы с текстом объявления: как привлечь внимание клиента, что написать, чтобы</div>
      <div className='three1096'>замотивировать его на просмотр.</div>
      <div className='four1'><LuDot /><b>П</b>редложу варианты увеличения просмотров объявления.</div>
      <div className='five1'><LuDot /><b>П</b>редложу варианты дальнейшего сотрудничества со мной в случае необходимости.</div>
      <div className='politech148'>Формат взаимодействия:</div>
      <div className='online2357'>Онлайн созвон в любом доступном мессенджере</div>
      <div className='dla234'>Для получения услуги, необходимо:</div>
      <div className='svia2356'><LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
      <div className='svia1023'><LuDot /><b>С</b>сылка на ваше объявление.</div>
    </div>
  );
}

export default Modal3;