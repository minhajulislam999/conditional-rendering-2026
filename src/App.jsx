import './App.css'
import ConditionalRendering from './components/condetional-rendering/ConditionalRendering'
import List from './List';
import RenderingList from './renderingList/RenderingList';
import Sleeping from './sleeping/Sleeping';
// import conditionalRendering from './components/condetional-rendering/ConditionalRendering'

function App() {

  const people = [
  'Creola Katherine Johnson: mathematician',
  'Mario José Molina-Pasquel Henríquez: chemist',
  'Mohammad Abdus Salam: physicist',
  'Percy Lavon Julian: chemist',
  'Subrahmanyan Chandrasekhar: astrophysicist'
];


  // const amarGhum = true;

  return (
    <>
    <RenderingList abo = {people} />
      
      <h1>conditional rendering</h1>
      {/* <Sleeping isSleeping={amarGhum} /> */}
     {/* <ConditionalRendering isLoggedin={true} /> */}


<List />

    </>
  )
}

export default App
