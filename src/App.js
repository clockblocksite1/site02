import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { BiDownArrowCircle } from "react-icons/bi";
import photoImg from "./img/Frame 48035.png";
import comImg from "./img/photo_5328207900977516993_y (2).jpg";
import cimImg from "./img/photo_5328207900977516950_y (2).jpg";
import telImg from "./img/mdi_telephone.png"
import { FaWhatsapp } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Modal from './components/Modal';
import { useState } from 'react';
import Modal2 from './components/Modal2';
import Modal3 from './components/Modal3';
import Modal4 from './components/Modal4';
import Modal5 from './components/Modal5';
import Modal6 from './components/Modal6';
import arrowImg from './img/Arrow 3.png';
import starImg from './img/Star 1.png';
import upImg from './img/up13.png';
import downImg from './img/Frame 48033.png';
import Modal8 from './components/Modal8';
import comweImg from './img/photo_5242660282814287104_y (2).jpg';
import comwiImg from './img/photo_5242660282814287106_y (1).jpg';
import lcomImg from './img/photo_5215671004678968823_y (1).jpg';
import gcomImg from './img/photo_5217664646893393543_y (1).jpg';
import Modal9 from './components/Modal9';
import Modal10 from './components/Modal10';
import up13Img from './img/up13.png';
import groupImg from './img/Group.png'
function App() {
  const [ModalOpen,setModalOpen]=useState(false);
  const [ModalOpen2,setModalOpen2]=useState(false);
  const [ModalOpen3,setModalOpen3]=useState(false);
  const [ModalOpen4,setModalOpen4]=useState(false);
  const [ModalOpen5,setModalOpen5]=useState(false);
  const [ModalOpen6,setModalOpen6]=useState(false);
  const [ModalOpen8,setModalOpen8]=useState(false);
  const [ModalOpen9,setModalOpen9]=useState(false);
  const [ModalOpen10,setModalOpen10]=useState(false);
  const handleCopy = (event) => {
  
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  const  SethandleCopy = (event) => {
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  const canhandleCopy = (event) => {
  
    const textarea = document.createElement('textarea');
    textarea.value = event.target.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  };
  const [showAll, setShowAll] = useState(true);
  const [showApartments, setShowApartments] = useState(true);
  const [showHouses, setShowHouses] = useState(true);
  const [selectedBlock, setSelectedBlock] = useState('all');

  const handleShowAll = () => {
    setShowAll(true);
    setShowApartments(true);
    setShowHouses(true);
    setSelectedBlock('all');
  };

  const handleShowApartments = () => {
    setShowAll(false);
    setShowApartments(true);
    setShowHouses(false);
    setSelectedBlock('apartments');
  };

  const handleShowHouses = () => {
    setShowAll(false);
    setShowApartments(false);
    setShowHouses(true);
    setSelectedBlock('houses');
  };
  return (
    
    <div className="App">
       <Router>
      <Header/>
     
      <div className='poc'>
        <div className='bg'>
        <div className='houm'>
          Хоум 
          </div>
          <img src={starImg} alt='' className='star'/>
          <div className='j' id='glavnaya'>Стейджинг</div>
        </div>
        
        <div className='re'>
          <div className='bv'>Из “нормальной” квартиры превращу в идеальную</div>
          <div className='nt'>перед продажей или сдачей в аренду!</div>
        </div>
      </div>
      <button className='hs' onClick={handleScrollDown}>Узнать больше <BiDownArrowCircle className='b'/></button>
      <div className='ew'>
      <img src={upImg} alt='' className='upig'/>
      </div>
      <div className='wt'>
        <img src={downImg} alt='' className='down'/>
      </div>
      <div className='pro'>
        
        <div className='ob' id='obomne'>Обо</div>
        <div className='mne'>мне</div>
       
        <div className='photo'>
          <img src={photoImg} alt='' className='wet'/>
          <div className='zot'>
          <div className='cae'>Ирина Иванова</div>
            <div className='ert'>Хоумстейджер</div>
          </div>
        </div>
        <div className='sot'>
          <div className='ren'>Привет! Меня зовут Ирина Иванова и я  </div>
          <div className='hoert'>практикующий хоумстейджер</div>
          <div className='clen'>Я помогу изменить вашу недвижимость в лучшую сторону,</div>
          <div className='qac'>раскрою и подчеркну сильные </div>
          <div className='dfg'> стороны вашей квартиры, а также ликвидирую все недостатки!</div>
          <div className='kol'></div>
        </div>
        <div className='i'>Я имею</div>
        <div className='dva'>20+</div>
        <div className='print'>- - - - - - - - - - - - - - - -</div>
        <div className='wda'>Успешно выполненных работ</div>
        <div className='wsv'>и это количество будет только расти! </div>
        
        <div className='go'>Почему</div>
        <div className='cot'>я</div>
        <div className='ocl'>?</div>
        <div className='gds'>Вот несколько плюсов работы со мной</div>
        <div className='block'>
          <div className='asdf'>Повышение</div>
          <div className='bnm'>привлекательности</div>
          <div className='cxq'>Ваш объект станет лакомым кусочком для потенциальных покупателей или арендаторов. Жильё преобразится и будет радовать глаз!  </div>
        </div>
        <div className='block2'>
          <div className='asdf'>Экономия вашего</div>
          <div className='bnm2'>времени</div>
          <div className='cxq'>Я избавлю вас от необходимости тратить время на подбор необходимых материалов с гарантией качества.</div>
        </div>
        <div className='block3'>
          <div className='asdf'>Качественные фото</div>
          <div className='bnm3'>объекта</div>
          <div className='cxq'>По окончании работы вы получите галерею снимков объекта недвижимости, которые будут выделять его среди конкурентов.</div>
        </div>
      </div>
      <div className='roma'  id='keis'>Кейсы</div>
      
      <div className='pooc'>
        <div className={`root ${selectedBlock === 'all' ? 'selected' : ''}`} onClick={handleShowAll}>Все</div>
        <div className={`wsx ${selectedBlock === 'houses' ? 'selected' : ''}`} onClick={handleShowHouses}>Квартиры</div>
        <div className={`wer ${selectedBlock === 'apartments' ? 'selected' : ''}`} onClick={handleShowApartments}>Дома</div>
      </div>

      {(showAll || showHouses) && (
        <div className='wero'>
          <div className='col'>
            <img src={comImg} alt='' className='cotew' style={{ borderRadius: '0 20px 20px 0' }} />
            <div className='line-between'></div>
            <img src={cimImg} alt='' className='drok' style={{ borderRadius: '20px 0px 0px 20px' }} />
          </div>
          <div className='wrt'>
            <div className='log'>Кейс №1</div>
            <div className='hart'>#Квартира</div>
            <div className='btn' onClick={() => setModalOpen8(true)}>Подробнее</div>
          </div>
        </div>
      )}

      {(showAll || showApartments) && (
        <div className='rtu'>
          <div className='col'>
            <img src={comwiImg} style={{ borderRadius: '0 20px 20px 0' }} alt='' className='cotew' />
            <div className='line-between'></div>
            <img src={comweImg} style={{ borderRadius: '20px 0px 0px 20px' }} alt='' className='drok' />
          </div>
          <div className='wrt'>
            <div className='log'>Кейс №2</div>
            <div className='hart'>#Дом</div>
            <div className='btn' onClick={() => setModalOpen9(true)}>Подробнее</div>
          </div>
        </div>
      )}

      {showHouses && (
        <div className='bagi'>
          <div className='col'>
            <img src={gcomImg} style={{ borderRadius: '0 20px 20px 0' }} alt='' className='cotew' />
            <div className='line-between'></div>
            <img src={lcomImg} style={{ borderRadius: '20px 0px 0px 20px' }} alt='' className='drok' />
          </div>
          <div className='wrt'>
            <div className='log'>Кейс №3</div>
            <div className='hart'>#Квартира</div>
            <tr />
            <div className='btn' onClick={() => setModalOpen10(true)}>Подробнее</div>
          </div>
        </div>
      )}
      <div className='weryu' id='uslugi'>Услуги</div>
      <div className='mot'>
        <div className='rogot'>
          <div className='text'>Аудит объекта</div>
          <div className='text2'>Онлайн</div>
          <div className='qerdsds'>Срок выполнения:</div>
          <div className='profgh'>1-3 рабочих дня</div>
          <div className='stoit'>Cтоимость:</div>
          <div className='trist'>3000₽</div>
          <div className='cored'>----------</div>
        </div>
      </div>
      <button className='podrob' onClick={()=>setModalOpen6(true)}>Подробнее</button>
      <div className='kolou'></div>
      <div className='kolou2'></div>
      <div className='kolou3'></div>
      <div className='kolou4'></div>
      <div className='kolou5'></div>
      <div className='kolou6'></div>
      <div className='kolou7'></div>
      <div className='kolou8'></div>
      <div className='kolou8r'></div>
      <div className='kolou8e'></div>
      <div className='mot'>
        <div className='rogot2'>
          <div className='text'>Аудит объекта</div>
          <div className='text2'>Оффлайн</div>
          <div className='qerdsds'>Срок выполнения:</div>
          <div className='profgh'>2-4 рабочих дня</div>
          <div className='stoit'>Cтоимость:</div>
          <div className='trist'>5000₽</div>
          <div className='cored'>----------</div>
        </div>
      </div>
      <button className='podrob2' onClick={()=>setModalOpen4(true)}>Подробнее</button>
      <div className='kolou1'></div>
      <div className='kolou21'></div>
      <div className='kolou31'></div>
      <div className='kolou41'></div>
      <div className='kolou51'></div>
      <div className='kolou61'></div>
      <div className='kolou71'></div>
      <div className='kolou81'></div>
      <div className='kolou81r'></div>
      <div className='kolou81e'></div>
      <div className='mot'>
        <div className='rogot3'>
          <div className='text'>Аудит объекта</div>
          <div className='text219'>На онлайн площадках</div>
          <div className='qerdsds'>Срок выполнения:</div>
          <div className='profgh'>1-2 рабочих дня</div>
          <div className='stoit'>Cтоимость:</div>
          <div className='trist'>1500₽</div>
          <div className='cored'>----------</div>
        </div>
      </div>
      <button className='podrob3' onClick={()=>setModalOpen5(true)} >Подробнее</button>
      <div className='kolou22'></div>
      <div className='kolou23'></div>
      <div className='kolou33'></div>
      <div className='kolou43'></div>
      <div className='kolou53'></div>
      <div className='kolou63'></div>
      <div className='kolou73'></div>
      <div className='kolou83'></div>
      <div className='kolou83r'></div>
      <div className='kolou83e'></div>
      <div className='mot'>
        <div className='rogot4'>
          <div className='text23'>Экспресс аудит объекта</div>
          <div className='dronr'>На онлайн площадках</div>
          <div className='rock'>Срок выполнения:</div>
          <div className='deni'>1 рабочий день</div>
          <div className='denik'>Cтоимость:</div>
          <div className='free'>Бесплатно</div>
          <div className='tire'>-----------------</div>
        </div>
      </div>
      <button className='pringle' onClick={()=>setModalOpen3(true)}>Подробнее</button>
      <div className='kolou101'></div>
      <div className='kolou102'></div>
      <div className='kolou103'></div>
      <div className='kolou104'></div>
      <div className='kolou105'></div>
      <div className='kolou106'></div>
      <div className='kolou107'></div>
      <div className='kolou108'></div>
      <div className='kolou108r'></div>
      <div className='kolou108e'></div>
     
      <div className='mot'>
        <div className='rogot23'>
          <div className='text233'>Договор аренды</div>
          <div className='dronr234'>Квартиры</div>
          <div className='rock23'>Срок выполнения:</div>
          <div className='deni32'>1 рабочий день</div>
          <div className='denik233'>Cтоимость:</div>
          <div className='free323'>500₽</div>
          <div className='tire3324'>--------</div>
        </div>
      </div>
      <button className='pringle3242' onClick={()=>setModalOpen2(true)}>Подробнее</button>
      <div className='kolou1011'></div>
      <div className='kolou1021'></div>
      <div className='kolou1031'></div>
      <div className='kolou1041'></div>
      <div className='kolou1051'></div>
      <div className='kolou1061'></div>
      <div className='kolou1071'></div>
      <div className='kolou1081'></div>
      <div className='kolou1081r'></div>
      <div className='kolou1081e'></div>
      <div className='mot'>
        <div className='rogot232'>
          <div className='text23334'>Чек лист на подготовку</div>
          <div className='dronr23'>Квартиры самостоятельно</div>
          <div className='rock23'>Срок выполнения:</div>
          <div className='deni32'>1 рабочий день</div>
          <div className='denik233'>Cтоимость:</div>
          <div className='free323'>1000₽</div>
          <div className='tire3324'>--------</div>
        </div>
      </div>
      <button className='pringle3242134'onClick={()=>setModalOpen(true)}>Подробнее</button>
      <div className='kolou101123'></div>
      <div className='kolou102123'></div>
      <div className='kolou103123'></div>
      <div className='kolou104123'></div>
      <div className='kolou105123'></div>
      <div className='kolou106123'></div>
      <div className='kolou107123'></div>
      <div className='kolou108123'></div>
      <div className='kolou108123r'></div>
      <div className='kolou108123e'></div>
      <div className='pocol' id='sviaz'>Связь </div>
      <div className='telega'>
      <img src={groupImg} className='telegr'/>
      </div>
      <div className='ivanova '  onClick={handleCopy}>@IvanovaIrinaYu</div>
      
      <div className='wraping'>
      <img src={telImg} className='telephone'/>
      </div>
      <div className='nambelou'  onClick={SethandleCopy}>+7-926-565-05-00</div>
      <div className='graving'>
      <FaWhatsapp className='watsap'/>
      </div>
      <div className='salor' onClick={canhandleCopy}>+7-926-565-05-00</div>
      <div className='random'>Или в другом, удобном для вас мессенджере</div>
      <div className='bog'>
        <div className='rodas'>Ivanova</div>
        <div className='homed'>
        <IoHomeOutline /> omestage
        </div>
        <div className='copy'>Copyright</div>
        <div className='all'>All rights reserved</div>
        <div className='didsa'>Designed by dev.Enzo</div>
        <div className='gorod'>По любым вопросам: +7-926-565-05-00</div>
      </div>
      {ModalOpen &&<Modal closeModal={setModalOpen}/>}
      {ModalOpen2 &&<Modal2 closeModal2={setModalOpen2}/>}
      {ModalOpen3 &&<Modal3 closeModal3={setModalOpen3}/>}
      {ModalOpen4 &&<Modal4 closeModal4={setModalOpen4}/>}
      {ModalOpen5 &&<Modal5 closeModal5={setModalOpen5}/>}
      {ModalOpen6 &&<Modal6 closeModal6={setModalOpen6}/>}
      {ModalOpen8 &&<Modal8 closeModal8={setModalOpen8}/>}
      {ModalOpen9 &&<Modal9 closeModal9={setModalOpen9}/>}
      {ModalOpen10 &&<Modal10 closeModal10={setModalOpen10}/>}
      <div>
        <img src={arrowImg} alt='' className='arrow'/>
      </div>
      <div className='opi'>
    <img src={up13Img} alt='' className='up13'/>
      </div>
      </Router>
    </div>
    

  );
}

export default App; 