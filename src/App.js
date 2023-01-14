import logo from './logo.svg';
import './App.css';
import TitleChanger from './Components/TitleChanger';
import Counter from './Components/Counter';
import './Css/Margin.css'
import LearnInput from './Components/LearnInput';

let MapelSatu = 'Belajar React !',
    MapelDua = 'Counter',
    MapelTiga = 'Belajar Input'
  ;

function App() {
  return (
    <div>
      <TitleChanger className='MarginClass' data={MapelSatu} />
      <Counter className='MarginClass' data={MapelDua} />
      <LearnInput className='MarginClass' data={MapelTiga} />
    </div>
  );
}

export default App;
