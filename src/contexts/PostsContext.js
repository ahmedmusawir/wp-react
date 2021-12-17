import React, { createContext, useReducer, useEffect } from 'react';
import { PostsReducer } from '../reducers/PostsReducer';
import WPAPI from 'wpapi';

export const PostsContext = createContext();

function PostsContextProvider(props) {
  //   Create WPAPI instance and add endpoint to /wp-json
  const wp = new WPAPI({
    endpoint: 'https://digitalsupportstaff.com/wp-json',
    username: 'cgteam',
    password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  });
  const initialState = {
    posts: [],
    isPending: true,
  };
  const [state, dispatch] = useReducer(PostsReducer, initialState);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Fetch posts
        const fetchedPosts = await wp.posts().get();
        // console.log(fetchedPosts);
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: {
            posts: fetchedPosts,
            isPending: false,
          },
        });
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    }

    fetchPosts();
  }, []);

  return (
    <PostsContext.Provider value={{ state, dispatch }}>
      {props.children}
    </PostsContext.Provider>
  );
}

export default PostsContextProvider;
