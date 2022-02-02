import { VectorMap } from '@south-paw/react-vector-maps';
import React from 'react';
import BrMap from './brMap';
import { Map } from './styles';
import Solution from './graph/Solution';

function App() {
  const solution = new Solution()
  const style = { margin: '1rem auto', width: '700px' };

  const [hovered, setHovered] = React.useState('None');
  const [focused, setFocused] = React.useState('None');
  const [clicked, setClicked] = React.useState('None');
  const [selected, setSelected] = React.useState([]);
  const [output, setOutput] = React.useState('None');

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => {
    const id = target.attributes.id.value;
    console.log('output: ', output)

    // If selected includes the id already, remove it - otherwise add it
    selected.includes(id)
      ? setSelected(selected.filter(sid => sid !== id))
      : setSelected([...selected, id]);

    // amapá(AP), distrito federal(DF) are not connected to any of the 10 biggest BRs
    console.log("id", id)
    if (id === 'AP' || id === 'DF') {
      setSelected([])
      setOutput('This state is not connected to any of the biggest BRs')
      return
    }

    // If another element is already selected, calculate solution
    if (selected.length !== 0) {
      setOutput(Solution.question(selected[0], id))
      setSelected([])
    }

    console.log(id)
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
      <p>Output: {output}</p>
    </div>
  );
}

export default App;
