import React from 'react';
import { ButtonContainer, ConfirmButton, Contianer, LocalContainer, Logo, LogoContainer, Text } from './styles';
import states from './states'
import logo from '../../assets/logo.png';

const Sidebar = ({ starting, setStarting, destiny, setDestiny, openModal}) => {
  return(
    <Contianer>
      <LogoContainer>
        <Logo src={logo} alt="Logo de um caminhão"/>
        <Text>Carga Pesada</Text>
      </LogoContainer>
      <LocalContainer>
        <p>Local de origem: </p>
        <select value={starting} onChange={(e) => setStarting(e.target.value)}>
          <option id='None' key='None'>Escola um estado</option>
          {states.map((state) => <option value={state.id} key={state.id}>{state.name}</option>)}
        </select>
        <p>Local de destino: </p>
        <select value={destiny} onChange={(e) => setDestiny(e.target.value)}>
          <option id='None' key='None'>Escola um estado</option>
          {states.map((state) => <option value={state.id} key={state.id}>{state.name}</option>)}
        </select>
      </LocalContainer>
      <ButtonContainer>
        <ConfirmButton onClick={() => openModal()}>Rotas</ConfirmButton>
      </ButtonContainer>
    </Contianer>
  );
}

export default Sidebar;