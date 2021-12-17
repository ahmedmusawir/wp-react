import React, { useEffect, useState } from 'react';
import WPAPI from 'wpapi';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';

function WpapiStart() {
  //   Create WPAPI instance and add endpoint to /wp-json
  const wp = new WPAPI({
    endpoint: 'https://digitalsupportstaff.com/wp-json',
    username: 'cgteam',
    password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  });

  // MESSED UP...
  //   const wp = new WPAPI({
  //     endpoint: 'https://selflist.cyberizestaging.com/wp-json',
  //     username: 'cybercart',
  //     password: 'AaQs sFii vgo5 8HuV JScy KkvU',
  //   });

  //   MESSED UP LIKE ABOVE ... WHOLE DOMAIN
  //   const wp = new WPAPI({
  //     endpoint: 'https://asm-dev.cyberizestaging.com/wp-json',
  //     username: 'cgteam',
  //     password: 'mRie W6WE qUrb yQ1m DvBL PrQE',
  //   });

  const [posts, setPosts] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setIsPending(true);
        // Fetch posts
        const fetchedPosts = await wp.posts().get();
        console.log(fetchedPosts);
        setPosts(fetchedPosts);
        setIsPending(false);
      } catch (e) {
        // print error
        console.log(e);
        return [];
      }
    }

    fetchPosts();
  }, []);

  const deletePost = (id) => {
    wp.posts()
      .id(id)
      .delete()
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <ListGroup variant='flush'>
      {isPending && (
        <Spinner className='mx-auto' animation='border' variant='success' />
      )}
      {posts &&
        posts.map((post) => (
          <React.Fragment key={post.id}>
            <Row className='mb-2'>
              <Col sm={10}>
                <Link to={`/post/${post.id}`}>
                  <ListGroup.Item action>
                    {post.title.rendered}{' '}
                    <span className='badge badge-primary'>
                      Post ID: {post.id}
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

export default WpapiStart;
