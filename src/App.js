import './App.css';
import {  Switch, Route } from 'react-router-dom';
import {useState} from 'react';
import Landing from './components/pages/Landing';
import Home from './components/pages/Home';

import UpdateBlog from './components/forms/UpdateBlog';

function App() {
  const [user, setUser] = useState(null)

  return (
    <div className="container">
      <h1>Blog Frontend</h1>
   
      <Switch>
        <Route exact path='/' render={routerProps => <Landing {...routerProps} setUser={setUser}/> } />
        <Route path='/home' render={routerProps => <Home {...routerProps} user={user} setUser={setUser}/>} />
        <Route path='/update/:id' component={UpdateBlog}/>
      </Switch>
     
    </div>
  );
}

export default App;
