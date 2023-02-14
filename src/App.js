import './App.css';
import Profile from './components/Profile';

const App = () => {
  const user = {
    firstName: 'Scott',
    lastName: 'Sutherland',
    favColor: 'blue',
  }

  const userTwo = {
    firstName: 'Kyle',
    lastName: 'Baugh',
    favColor: 'black'
  }


  return (
    <div>
      <Profile info={user} isMe={true} string={'this is a string'} />
      <Profile info={userTwo} isMe={false}/>
    </div>
  );
}

export default App;
