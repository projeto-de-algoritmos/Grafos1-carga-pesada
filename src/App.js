import { VectorMap } from '@south-paw/react-vector-maps';
import React, { useEffect, useState } from 'react';
import BrMap from './map/brMap';
import { Container, Map, MapContainer } from './styles';
import Solution from './graph/Solution';
import Sidebar from './components/SideBar';

const App = () => {

  const [focused, setFocused] = useState('None');
  const [output, setOutput] = useState('None');
  const [starting, setStarting] = useState('None');
  const [destiny, setDestiny] = useState('None');

  const layerProps = {
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onClick: ({ target }) => {
      const id = target.attributes.id.value;

      if (starting === 'None') {
        setStarting(id);
      } else if (destiny === 'None') {
        setDestiny(id);
      } else {
        setStarting(id);
        setDestiny('None');
      }
    }
  };

  useEffect(() => {
    if (starting && destiny) {
      try {
        const result = Solution.question(starting, destiny);
        setOutput(result);
      } catch {}
    }

  }, [starting, destiny]);

  return (
    <Container>
      <Sidebar
        starting={starting}
        setStarting={setStarting}
        destiny={destiny}
        setDestiny={setDestiny}
      />
      <MapContainer>
        <Map>
          <VectorMap {...BrMap} layerProps={layerProps} checkedLayers={[starting, destiny]} />
        </Map>
        <p>Starting: {starting}</p>
        <p>Destiny: {destiny}</p>
        <p>Output: {output}</p>
      </MapContainer>
    </Container >
  );
}

export default App;
