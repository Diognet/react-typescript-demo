import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heanding } from './components/Heanding';
import { Oscar } from './components/Oscar';

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };
  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Demi',
      last: 'Mur',
    },
    {
      first: 'Michael',
      last: 'Jackson',
    },
  ];

  return (
    <div className="App">
      <Greet name="Morgan" isLoggedIn={false} />
      <Person name={personName} />
      <Status status="loading" />
      <Oscar>
        <Heanding> Oscar goes to Leonardo!</Heanding>
      </Oscar>
      <Heanding>Placeholder </Heanding>
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
