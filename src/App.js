import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import UserList from './components/UserList';

function App() {
  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
        <div className="col-12">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default App;
