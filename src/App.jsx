import './App.css';
import Profile from './components/Profile';

const App = () => {
  const user = {
    firstName: 'Scott',
    lastName: 'Sutherland'
  }

  const userTwo = {
    firstName: 'Kyle',
    lastName: 'Baugh'
  }


  return (
    <div>
      <Profile info={user} />
      <Profile info={userTwo} />
    </div>
  );
}

export default App;
