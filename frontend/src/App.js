import { Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './pages/Login.jsx';
import Album from './pages/Album.jsx';
import Favorites from './pages/Favorites.jsx';
import Profile from './pages/Profile.jsx';
import Search from './pages/Search.jsx';
import EditProfile from './pages/EditProfile.jsx';
import NotFound from './pages/NotFound.jsx';
import Register from './pages/Register.jsx';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/album/:albumId" component={Album} />
      <Route exact path="/favorites" component={Favorites} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/search" component={Search} />
      <Route exact path="/profile/edit" component={EditProfile} />
      <Route path="/:notFound" component={NotFound} />
    </Switch>
  );
}

export default App;
