import React, {Component} from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import './Header.css';
import { HashLink as Link } from 'react-router-hash-link';
import star76Img from './../img/Star 1.png';

export default class Header extends Component {
  state= {
    isOpen: false
  };

  handleToggle = () => {
    this.setState({isOpen: !this.state.isOpen});
  };

  render() {
    return (
      <div className="Header">
        <div className='text'>
          <div className='product'>Ivanova</div>
          <div className='rog'>
            <IoHomeOutline />
            omestage
          </div>
        </div>
        <Link smooth to="#glavnaya" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="df" >
            Главная
          </div>
        </Link>
        <Link smooth to="#obomne" style={{ textDecoration: 'none', color: 'black' }}>
          <div className="bag">
            Обо мне
          </div>
        </Link>
        <Link smooth to="#keis" style={{ textDecoration: 'none', color: 'black' }}>
          <div className='rot'>
            Кейсы
          </div>
        </Link>
        <Link smooth to="#uslugi" style={{ textDecoration: 'none', color: 'black' }}>
          <div className='fou'>
            Услуги
          </div>
        </Link>
        <Link smooth to="#sviaz" style={{ textDecoration: 'none', color: 'black' }}>
          <div className='got'>
            Связь
          </div>
          
          <img src={star76Img} alt='' className='pkuas'/>
        </Link>
      </div>
    );
  }
} 