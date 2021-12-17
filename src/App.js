import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainNavbar from './components/general/MainNavbar';
import NotFound from './pages/NotFound';
import './App.scss';
import HomePage from './pages/HomePage';
import PostsContextProvider from './contexts/PostsContext';
import SinglePostPage from './pages/SinglePostPage';
import EditPostPage from './pages/EditPostPage';

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
            <Route exact path='/post/:id'>
              <SinglePostPage />
            </Route>
            <Route exact path='/edit-post/:id'>
              <EditPostPage />
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
