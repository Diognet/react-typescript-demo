import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heanding } from './components/Heanding';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/state/UserContext';
import { User } from './components/state/User';
import { ThemeContextProvider } from './components/context/ThemeContext';

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
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
      <Oscar>
        <Heanding> Oscar goes to Leonardo!</Heanding>
      </Oscar>
      <Button
        handelClick={(event, id) => {
          console.log('Button clicked!', event, id);
        }}
      />
      <Input value="" handelChange={(event) => console.log(event)} />
      <Heanding>Placeholder </Heanding>
      <PersonList names={nameList} />
      <LoggedIn />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
