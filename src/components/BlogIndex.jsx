import React, { useContext } from 'react';
import WPAPI from 'wpapi';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { PostsContext } from '../contexts/PostsContext';
import parse from 'html-react-parser';

function BlogIndex() {
  const { state, dispatch } = useContext(PostsContext);

  const wp = new WPAPI({
    endpoint: 'https://digitalsupportstaff.com/wp-json',
    username: 'cgteam',
    password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  });

  const deletePost = async (id) => {
    await wp
      .posts()
      .id(id)
      .delete()
      .then((res) => {
        console.log(res);
        dispatch({ type: 'REMOVE_POST', payload: id });
      });
  };

  return (
    <ListGroup variant='flush'>
      {state.isPending && (
        <Spinner className='mx-auto' animation='border' variant='success' />
      )}
      {state.posts &&
        state.posts.map((post) => (
          <React.Fragment key={post.id}>
            <Row className='mb-2'>
              <Col sm={10}>
                <Link to={`/post/${post.id}`}>
                  <ListGroup.Item action>
                    {/* <div
                      dangerouslySetInnerHTML={{
                        __html: post.content.rendered,
                      }}
                    /> */}
                    {parse(post.title.rendered)}
                    <span className='badge rounded-pill badge-primary p-2 ml-5'>
                      ID: {post.id}
                    </span>
                  </ListGroup.Item>
                </Link>
              </Col>
              <Col sm={2}>
                <button
                  className='btn btn-danger'
                  onClick={() => deletePost(post.id)}
                >
                  Delete
                </button>
              </Col>
            </Row>
          </React.Fragment>
        ))}
    </ListGroup>
  );
}

export default BlogIndex;
