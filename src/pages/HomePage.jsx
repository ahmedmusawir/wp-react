import React from 'react';
import Page from '../components/layouts/Page';
import { Row, Col } from 'react-bootstrap';
import Content from '../components/layouts/Content';
import WpapiStart from '../components/WpapiStart';
import BlogIndex from '../components/BlogIndex';

function HomePage() {
  return (
    <Page wide={true} pageTitle='Movie Form'>
      <Row className='justify-content-center'>
        <Col sm={12}>
          <Content width='w-100' cssClassNames='bg-light'>
            <h4>WPAPI & REACT</h4>
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
