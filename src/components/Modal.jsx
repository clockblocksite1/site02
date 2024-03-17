import React, { useEffect, useRef } from 'react';
import "./Modal.css";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LuDot } from "react-icons/lu";

function Modal({ closeModal }) {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeModal]);

  return (
    <div className='chor6' ref={modalRef}>
      <IoIosCloseCircleOutline className='bet' onClick={() => closeModal(false)} />
      <div className='checkqwe'>Чек-лист по самостоятельной подготовке квартиры</div>
      <div className='cel'>Целевая аудитория:</div>
      <div className='cvbn'> <LuDot /><b>С</b>обственники жилья, самостоятельно сдающие свои объекты.</div>
      <div className='cwer'> <LuDot /><b>Р</b>иелторы/агенты, заинтересованные в быстрой продаже объекта.</div>
      <div className='ssn'><LuDot /><b>Р</b>антье, желающие увеличить доход со своих объектов.</div>
      <div className='qxcv'>Что получит клиент?</div>
      <div className='polkj'><LuDot /><b>П</b>одробно разберем как провести аудит квартиры для подготовки ее к аренде:</div>
      <div className='one55'>1. Расхламление;</div>
      <div className='two55'>2. Деперсонализация;</div>
      <div className='three55'>3. Проверка работоспособности техники, сантехники, электрики, запирающих устройств. Мелкий ремонт;</div>
      <div className='four55'>4. Проверка комплектации квартиры;</div>
      <div className='five55'>5. Клининг.</div>
      <div className='looc1'><LuDot /><b>Р</b>асскажу на что обратить внимание при подготовке квартиры к работе с арендаторами:</div>
      <div className='looc21'>6. Хоумстейджинг;</div>
      <div className='looc31'>7. Фотосессия;</div>
      <div className='looc41'>8. Специфика работы с площадками аренды квартир;  </div>
      <div className='looc51'>9. Выбор нанимателя;</div>
      <div className='looc61'>10.Заключение договора аренды.</div>
      <div className='format50'>Формат взаимодействия:</div>
      <div className='online55'>Онлайн</div>
      <div className='dla30'>Для получения услуги, необходимо:</div>
      <div className='svia30'><LuDot /><b>С</b>вязаться со мной в Telegram: @IvanovaIrinaYu или позвонить: +7-926-565-05-00.</div>
    </div>
  );
}

export default Modal;