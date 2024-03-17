import React, { useEffect, useRef } from 'react';
import "./Modal5.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal5({ closeModal5 }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal5(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal5]);

  return (
    <div className='chor5' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet109' onClick={() => closeModal5(false)} />
      <div className='check1111'>Аудит объявления на площадках</div>
      <div className='cel20'>Целевая аудитория:</div>
      <div className='cvbn20'><LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
      <div className='cwer20'><LuDot /><b>Р</b>иелторы/агенты, заинтересованные в быстрой продаже объекта.</div>
      <div className='ssn50'><LuDot /><b>Р</b>антье, желающие увеличить доход со своих объектов.</div>
      <div className='qxcv50'>Что получит клиент?</div>
      <div className='polkj2020'><LuDot />Проведу комплексный экспресс-анализ вашего объявления по аренде/продаже объекта.</div>
      <div className='one2025'><LuDot />Расскажу как можно усилить визуальную привлекательность объявления.</div>
      <div className='two2025'><LuDot />Предложу варинаты работы с текстом объявления: как привлечь внимание клиента, что написать, чтобы</div>
      <div className='three2025'>замотивировать его на просмотр.</div>
      <div className='four2025'><LuDot />Предложу варианты увеличения просмотров объявления.</div>
      <div className='five2025'><LuDot />Предложу варианты дальнейшего сотрудничества со мной в случае необходимости.</div>
      <div className='politech2025'>Формат взаимодействия:</div>
      <div className='online2025'>Онлайн созвон в любом доступном мессенджере</div>
      <div className='dla2025'>Для получения услуги, необходимо:</div>
      <div className='svia2025'><LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
      <div className='svia2026'><LuDot /><b>С</b>сылка на ваше объявление.</div>
    </div>
  );
}

export default Modal5;