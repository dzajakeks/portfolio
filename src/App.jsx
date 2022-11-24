import { useRef } from 'react';
import './App.scss';
import IntroHeader from './components/IntroHeader';
import Main from './components/Main';

function App() {
  const blackRef = useRef();

  return (
    <div className="App">
      <IntroHeader blackRef={blackRef} />
      <Main blackRef={blackRef} />
      </div>
  )
}

export default App
