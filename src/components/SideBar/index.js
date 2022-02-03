import React from 'react';
import { Contianer, LocalContainer, Logo, LogoContainer, Text } from './styles';
import logo from '../../assets/logo.png';

const Sidebar = () => {
  return(
    <Contianer>
      <LogoContainer>
        <Logo src={logo} alt="Logo de um caminhão"/>
        <Text>Carga Pesada</Text>
      </LogoContainer>
      <LocalContainer>
        <p>Local de origem: </p>
        <select>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
        </select>
        <p>Local de destino: </p>
        <select>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
          <option>Estado</option>
        </select>
      </LocalContainer>
    </Contianer>
  );
}

export default Sidebar;