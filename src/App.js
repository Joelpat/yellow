import logo from './logo.svg';
import './App.css';
import {useRef} from 'react';

export function White() {
const one = useRef();
const two = useRef();
const three = useRef();
const four = useRef();

const aOne = () => {one.current.style.display = 'block'};
const bOne = () => {one.current.style.display = 'none'};
const aTwo = () => {two.current.style.display = 'block'};
const bTwo = () => {two.current.style.display = 'none'};
const aThree = () => {three.current.style.display = 'block'}
const bThree = () => {three.current.style.display = 'none'};
const aFour = () => {four.current.style.display = 'block'};
const bFour = () => {four.current.style.display = 'none'};

  return (
    <div className='big'>
      <div className='tab'>
<button className='tablink' onMouseEnter={aOne} onMouseLeave={bOne}>Biofloc</button>
<p ref={one} className='detail' style={{display: 'none'}}>Biofloc technologyis defined as the use of aggregates of bacteria for purpose of improving water quality.</p>
      </div>
      <div className='tab'>
<button className='tablink' onMouseEnter={aTwo} onMouseLeave={bTwo}>Hydroponic</button>
<p ref={two} className='detail' style={{display: 'none'}}>Hydroponic is the technique of growing plants using a water-based nutrient rather than soil.</p>
      </div>
      <div className='tab'>
<button className='tablink' onMouseEnter={aThree} onMouseLeave={bThree}>Fungiculture</button>
<p ref={three} className='detail' style={{display: 'none'}}>Fungiculture is the cultivation and production of edible and medecinal mushrooms.</p>
      </div>
      <div className='tab'>
<button className='tablink' onMouseEnter={aFour} onMouseLeave={bFour}>Ecol-char</button>
<p ref={four} className='detail' style={{display: 'none'}}>Ecological charcoal is made from agricultural waste.</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <White />
    </div>
  );
}

export default App;
