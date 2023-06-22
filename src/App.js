import './App.css';
import Wrapper from './Wrapper';

function App() {
  return (
    <div>
      <Wrapper>
        <div style={{fontSize: '80px'}}>Child 1</div>
        <div style={{fontSize: '80px'}}>Child 2</div>
        <div style={{fontSize: '80px'}}>Child 3</div>
      </Wrapper>
    </div>
  );
}

export default App;
