import React, { useEffect, useRef } from 'react';
import "./Modal6.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal6({ closeModal6 }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal6(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal6]);

  return (
    <div className='chor' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet' onClick={() => closeModal6(false)} />
      <div className='check145'>Аудит объекта онлайн</div>
      <div className='cel'>Целевая аудитория:</div>
      <div className='cvbn'><LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
      <div className='cwer'><LuDot /><b>Р</b>иелторы/агенты, заинтересованные в быстрой продаже объекта.</div>
      <div className='ssn'><LuDot /><b>Р</b>антье, желающие увеличить доход со своих объектов.</div>
      <div className='qxcv'>Что получит клиент?</div>
      <div className='polkj'><LuDot /><b>П</b>роведу комплексный анализ вашего объекта, локации и конкурентов: описание сильных сторон и зон </div>
      <div className='one'>роста.</div>
      <div className='two'><LuDot /><b>П</b>редложу варианты работы с зонами роста для их подачи с максимально выгодной стороны: мелкий </div>
      <div className='three'>ремонт, редизайн, перестановка мебели, работа с пространством.</div>
      <div className='four'><LuDot /><b>Р</b>асскажу что можно сделать со слабыми местами квартиры, чтобы они не стали поводом для торга.</div>
      <div className='five'><LuDot /><b>П</b>редложу бюджетные и быстрые способы увеличения визуальной привлекательности объекта (расскажу</div>
      <div className='brod'>как выделиться на фоне конкурентов).</div>
      <div className='brod2'><LuDot /><b>П</b>роведу анализ качества фото и объявления на площадках для аренды/продажи объекта.</div>
      <div className='brod3'><LuDot /><b>П</b>редложу вариант дальнейшего сотрудничества со мной при необходимости.</div>
      <div className='format178'>Формат взаимодействия:</div>
      <div className='online2314a'>Онлайн созвон в любом доступном мессенджере </div>
      <div className='brod5'>Для получения услуги, необходимо:</div>
      <div className='brod6'><LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
      <div className='brod7'><LuDot /><b>Ф</b>ото всех помещений объекта, желательно видео продолжительностью не более 2 мин.</div>
    </div>
  );
}

export default Modal6;