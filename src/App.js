import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import './App.scss';
import HomePage from './pages/HomePage';
import PostsContextProvider from './contexts/PostsContext';

function App(props) {
  return (
    <PostsContextProvider>
      <BrowserRouter>
        <MainNavbar />
        <main>
          <Switch>
            <Route exact path='/'>
              <HomePage />
            </Route>
            <Route path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </PostsContextProvider>
  );
}

App.propTypes = {};

export default App;
