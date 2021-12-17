import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import { Link } from 'react-router-dom';
import WpapiStart from '../components/WpapiStart';
import BlogIndex from '../components/BlogIndex';

function HomePage() {
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light clearfix'>
            <h4>WPAPI & REACT</h4>
            <Link to='/add-post' className='btn btn-info float-right'>
              Add New Post
            </Link>
          </Content>
          <Content width='w-100' cssClassNames=''>
            {/* <WpapiStart /> */}
            <BlogIndex />
          </Content>
        </Col>
      </Row>
    </Page>
  );
}

export default HomePage;
