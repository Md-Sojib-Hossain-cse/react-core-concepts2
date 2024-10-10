import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';

function App() {
  function handleOnClick(){
    alert("Button Clicked");
  }
  function handleOnClick2(num){
    alert("Button Clicked " + num);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <button onClick={handleOnClick}>Click Me</button>
      <button onClick={() => handleOnClick2(4)}>Click Me 2</button>
      <Users></Users>
      <Friends></Friends>
      <Team></Team>
      <Counter></Counter>
    </>
  )
}

export default App
