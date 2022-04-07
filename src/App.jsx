import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

//componentes
import UserList from './components/UserList';
import Profile from './components/Profile';

//context
import UserState from './context/user/UserState';

function App() {
  return (
    <UserState>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-7">
            <UserList />
          </div>
          <div className="col-md-5">
            <Profile></Profile>
          </div>
        </div>
      </div>
    </UserState>
  );
}

export default App;
