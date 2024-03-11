import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heanding } from './components/Heanding';
import { Oscar } from './components/Oscar';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Counter } from './components/class/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { Box } from './components/context/Box';
import { UserContextProvider } from './components/state/UserContext';
import { User } from './components/state/User';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Profile } from './components/auth/Profile';
import { Private } from './components/auth/Private';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';

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
      <Counter message="The count value is" />
      <Private isLoggedIn={true} component={Profile} />
      {/*<List
        items={['Batman', 'Superman', 'Spederman']}
        onClick={(item) => console.log(item)}
      />
      <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />*/}
      <List
        items={[
          {
            id: 1,
            first: 'Mayk',
            last: 'Brics',
          },
          {
            id: 2,
            first: 'Molle',
            last: 'Flint',
          },
        ]}
        onClick={(item) => console.log(item)}
      />
      <RandomNumber value={10} isPositive />
    </div>
  );
}

export default App;
