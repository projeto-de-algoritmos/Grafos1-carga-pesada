import { VectorMap } from '@south-paw/react-vector-maps';
import React from 'react';
import BrMap from './brMap';
import { Map } from './styles';

function App() {
  const style = { margin: '1rem auto', width: '700px' };

  const [hovered, setHovered] = React.useState('None');
  const [focused, setFocused] = React.useState('None');
  const [clicked, setClicked] = React.useState('None');
  const [selected, setSelected] = React.useState([]);

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => {
    const id = target.attributes.id.value;

    // If selected includes the id already, remove it - otherwise add it
    selected.includes(id)
      ? setSelected(selected.filter(sid => sid !== id))
      : setSelected([...selected, id]);
  }
  };

  return (
    <div style={style}>
      <Map>
        <VectorMap {...BrMap} layerProps={layerProps} checkedLayers={selected}/>
      </Map>
      <hr />
      <p>Hovered: {hovered && <code>{hovered}</code>}</p>
      <p>Focused: {focused && <code>{focused}</code>}</p>
      <p>Clicked: {clicked && <code>{clicked}</code>}</p>
    </div>
  );
}

export default App;
