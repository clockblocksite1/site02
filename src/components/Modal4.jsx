import React, { useEffect, useRef } from 'react';
import "./Modal4.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal4({ closeModal4 }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal4(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal4]);

  return (
    <div className='chor4' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet' onClick={() => closeModal4(false)} />
      <div className='check145'>Аудит объекта оффлайн</div>
      <div className='cel'>Целевая аудитория:</div>
      <div className='cvbn'><LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
      <div className='cwer'><LuDot /><b>Р</b>иелторы/агенты, заинтересованные в быстрой продаже объекта.</div>
      <div className='ssn'><LuDot /><b>Р</b>антье, желающие увеличить доход со своих объектов.</div>
      <div className='qxcv'>Что получит клиент?</div>
      <div className='polkj'><LuDot /><b>П</b>роведу комплексный анализ вашего объекта, локации и конкурентов: описание сильных сторон и зон </div>
      <div className='one1000'>роста.</div>
      <div className='two1000'><LuDot /><b>П</b>редложу варианты работы с зонами роста для их подачи с максимально выгодной стороны: мелкий </div>
      <div className='three1000'>ремонт, редизайн, перестановка мебели, работа с пространством.</div>
      <div className='four1000'><LuDot /><b>Р</b>асскажу что можно сделать со слабыми местами квартиры, чтобы они не стали поводом для торга.</div>
      <div className='five1000'><LuDot /><b>П</b>редложу бюджетные и быстрые способы увеличения визуальной привлекательности объекта (расскажу</div>
      <div className='brod1000'>как выделиться на фоне конкурентов).</div>
      <div className='brod2000'><LuDot /><b>П</b>роведу анализ качества фото и объявления на площадках для аренды/продажи объекта.</div>
      <div className='brod3000'><LuDot /><b>П</b>редложу вариант дальнейшего сотрудничества со мной при необходимости.</div>
      <div className='brod4000'><LuDot /><b>В</b> подарок чек лист по самостоятельной подготовке квартиры к сдаче в аренду.</div>
      <div className='format1789'>Формат взаимодействия:</div>
      <div className='online23147'>Очно на вашем объекте </div>
      <div className='brod5000'>Для получения услуги, необходимо:</div>
      <div className='brod6000'><LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
    </div>
  );
}

export default Modal4;