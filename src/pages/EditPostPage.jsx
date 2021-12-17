import React, { useContext } from 'react';
import Page from '../components/layouts/Page';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Content from '../components/layouts/Content';
import EditForm from '../components/EditForm';
import { PostsContext } from '../contexts/PostsContext';
import _ from 'lodash';

function EditPostPage() {
  const { id } = useParams();
  const { state } = useContext(PostsContext);
  const postId = Number(id);

  let singlePost;
  singlePost = _.find(state.posts, (post) => post.id === Number(id));

  return (
    <Page wide={true} pageTitle='Post Edit Form'>
      {state.isPending && (
        <Content width='w-100' cssClassNames='h-100 row align-items-center'>
          <Spinner className='mx-auto' animation='border' variant='info' />
        </Content>
      )}
      <Row className='justify-content-center'>
        <Col sm={12}>
          {singlePost && (
            <Content width='w-100' cssClassNames='bg-light'>
              <h1>Edit Post</h1>
              <h4>Post ID: {id}</h4>
              <EditForm singlePost={singlePost} postId={postId} />
            </Content>
          )}
        </Col>
      </Row>
    </Page>
  );
}

export default EditPostPage;
