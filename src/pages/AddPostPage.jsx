import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import AddForm from '../components/AddForm';
import { Link } from 'react-router-dom';

function AddPostPage() {
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h1>Add Post</h1>
            <AddForm />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default AddPostPage;
