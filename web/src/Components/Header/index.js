import React from 'react';
import * as S from './styles'
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

function Header() {
  return (
    <S.Container>
      <S.LeftSide>
        <img src={logo} alt="Logo"/>
      </S.LeftSide>
      <S.RightSide>
        <a href="#">INICIO</a>
        <span className="dividir"/>
        <a href="#">NOVA TAREFA</a>
        <span className="dividir"/>
        <a href="#">SINCRONIZAR TAREFA</a>
        <span className="dividir"/>
        <a href="#" id="notification">
          <img src={bell} alt="Notificacão"/>
          <span>5</span>
        </a>
      </S.RightSide>
    </S.Container>
  )
}

export default Header;
