import { useEffect, useReducer } from 'react';
import './App.css'
import forestImg from "./images/forest.jpg"


const items = [
  "Bread",
  "Cake",
  "Brigadeiro"
];

const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish
}));

function Main({dishes}) {
  return (
    <>
      <div>Welcome to the bakery!</div>
      <main>
        <img src={forestImg} height={200} alt='A forest painting' />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none"}}>{dish.title}</li>
          ))}
        </ul>
      </main>
    </>
  );
}

function Header({name, status, toggle}) {
  return (
    <header>
      <h1>{name}'s Bakery is {status ? 'Open' : 'Close'}</h1>
      <button onClick={toggle}>{status ? 'Close' : 'Open'} bakery</button>
    </header>
  );
}

function App() {

  //const [status, setStatus] = useState(true)
  const [status, toggle] = useReducer(
    (status) => !status,
    true
  );

  useEffect(() => {
    console.log(`The bakery is ${status ? "open" : "close"}`)
  }, []);

  return (
    <>
      <Header name="Uallas" status={status} toggle={toggle}/>

      <Main dishes={dishObjects}  />
      <div>
        We have the most delicious baking goods in town!
      </div>
    </>
    
  )
}

export default App
