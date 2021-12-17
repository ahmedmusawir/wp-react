import React, { useContext } from 'react';
import WPAPI from 'wpapi';
import Content from '../components/layouts/Content';
import { Row, Col, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { Formik, Form } from 'formik';
import FormikControl from './formik/FormikControl';
import * as Yup from 'yup';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { PostsContext } from '../contexts/PostsContext';

function EditForm() {
  const { id } = useParams();
  const { state, dispatch } = useContext(PostsContext);
  const history = useHistory();

  const wp = new WPAPI({
    endpoint: 'https://digitalsupportstaff.com/wp-json',
    username: 'cgteam',
    password: 'hUoV 8WCW Dllz 4rP4 BlEo Ip27',
  });

  // const editPost = async (post) => {
  //   await wp
  //     .posts()
  //     .id(2501)
  //     .update({
  //       // Update the title
  //       title: post.title.rendered,
  //       content: post.content.rendered,
  //       // Set the post live (assuming it was "draft" before)
  //       status: 'publish',
  //     })
  //     .then(function (response) {
  //       console.log(response);
  //     });
  // };
  console.log('SINGLE EDIT PAGE', state.posts);

  let singlePost;
  singlePost = _.find(state.posts, (post) => post.id === Number(id));
  console.log('single Post', singlePost);

  // HTML PARSED TITLE & CONTENT
  const htmlTitle = parse(singlePost.title.rendered);
  const htmlContent = parse(singlePost.content.rendered);
  // console.log(htmlContent);
  //   FORMIK INFO
  const initialValues = {
    title: singlePost.title.rendered,
    content: singlePost.content.rendered,
  };
  const onSubmit = (values, { resetForm }) => {
    console.log('ON SUBMIT', values);
    resetForm({ values: initialValues });

    const editedSinglePost = {
      ...values,
    };
    console.log('EDITED SINGLE POST:', editedSinglePost);
    // editPost(editedSinglePost);
    // dispatch({ type: 'EDIT_POST', payload: editedSinglePost });
    // history.push('/');
  };
  const validationSchema = Yup.object({
    title: Yup.string().required('Title is Required!'),
    content: Yup.string().required('Content is Required!'),
  });

  return (
    <React.Fragment>
      {state.isPending && (
        <Content width='w-100' cssClassNames='h-100 row align-items-center'>
          <Spinner className='mx-auto' animation='border' variant='info' />
        </Content>
      )}
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {singlePost &&
          ((formik) => (
            <Form className='p-3 bg-light formik-comp'>
              {/* BOOK TITLE */}
              <div className='mb-2'>
                <FormikControl
                  control='input'
                  type='text'
                  name='title'
                  label='Post Title'
                  placeholder='Title of the Post'
                  className={
                    formik.touched.title && formik.errors.title
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                />
              </div>

              {/* TEXT AREA */}
              <div className='mb-3'>
                <FormikControl
                  control='textarea'
                  name='content'
                  label='Post Content'
                  placeholder='Content'
                  rows={4}
                  className={
                    formik.touched.content && formik.errors.content
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                />
              </div>
              <hr className='bg-primary' />
              <button className='btn btn-primary' type='submit'>
                Submit
              </button>
              <button className='btn btn-warning ml-1' type='reset'>
                Reset
              </button>
            </Form>
          ))}
      </Formik>
    </React.Fragment>
  );
}

EditForm.propTypes = {};

export default EditForm;
