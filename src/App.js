import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Profile from './Pages/Profile';
import Discover from './Pages/Discover';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/discover">
            <Discover />
          </Route>
          <Route path="/post">
            <Discover />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
